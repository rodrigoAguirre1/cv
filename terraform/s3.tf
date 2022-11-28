locals {
  mime_types = jsondecode(file("${path.module}/mime.json"))
}

resource "aws_s3_bucket" "cv-bucket" {
  bucket = "cv-rodrigo-aguirre"
  tags = {
    Name = "My bucket"
  }
}

resource "aws_s3_bucket_acl" "cv-bucket" {
  bucket = aws_s3_bucket.cv-bucket.id
  acl    = "private"
}

resource "aws_s3_bucket_public_access_block" "cv-bucket" {
  bucket = aws_s3_bucket.cv-bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_policy" "s3_policy" {
  bucket = aws_s3_bucket.cv-bucket.id
  policy = data.aws_iam_policy_document.s3_policy.json
}

data "aws_iam_policy_document" "s3_policy" {
  statement {

    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.cv-bucket.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.my_origin_access_identity.iam_arn]
    }
  }
}

resource "aws_s3_object" "cv-bucket" {
  bucket       = aws_s3_bucket.cv-bucket.id
  for_each     = fileset("/home/rodri/repositorios/cv/static-web/", "**")
  key          = each.value
  source       = "/home/rodri/repositorios/cv/static-web/${each.value}"
  etag         = filemd5("/home/rodri/repositorios/cv/static-web/${each.value}")
  content_type = lookup(local.mime_types, regex("\\.[^.]+$", each.value), null)
}

