package stats

import (
	"github.com/cloudquery/plugin-sdk/schema"
)

func StatsRegions() *schema.Table {
	return &schema.Table{
		Name:        "fastly_stats_regions",
		Description: `https://developer.fastly.com/reference/api/metrics-stats/historical-stats/#get-regions`,
		Resolver:    fetchStatsRegions,
		Columns: []schema.Column{
			{
				Name:     "name",
				Type:     schema.TypeString,
				Resolver: setRegionName,
				CreationOptions: schema.ColumnCreationOptions{
					PrimaryKey: true,
				},
			},
		},
	}
}
