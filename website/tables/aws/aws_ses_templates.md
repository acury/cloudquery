# Table: aws_ses_templates

This table shows data for Amazon Simple Email Service (SES) Templates.

https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetEmailTemplate.html

The primary key for this table is **arn**.

## Columns

| Name          | Type          |
| ------------- | ------------- |
|_cq_source_name|String|
|_cq_sync_time|Timestamp|
|_cq_id|UUID|
|_cq_parent_id|UUID|
|account_id|String|
|region|String|
|arn (PK)|String|
|template_name|String|
|html|String|
|subject|String|
|text|String|
|created_timestamp|Timestamp|