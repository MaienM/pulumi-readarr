---
title: Readarr Installation & Configuration
meta_desc: Information on how to install the Readarr provider.
layout: installation
---

## Installation

The Pulumi Readarr provider is available as a package in all Pulumi languages:

* JavaScript/TypeScript: [`@maienm/pulumi-readarr`](https://www.npmjs.com/package/@maienm/pulumi-readarr)
* Python: [`pulumi_readarr`](https://pypi.org/project/pulumi_readarr/)
* Go: [`github.com/MaienM/pulumi-readarr/sdk/go/readarr`](https://pkg.go.dev/github.com/MaienM/pulumi-readarr/sdk/go/readarr)
* .NET: [`MaienM.Readarr`](https://www.nuget.org/packages/MaienM.Readarr)


## Configuration

> Note:  
> Replace the following **sample content**, with the configuration options
> of the wrapped Terraform provider and remove this note.

The following configuration points are available for the `readarr` provider:

- `readarr:apiKey` (environment: `readarr_API_KEY`) - the API key for `readarr`
- `readarr:region` (environment: `readarr_REGION`) - the region in which to deploy resources

### Provider Binary

The Readarr provider binary is a third party binary. It can be installed using the `pulumi plugin` command.

```bash
pulumi plugin install resource readarr <version>
```

Replace the version string `<version>` with your desired version.
