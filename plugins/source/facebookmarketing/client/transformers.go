package client

import (
	"reflect"

	"github.com/cloudquery/plugin-sdk/schema"
	"github.com/cloudquery/plugin-sdk/transformers"
)

// We can't use the *time.Time type because facebook's time format is not RFC3339.
// '2023-03-05T16:46:23+0200' instead of RFC3339 '2023-03-05T16:46:23+02:00'.
// We use the 'string' golang type, and lated convert to *time.Time in the cq resolver.
// We use the 'datetime' tag to recognize thiese datetime fields
func TypeTransformer(field reflect.StructField) (schema.ValueType, error) {
	if field.Tag.Get("datetime") != "" {
		return schema.TypeTimestamp, nil
	}

	return transformers.DefaultTypeTransformer(field)
}

// See comment about facebook's time format above..
func ResolverTransformer(field reflect.StructField, path string) schema.ColumnResolver {
	if field.Tag.Get("datetime") != "" {
		return FacebookDatetimeResolver(path)
	}
	return transformers.DefaultResolverTransformer(field, path)
}

var options = []transformers.StructTransformerOption{
	transformers.WithTypeTransformer(TypeTransformer),
	transformers.WithResolverTransformer(ResolverTransformer),
}

func TransformWithStruct(t any, opts ...transformers.StructTransformerOption) schema.Transform {
	return transformers.TransformWithStruct(t, append(options, opts...)...)
}
