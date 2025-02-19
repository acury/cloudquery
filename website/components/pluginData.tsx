import {Category} from "./Category";

export type Plugin = {
  id: string;
  name: string;
  href?: string; // external link to plugin
  website?: string; // related website for the API, if any
  description?: string;
  logo?: string;
  logoDark?: string;
  kind: "official" | "partner" | "community" | "unpublished";
  category: Category;
};

export const SOURCE_PLUGINS: Plugin[] = [
  {
    name: "Alibaba Cloud",
    logo: "/images/logos/plugins/alicloud.svg",
    logoDark: "/images/logos/plugins/alicloud-dark.svg",
    id: "alicloud",
    kind: "official",
    category: "cloud-infrastructure",
  },
  {
    name: "AWS",
    logo: "/images/logos/plugins/aws.svg",
    logoDark: "/images/logos/plugins/aws-dark.svg",
    id: "aws",
    kind: "official",
    category: "cloud-infrastructure",
  },
  {
    name: "AWS Pricing",
    logo: "/images/logos/plugins/aws.svg",
    logoDark: "/images/logos/plugins/aws-dark.svg",
    id: "awspricing",
    kind: "official",
    category: "cloud-finops",
    website: "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/price-changes.html"
  },
  {
    name: "Azure",
    logo: "/images/logos/plugins/azure.svg",
    id: "azure",
    kind: "official",
    category: "cloud-infrastructure",
  },
  {
    name: "Azure DevOps",
    logo: "/images/logos/plugins/azuredevops.svg",
    id: "azuredevops",
    kind: "official",
    category: "cloud-infrastructure",
  },
  {
    name: "Cloudflare",
    logo: "/images/logos/plugins/cloudflare.svg",
    id: "cloudflare",
    kind: "official",
    category: "cloud-infrastructure",
  },
  {
    name: "Datadog",
    logo: "/images/logos/plugins/datadog.svg",
    logoDark: "/images/logos/plugins/datadog-dark.svg",
    id: "datadog",
    kind: "official",
    category: "engineering-analytics",
  },
  {
    name: "Digital Ocean",
    logo: "/images/logos/plugins/digitalocean.svg",
    id: "digitalocean",
    kind: "official",
    category: "cloud-infrastructure",
  },
  {
    name: "Facebook Marketing",
    logo: "/images/logos/plugins/meta.svg",
    id: "facebookmarketing",
    kind: "official",
    category: "marketing-analytics",
  },
  {
    name: "Fastly",
    logo: "/images/logos/plugins/fastly.svg",
    id: "fastly",
    kind: "official",
    category: "cloud-infrastructure",
  },
  {
    name: "Gandi",
    logo: "/images/logos/plugins/gandi.svg",
    logoDark: "/images/logos/plugins/gandi-dark.svg",
    id: "gandi",
    kind: "official",
    category: "cloud-infrastructure",
  },
  {
    name: "GitHub",
    logo: "/images/logos/plugins/github.svg",
    logoDark: "/images/logos/plugins/github-dark.svg",
    id: "github",
    kind: "official",
    category: "engineering-analytics",
  },
  {
    name: "GitLab",
    logo: "/images/logos/plugins/gitlab.svg",
    id: "gitlab",
    kind: "official",
    category: "engineering-analytics",
  },
  {
    name: "Google Ads",
    id: "googleads",
    kind: "official",
    category: "marketing-analytics",
    logo: "/images/logos/plugins/ga2.svg",
  },
  {
    name: "Google Analytics",
    logo: "/images/logos/plugins/ga.svg",
    id: "googleanalytics",
    kind: "official",
    category: "marketing-analytics",
  },
  {
    name: "Google Cloud Platform",
    logo: "/images/logos/plugins/gcp.svg",
    id: "gcp",
    kind: "official",
    category: "cloud-infrastructure",
  },
  {
    name: "Hacker News API",
    logo: "/images/logos/plugins/hackernews.svg",
    website: "https://github.com/HackerNews/API",
    id: "hackernews",
    kind: "official",
    category: "other",
  },
  {
    name: "Heroku",
    logo: "/images/logos/plugins/heroku.svg",
    id: "heroku",
    kind: "official",
    category: "cloud-infrastructure",
  },
  {
    name: "Homebrew",
    logo: "/images/logos/plugins/homebrew.svg",
    id: "homebrew",
    kind: "official",
    category: "marketing-analytics",
  },
  {
    name: "HubSpot",
    logo: "/images/logos/plugins/hubspot.svg",
    id: "hubspot",
    kind: "official",
    category: "marketing-analytics",
  },
  {
    name: "Kubernetes",
    logo: "/images/logos/plugins/kubernetes.svg",
    id: "k8s",
    kind: "official",
    category: "cloud-infrastructure",
  },
  {
    name: "LaunchDarkly",
    logo: "/images/logos/plugins/launchdarkly.svg",
    logoDark: "/images/logos/plugins/launchdarkly-dark.svg",
    id: "launchdarkly",
    kind: "official",
    category: "engineering-analytics",
  },
  {
    name: "Mixpanel",
    logo: "/images/logos/plugins/mixpanel.svg",
    logoDark: "/images/logos/plugins/mixpanel-dark.svg",
    id: "mixpanel",
    kind: "official",
    category: "marketing-analytics",
  },
  {
    name: "MySQL",
    logo: "/images/logos/plugins/mysql.svg",
    logoDark: "/images/logos/plugins/mysql-dark.svg",
    id: "mysql",
    kind: "official",
    category: "databases",
  },
  {
    name: "Okta",
    logo: "/images/logos/plugins/okta.svg",
    id: "okta",
    kind: "official",
    category: "cloud-infrastructure",
  },
  {
    name: "Oracle",
    logo: "/images/logos/plugins/oracle.svg",
    id: "oracle",
    kind: "official",
    category: "cloud-infrastructure",
  },
  {
    name: "Pagerduty",
    logo: "/images/logos/plugins/pagerduty.svg",
    id: "pagerduty",
    kind: "official",
    category: "engineering-analytics",
  },
  {
    name: "Plausible Analytics",
    logo: "/images/logos/plugins/plausibleanalytics.svg",
    id: "plausible",
    kind: "official",
    category: "marketing-analytics",
  },
  {
    name: "PostgreSQL",
    logo: "/images/logos/plugins/postgresql.svg",
    id: "postgresql",
    kind: "official",
    category: "databases",
  },
  {
    name: "Salesforce",
    logo: "/images/logos/plugins/salesforce.svg",
    id: "salesforce",
    kind: "official",
    category: "marketing-analytics",
  },
  {
    name: "SharePoint",
    logo: "/images/logos/plugins/sharepoint.svg",
    href: "https://github.com/koltyakov/cq-source-sharepoint",
    id: "sharepoint",
    kind: "community",
    category: "cloud-infrastructure",
  },
  {
    name: "Swetrix",
    logo: "/images/logos/plugins/swetrix.svg",
    href: "https://github.com/swetrix/cq-source-swetrix",
    id: "swetrix",
    kind: "partner",
    category: "cloud-infrastructure",
  },
  {
    name: "Scaleway",
    logo: "/images/logos/plugins/scaleway.svg",
    href: "https://github.com/scaleway/cq-source-scaleway",
    id: "scaleway",
    kind: "partner",
    category: "cloud-infrastructure",
  },
  {
    name: "Shopify",
    logo: "/images/logos/plugins/shopify.svg",
    id: "shopify",
    kind: "official",
    category: "marketing-analytics",
  },
  {
    name: "Simple Analytics",
    logo: "/images/logos/plugins/simpleanalytics.svg",
    href: "https://github.com/simpleanalytics/cq-source-simpleanalytics",
    id: "simpleanalytics",
    kind: "partner",
    category: "marketing-analytics",
  },
  {
    name: "Slack",
    logo: "/images/logos/plugins/slack.svg",
    id: "slack",
    kind: "official",
    category: "engineering-analytics",
  },
  {
    name: "Snyk",
    logo: "/images/logos/plugins/snyk.svg",
    id: "snyk",
    kind: "official",
    category: "engineering-analytics",
  },
  {
    name: "Stripe",
    logo: "/images/logos/plugins/stripe.svg",
    id: "stripe",
    kind: "official",
    category: "cloud-finops",
  },
  {
    name: "Tailscale",
    logo: "/images/logos/plugins/tailscale.svg",
    logoDark: "/images/logos/plugins/tailscale-dark.svg",
    id: "tailscale",
    kind: "official",
    category: "cloud-infrastructure",
  },
  {
    name: "Terraform",
    logo: "/images/logos/plugins/terraform.svg",
    id: "terraform",
    kind: "official",
    category: "cloud-infrastructure",
  },
  {
    name: "Vercel",
    logo: "/images/logos/plugins/vercel.svg",
    logoDark: "/images/logos/plugins/vercel-dark.svg",
    id: "vercel",
    kind: "official",
    category: "cloud-infrastructure",
  },
  {
    name: "Yandex Cloud",
    logo: "/images/logos/plugins/yandex.svg",
    id: "yandexcloud",
    href: "https://github.com/yandex-cloud/cq-source-yandex",
    kind: "partner",
    category: "cloud-infrastructure",
  },
];

export const DESTINATION_PLUGINS: Plugin[] = [
  {
    name: "Azure Blob Storage",
    logo: "/images/logos/plugins/azblob.svg",
    id: "azblob",
    kind: "official",
    category: "data-warehouses-lakes",
  },
  {
    name: "BigQuery",
    logo: "/images/logos/plugins/bigquery.svg",
    id: "bigquery",
    kind: "official",
    category: "data-warehouses-lakes",
  },
  {
    name: "ClickHouse",
    logo: "/images/logos/plugins/clickhouse.svg",
    id: "clickhouse",
    kind: "official",
    category: "data-warehouses-lakes",
  },
  {
    name: "DuckDB",
    logo: "/images/logos/plugins/duckdb.svg",
    logoDark: "/images/logos/plugins/duckdb-dark.svg",
    id: "duckdb",
    kind: "official",
    category: "data-warehouses-lakes",
  },
  {
    name: "Elasticsearch",
    logo: "/images/logos/plugins/elasticsearch.svg",
    id: "elasticsearch",
    kind: "official",
    category: "databases",
  },
  {
    name: "File",
    logo: "/images/logos/plugins/file.svg",
    id: "file",
    kind: "official",
    category: "data-warehouses-lakes",
  },
  {
    name: "GCS",
    logo: "/images/logos/plugins/gcs.svg",
    id: "gcs",
    kind: "official",
    category: "data-warehouses-lakes",
  },
  {
    name: "Gremlin",
    logo: "/images/logos/plugins/gremlin.svg",
    id: "gremlin",
    kind: "official",
    category: "databases",
  },
  {
    name: "Kafka",
    logo: "/images/logos/plugins/kafka.svg",
    logoDark: "/images/logos/plugins/kafka-dark.svg",
    id: "kafka",
    kind: "official",
    category: "databases",
  },
  {
    name: "Microsoft SQL Server",
    logo: "/images/logos/plugins/mssql.svg",
    id: "mssql",
    kind: "official",
    category: "databases",
  },
  {
    name: "MySQL",
    logo: "/images/logos/plugins/mysql.svg",
    logoDark: "/images/logos/plugins/mysql-dark.svg",
    id: "mysql",
    kind: "official",
    category: "databases",
  },
  {
    name: "MongoDB",
    logo: "/images/logos/plugins/mongodb.svg",
    id: "mongodb",
    kind: "official",
    category: "databases",
  },
  {
    name: "Neo4j",
    logo: "/images/logos/plugins/neo4j.svg",
    id: "neo4j",
    kind: "official",
    category: "databases",
  },
  {
    name: "PostgreSQL",
    logo: "/images/logos/plugins/postgresql.svg",
    id: "postgresql",
    kind: "official",
    category: "databases",
  },
  {
    name: "S3",
    logo: "/images/logos/plugins/s3.svg",
    id: "s3",
    kind: "official",
    category: "data-warehouses-lakes",
  },
  {
    name: "Snowflake",
    logo: "/images/logos/plugins/snowflake.svg",
    id: "snowflake",
    kind: "official",
    category: "data-warehouses-lakes",
  },
  {
    name: "SQLite",
    logo: "/images/logos/plugins/sqlite.svg",
    id: "sqlite",
    kind: "official",
    category: "databases",
  },
];

export const UNPUBLISHED_SOURCE_PLUGINS: Plugin[] = [
  {
    name: "Airtable",
    id: "airtable",
    href: "https://github.com/cloudquery/cloudquery/issues/8869",
    kind: "unpublished",
    category: "project-management",
    logo: "/images/logos/plugins/airtable.svg",
  },
  {
    name: "AfterShip",
    id: "aftership",
    href: "https://github.com/cloudquery/cloudquery/issues/9047",
    kind: "unpublished",
    category: "shipment-tracking",
    logo: "/images/logos/plugins/aftership.svg",
  },
  {
    name: "Amazon Ads",
    id: "amazonads",
    href: "https://github.com/cloudquery/cloudquery/issues/8424",
    kind: "unpublished",
    category: "marketing-analytics",
    logo: "/images/logos/plugins/amazon.svg",
    logoDark: "/images/logos/plugins/amazon-dark.svg",
  },
  {
    name: "Amplitude",
    id: "amplitude",
    href: "https://github.com/cloudquery/cloudquery/issues/8423",
    kind: "unpublished",
    category: "product-analytics",
    logo: "/images/logos/plugins/amplitude.svg",
  },
  {
    name: "Atlassian Jira",
    id: "atlassian-jira",
    href: "https://github.com/cloudquery/cloudquery/issues/8104",
    kind: "unpublished",
    category: "engineering-analytics",
    logo: "/images/logos/plugins/jira.svg",
  },
  {
    name: "Bamboo HR",
    id: "bamboo-hr",
    href: "https://github.com/cloudquery/cloudquery/issues/8426",
    kind: "unpublished",
    category: "hr-software",
    logo: "/images/logos/plugins/bamboohr.svg",
  },
  {
    name: "Baremetrics",
    id: "baremetrics",
    href: "https://github.com/cloudquery/cloudquery/issues/9045",
    kind: "unpublished",
    category: "marketing-analytics",
    logo: "/images/logos/plugins/baremetrics.svg",
  },
  {
    name: "Bing Ads",
    id: "bing-ads",
    href: "https://github.com/cloudquery/cloudquery/issues/8425",
    kind: "unpublished",
    category: "marketing-analytics",
    logo: "/images/logos/plugins/bingads.svg",
  },
  {
    name: "BitBucket",
    id: "bitbucket",
    href: "https://github.com/cloudquery/cloudquery/issues/5510",
    kind: "unpublished",
    category: "engineering-analytics",
    logo: "/images/logos/plugins/bitbucket.svg",
  },
  {
    name: "Chargebee",
    id: "chargebee",
    href: "https://github.com/cloudquery/cloudquery/issues/9048",
    kind: "unpublished",
    category: "cloud-finops",
    logo: "/images/logos/plugins/chargebee.svg",
  },
  {
    name: "CloudWatch",
    id: "cloudwatch",
    href: "https://github.com/cloudquery/cloudquery/issues/8163",
    kind: "unpublished",
    category: "engineering-analytics",
  },
  {
    name: "Cloudinary",
    id: "cloudinary",
    href: "https://github.com/cloudquery/cloudquery/issues/9044",
    kind: "unpublished",
    category: "cloud-infrastructure",
    logo: "/images/logos/plugins/cloudinary.svg",
  },
  {
    name: "Crowdstrike",
    id: "crowdstrike",
    href: "https://github.com/cloudquery/cloudquery/issues/9133",
    kind: "unpublished",
    category: "security",
  },
  {
    name: "Detrack",
    id: "detrack",
    href: "https://github.com/cloudquery/cloudquery/issues/9054",
    kind: "unpublished",
    category: "shipment-tracking",
  },
  {
    name: "Gmail",
    id: "gmail",
    href: "https://github.com/cloudquery/cloudquery/issues/8135",
    kind: "unpublished",
    category: "marketing-analytics",
  },
  {
    name: "Google Sheets",
    id: "google-sheets",
    href: "https://github.com/cloudquery/cloudquery/issues/5190",
    kind: "unpublished",
    category: "other",
    logo: "/images/logos/plugins/google-sheets.svg",
  },
  {
    name: "Hashicorp Vault",
    id: "hashicorp-vault",
    href: "https://github.com/cloudquery/cloudquery/issues/6738",
    kind: "unpublished",
    category: "cloud-infrastructure",
    logo: "/images/logos/plugins/hashicorp-vault.svg",
    logoDark: "/images/logos/plugins/hashicorp-vault-dark.svg",
  },
  {
    name: "Infoblox",
    id: "infoblox",
    href: "https://github.com/cloudquery/cloudquery/issues/8383",
    kind: "unpublished",
    category: "cloud-infrastructure",
    logo: "/images/logos/plugins/infoblox.svg",
    logoDark: "/images/logos/plugins/infoblox-dark.svg",
  },
  {
    name: "Intercom",
    id: "intercom",
    href: "https://github.com/cloudquery/cloudquery/issues/9041",
    kind: "unpublished",
    category: "cloud-infrastructure",
    logo: "/images/logos/plugins/intercom.svg",
  },
  {
    name: "LinkedIn Ads",
    id: "linkedin-ads",
    href: "https://github.com/cloudquery/cloudquery/issues/9033",
    kind: "unpublished",
    category: "marketing-analytics",
    logo: "/images/logos/plugins/linkedin.svg",
  },
  {
    name: "Mailchimp",
    id: "mailchimp",
    href: "https://github.com/cloudquery/cloudquery/issues/8430",
    kind: "unpublished",
    category: "marketing-analytics",
    logo: "/images/logos/plugins/mailchimp.svg",
  },
  {
    name: "Mailgun",
    id: "mailgun",
    href: "https://github.com/cloudquery/cloudquery/issues/9050",
    kind: "unpublished",
    category: "marketing-analytics",
    logo: "/images/logos/plugins/mailgun.svg",
  },
  {
    name: "Marketo",
    id: "marketo",
    href: "https://github.com/cloudquery/cloudquery/issues/8428",
    kind: "unpublished",
    category: "marketing-analytics",
    logo: "/images/logos/plugins/marketo.svg",
  },
  {
    name: "Monday",
    id: "monday",
    href: "https://github.com/cloudquery/cloudquery/issues/8431",
    kind: "unpublished",
    category: "project-management",
  },
  {
    name: "MongoDB Atlas",
    id: "mongodb-atlas",
    href: "https://github.com/cloudquery/cloudquery/issues/9134",
    kind: "unpublished",
    category: "databases",
    logo: "/images/logos/plugins/mongodb.svg",
  },
  {
    name: "Microsoft SQL Server",
    id: "mssql",
    href: "https://github.com/cloudquery/cloudquery/issues/8861",
    kind: "unpublished",
    category: "databases",
    logo: "/images/logos/plugins/mssql.svg",
  },
  {
    name: "MySQL",
    id: "mysql",
    href: "https://github.com/cloudquery/cloudquery/issues/8411",
    kind: "unpublished",
    category: "databases",
    logo: "/images/logos/plugins/mysql.svg",
  },
  {
    name: "New Relic",
    id: "new-relic",
    href: "https://github.com/cloudquery/cloudquery/issues/9040",
    kind: "unpublished",
    category: "product-analytics",
  },
  {
    name: "OracleDB",
    id: "oracledb",
    href: "https://github.com/cloudquery/cloudquery/issues/8862",
    kind: "unpublished",
    category: "databases",
    logo: "/images/logos/plugins/oracle.svg",
  },
  {
    name: "OnFleet",
    id: "onfleet",
    href: "https://github.com/cloudquery/cloudquery/issues/9053",
    kind: "unpublished",
    category: "fleet-management",
  },
  {
    name: "Paypal",
    id: "paypal",
    href: "https://github.com/cloudquery/cloudquery/issues/6781",
    kind: "unpublished",
    category: "cloud-finops",
    logo: "/images/logos/plugins/paypal.svg",
  },
  {
    name: "Pendo",
    id: "pendo",
    href: "https://github.com/cloudquery/cloudquery/issues/9360",
    kind: "unpublished",
    category: "marketing-analytics",
  },
  {
    name: "Prisma",
    id: "prisma",
    href: "https://github.com/cloudquery/cloudquery/issues/6582",
    kind: "unpublished",
    category: "cloud-infrastructure",
    logo: "/images/logos/plugins/prisma.svg",
    logoDark: "/images/logos/plugins/prisma-dark.svg",
  },
  {
    name: "Render",
    id: "render",
    href: "https://github.com/cloudquery/cloudquery/issues/9161",
    kind: "unpublished",
    category: "cloud-infrastructure",
  },
  {
    name: "Reddit Advertising",
    id: "reddit-advertising",
    href: "https://github.com/cloudquery/cloudquery/issues/8684",
    kind: "unpublished",
    category: "marketing-analytics",
    logo: "/images/logos/plugins/reddit.svg",
  },
  {
    name: "Samsara",
    id: "samsara",
    href: "https://github.com/cloudquery/cloudquery/issues/9052",
    kind: "unpublished",
    category: "fleet-management",
  },
  {
    name: "SentinelOne",
    id: "sentinel-one",
    href: "https://github.com/cloudquery/cloudquery/issues/9136",
    kind: "unpublished",
    category: "security",
  },
  {
    name: "Shippo",
    id: "shippo",
    href: "https://github.com/cloudquery/cloudquery/issues/9038",
    kind: "unpublished",
    category: "shipment-tracking",
    logo: "/images/logos/plugins/shippo.svg",
  },
  {
    name: "Shipup",
    id: "shipup",
    href: "https://github.com/cloudquery/cloudquery/issues/9055",
    kind: "unpublished",
    category: "shipment-tracking",
  },
  {
    name: "S3",
    id: "s3",
    href: "https://github.com/cloudquery/cloudquery/issues/8320",
    kind: "unpublished",
    category: "data-warehouses-lakes",
    logo: "/images/logos/plugins/s3.svg",
  },
  {
    name: "Snowflake Configuration",
    id: "snowflake-config",
    href: "https://github.com/cloudquery/cloudquery/issues/9135",
    kind: "unpublished",
    category: "databases",
    logo: "/images/logos/plugins/snowflake.svg",
  },
  {
    name: "Sonatype Nexus",
    id: "sonatype-nexus",
    href: "https://github.com/cloudquery/cloudquery/issues/7640",
    kind: "unpublished",
    category: "cloud-infrastructure",
    logo: "/images/logos/plugins/sonatype.svg",
  },
  {
    name: "Sophos",
    id: "sophos",
    href: "https://github.com/cloudquery/cloudquery/issues/9131",
    kind: "unpublished",
    category: "security",
  },
  {
    name: "Square",
    id: "square",
    href: "https://github.com/cloudquery/cloudquery/issues/9037",
    kind: "unpublished",
    category: "cloud-finops",
    logo: "/images/logos/plugins/square.svg",
    logoDark: "/images/logos/plugins/square-dark.svg",
  },
  {
    name: "Tenable",
    id: "tenable",
    href: "https://github.com/cloudquery/cloudquery/issues/9132",
    kind: "unpublished",
    category: "security",
  },
  {
    name: "Twilio",
    id: "twilio",
    href: "https://github.com/cloudquery/cloudquery/issues/9035",
    kind: "unpublished",
    category: "cloud-infrastructure",
    logo: "/images/logos/plugins/twilio.svg",
  },
  {
    name: "Twilio Sendgrid",
    id: "sendgrid",
    href: "https://github.com/cloudquery/cloudquery/issues/9039",
    kind: "unpublished",
    category: "marketing-analytics",
    logo: "/images/logos/plugins/sendgrid.svg",
  },
  {
    name: "Typeform",
    id: "typeform",
    href: "https://github.com/cloudquery/cloudquery/issues/9034",
    kind: "unpublished",
    category: "marketing-analytics",
    logo: "/images/logos/plugins/typeform.svg",
    logoDark: "/images/logos/plugins/typeform-dark.svg",
  },
  {
    name: "Zoho Campaign",
    id: "zoho-campaign",
    website: "https://www.zoho.com",
    href: "https://github.com/cloudquery/cloudquery/issues/9028",
    kind: "unpublished",
    category: "product-analytics",
    logo: "/images/logos/plugins/zoho.svg",
  },
  {
    name: "Zoho CRM",
    id: "zoho-crm",
    website: "https://www.zoho.com",
    href: "https://github.com/cloudquery/cloudquery/issues/9029",
    kind: "unpublished",
    category: "marketing-analytics",
    logo: "/images/logos/plugins/zoho.svg",
  },
  {
    name: "Zoom",
    id: "zoom",
    href: "https://github.com/cloudquery/cloudquery/issues/1507",
    kind: "unpublished",
    category: "cloud-infrastructure",
    logo: "/images/logos/plugins/zoom.svg",
  },
];

export function getPlugin(kind: string, id: string): Plugin {
  if (kind === "destination") {
    return DESTINATION_PLUGINS.find((p) => p.id === id);
  }
  return [...SOURCE_PLUGINS, ...UNPUBLISHED_SOURCE_PLUGINS].find((p) => p.id === id);
}
