package kms

import (
	"github.com/aws/aws-sdk-go-v2/service/kms/types"
	"github.com/cloudquery/cloudquery/plugins/source/aws/client"
	"github.com/cloudquery/plugin-sdk/schema"
	"github.com/cloudquery/plugin-sdk/transformers"
)

func Aliases() *schema.Table {
	tableName := "aws_kms_aliases"
	return &schema.Table{
		Name:        tableName,
		Description: `https://docs.aws.amazon.com/kms/latest/APIReference/API_AliasListEntry.html`,
		Resolver:    fetchKmsAliases,
		Transform:   transformers.TransformWithStruct(&types.AliasListEntry{}),
		Multiplex:   client.ServiceAccountRegionMultiplexer(tableName, "kms"),
		Columns: []schema.Column{
			client.DefaultAccountIDColumn(false),
			client.DefaultRegionColumn(false),
			{
				Name:     "arn",
				Type:     schema.TypeString,
				Resolver: schema.PathResolver("AliasArn"),
				CreationOptions: schema.ColumnCreationOptions{
					PrimaryKey: true,
				},
			},
		},
	}
}
