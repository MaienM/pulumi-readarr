package shim

import (
	"github.com/devopsarr/terraform-provider-readarr/internal/provider"
	tf "github.com/hashicorp/terraform-plugin-framework/provider"
)

func NewProvider() tf.Provider {
	return provider.New()
}
