# Table: aws_qldb_ledger_journal_kinesis_streams

This table shows data for Quantum Ledger Database (QLDB) Ledger Journal Kinesis Streams.

https://docs.aws.amazon.com/qldb/latest/developerguide/API_JournalKinesisStreamDescription.html

The primary key for this table is **arn**.

## Relations

This table depends on [aws_qldb_ledgers](aws_qldb_ledgers).

## Columns

| Name          | Type          |
| ------------- | ------------- |
|_cq_source_name|String|
|_cq_sync_time|Timestamp|
|_cq_id|UUID|
|_cq_parent_id|UUID|
|account_id|String|
|region|String|
|ledger_arn|String|
|kinesis_configuration|JSON|
|ledger_name|String|
|role_arn|String|
|status|String|
|stream_id|String|
|stream_name|String|
|arn (PK)|String|
|creation_time|Timestamp|
|error_cause|String|
|exclusive_end_time|Timestamp|
|inclusive_start_time|Timestamp|