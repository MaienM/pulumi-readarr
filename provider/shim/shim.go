package shim

import (
	"github.com/devopsarr/terraform-provider-readarr/v2/internal/provider"
	tf "github.com/hashicorp/terraform-plugin-framework/provider"
)

func NewProvider() tf.Provider {
	return provider.New()
}
