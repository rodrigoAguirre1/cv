data "aws_route53_zone" "main" {
  name         = "rodrigoaguirre.com"
  private_zone = false
}

resource "aws_acm_certificate" "cert" {
  domain_name               = data.aws_route53_zone.main.name
  subject_alternative_names = ["*.${data.aws_route53_zone.main.name}"]
  validation_method         = "DNS"
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "certvalidation" {
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

resource "aws_acm_certificate_validation" "certvalidation" {
  certificate_arn         = aws_acm_certificate.cert.arn
  validation_record_fqdns = [for record in aws_route53_record.certvalidation : record.fqdn]
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
