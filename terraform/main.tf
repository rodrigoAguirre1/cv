terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.41.0"
    }
  }
  backend "s3" {
    bucket  = "cv-terraform-tfstate"
    key     = "terraform.tfstate"
    region  = "us-east-1"
    profile = "personal"
  }
}

provider "aws" {
  region  = "us-east-1"
  profile = "personal"
}