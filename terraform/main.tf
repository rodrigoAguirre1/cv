locals {
  mime_types = jsondecode(file("${path.module}/mime.json"))
}

################################################################################
# S3 Bucket
################################################################################

resource "aws_s3_bucket" "cv_bucket" {
  bucket = "cv-rodrigo-aguirre"

  tags = {
    Name = "Bucket for my static web files"
  }
}

resource "aws_s3_bucket_acl" "cv_bucket" {
  bucket = aws_s3_bucket.cv_bucket.id
  acl    = "private"
}

resource "aws_s3_bucket_public_access_block" "cv_bucket" {
  bucket = aws_s3_bucket.cv_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

#Bucket policies.
resource "aws_s3_bucket_policy" "s3_policy" {
  bucket = aws_s3_bucket.cv_bucket.id
  policy = data.aws_iam_policy_document.s3_policy.json
}

data "aws_iam_policy_document" "s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.cv_bucket.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.my_origin_access_identity.iam_arn]
    }
  }
}

#Export static web files to the bucket.
resource "aws_s3_object" "cv_bucket" {
  for_each = fileset("${path.module}/../static-web/", "**")

  bucket       = aws_s3_bucket.cv_bucket.id
  key          = each.value
  source       = "${path.module}/../static-web/${each.value}"
  etag         = filemd5("${path.module}/../static-web/${each.value}")
  content_type = lookup(local.mime_types, regex("\\.[^.]+$", each.value), null)
}

################################################################################
# Cloudfront distribution
################################################################################

resource "aws_cloudfront_origin_access_identity" "my_origin_access_identity" {
  comment = "Identify the cloudfront and also allow connection between the cloudfront and the S3 bucket"
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = aws_s3_bucket.cv_bucket.bucket_regional_domain_name
    origin_id   = aws_s3_bucket.cv_bucket.bucket_regional_domain_name

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.my_origin_access_identity.cloudfront_access_identity_path
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "The Cloudfront distribution for my static web bucket"
  default_root_object = "index.html"
  aliases             = ["rodrigoaguirre.com", "www.rodrigoaguirre.com", "gozu.rodrigoaguirre.com"]

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn            = aws_acm_certificate.cert.arn
    ssl_support_method             = "sni-only"
    minimum_protocol_version       = "TLSv1.2_2021"
    cloudfront_default_certificate = false
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = aws_s3_bucket.cv_bucket.bucket_regional_domain_name

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  tags = {
    Name = "The Cloudfront distribution for my static web bucket"
  }
}

################################################################################
# ACM Certificate
################################################################################

resource "aws_acm_certificate" "cert" {
  lifecycle {
    create_before_destroy = true
  }

  domain_name               = data.aws_route53_zone.main.name
  subject_alternative_names = ["*.${data.aws_route53_zone.main.name}"]
  validation_method         = "DNS"
}

################################################################################
# Route53
################################################################################

data "aws_route53_zone" "main" {
  name         = "rodrigoaguirre.com"
  private_zone = false
}

resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.main.zone_id
}

resource "aws_acm_certificate_validation" "cert_validation" {
  certificate_arn         = aws_acm_certificate.cert.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}

resource "aws_route53_record" "domain" {
  name    = "rodrigoaguirre.com"
  zone_id = data.aws_route53_zone.main.zone_id
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.s3_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "www_domain" {
  name    = "www.rodrigoaguirre.com"
  zone_id = data.aws_route53_zone.main.zone_id
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.s3_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "gozu_domain" {
  name    = "gozu.rodrigoaguirre.com"
  zone_id = data.aws_route53_zone.main.zone_id
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.s3_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
    evaluate_target_health = true
  }
}


