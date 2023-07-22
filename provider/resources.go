// Copyright 2016-2018, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package readarr

import (
	_ "embed"
	"fmt"
	"path/filepath"
	"strings"

	"github.com/MaienM/pulumi-readarr/provider/pkg/version"
	shimprovider "github.com/devopsarr/terraform-provider-readarr/shim"
	"github.com/ettle/strcase"
	pf "github.com/pulumi/pulumi-terraform-bridge/pf/tfbridge"
	"github.com/pulumi/pulumi-terraform-bridge/v3/pkg/tfbridge"
	"github.com/pulumi/pulumi/sdk/v3/go/common/tokens"
	"github.com/pulumi/pulumi/sdk/v3/go/common/util/contract"
)

//go:embed cmd/pulumi-resource-readarr/bridge-metadata.json
var bridgeMetadata []byte

// all of the token components used below.
const (
	// This variable controls the default name of the package in the package
	mainMod            = "index" // the readarr module
	modAuthors         = "Authors"
	modDownloadClients = "DownloadClient"
	modImportLists     = "ImportLists"
	modIndexers        = "Indexers"
	modMediaManagement = "MediaManagement"
	modMetadata        = "Metadata"
	modNotifications   = "Notifications"
	modProfiles        = "Profiles"
	modStatus          = "Status"
	modTags            = "Tags"
)

func convertName(name string) string {
	idx := strings.Index(name, "_")
	contract.Assertf(idx > 0 && idx < len(name)-1, "Invalid snake case name %s", name)
	name = name[idx+1:]
	contract.Assertf(len(name) > 0, "Invalid snake case name %s", name)
	return strcase.ToPascal(name)
}

func makeDataSource(mod string, name string) tokens.ModuleMember {
	name = convertName(name)
	return tfbridge.MakeDataSource("readarr", mod, "get"+name)
}

func makeResource(mod string, res string) tokens.Type {
	return tfbridge.MakeResource("readarr", mod, convertName(res))
}

// Provider returns additional overlaid schema and metadata associated with the provider..
func Provider() tfbridge.ProviderInfo {
	// Instantiate the Terraform provider
	p := pf.ShimProvider(shimprovider.NewProvider(version.Version)())

	// Create a Pulumi provider mapping
	return tfbridge.ProviderInfo{
		Name: "readarr",
		P:    p,
		// DisplayName is a way to be able to change the casing of the provider
		// name when being displayed on the Pulumi registry
		DisplayName: "readarr",
		// The default publisher for all packages is Pulumi.
		// Change this to your personal name (or a company name) that you
		// would like to be shown in the Pulumi Registry if this package is published
		// there.
		Publisher: "MaienM",
		// LogoURL is optional but useful to help identify your package in the Pulumi Registry
		// if this package is published there.
		//
		// You may host a logo on a domain you control or add an SVG logo for your package
		// in your repository and use the raw content URL for that file as your logo URL.
		LogoURL: "https://raw.githubusercontent.com/MaienM/pulumi-readarr/main/docs/readarr.png",
		// PluginDownloadURL is an optional URL used to download the Provider
		// for use in Pulumi programs
		// e.g https://github.com/org/pulumi-provider-name/releases/
		PluginDownloadURL: "github://api.github.com/MaienM/pulumi-readarr",
		Description:       "A Pulumi package for creating and managing a readarr application.",
		// category/cloud tag helps with categorizing the package in the Pulumi Registry.
		// For all available categories, see `Keywords` in
		// https://www.pulumi.com/docs/guides/pulumi-packages/schema/#package.
		Keywords: []string{
			"pulumi",
			"readarr",
			"category/infrastructure",
		},
		License:    "Apache-2.0",
		Homepage:   "https://github.com/MaienM/pulumi-readarr",
		Repository: "https://github.com/MaienM/pulumi-readarr",
		// The GitHub Org for the provider - defaults to `terraform-providers`. Note that this
		// should match the TF provider module's require directive, not any replace directives.
		Version:      version.Version,
		GitHubOrg:    "devopsarr",
		MetadataInfo: tfbridge.NewProviderMetadata(bridgeMetadata),
		Config:       map[string]*tfbridge.SchemaInfo{
			// Add any required configuration here, or remove the example below if
			// no additional points are required.
			// "region": {
			// 	Type: tfbridge.MakeType("region", "Region"),
			// 	Default: &tfbridge.DefaultInfo{
			// 		EnvVars: []string{"AWS_REGION", "AWS_DEFAULT_REGION"},
			// 	},
			// },
		},
		Resources: map[string]*tfbridge.ResourceInfo{
			"readarr_author": {Tok: makeResource(modAuthors, "readarr_author")},

			"readarr_download_client":                          {Tok: makeResource(modDownloadClients, "readarr_download_client")},
			"readarr_download_client_aria2":                    {Tok: makeResource(modDownloadClients, "readarr_download_client_aria2")},
			"readarr_download_client_config":                   {Tok: makeResource(modDownloadClients, "readarr_download_client_config")},
			"readarr_download_client_deluge":                   {Tok: makeResource(modDownloadClients, "readarr_download_client_deluge")},
			"readarr_download_client_flood":                    {Tok: makeResource(modDownloadClients, "readarr_download_client_flood")},
			"readarr_download_client_hadouken":                 {Tok: makeResource(modDownloadClients, "readarr_download_client_hadouken")},
			"readarr_download_client_nzbget":                   {Tok: makeResource(modDownloadClients, "readarr_download_client_nzbget")},
			"readarr_download_client_nzbvortex":                {Tok: makeResource(modDownloadClients, "readarr_download_client_nzbvortex")},
			"readarr_download_client_pneumatic":                {Tok: makeResource(modDownloadClients, "readarr_download_client_pneumatic")},
			"readarr_download_client_qbittorrent":              {Tok: makeResource(modDownloadClients, "readarr_download_client_qbittorrent")},
			"readarr_download_client_rtorrent":                 {Tok: makeResource(modDownloadClients, "readarr_download_client_rtorrent")},
			"readarr_download_client_sabnzbd":                  {Tok: makeResource(modDownloadClients, "readarr_download_client_sabnzbd")},
			"readarr_download_client_torrent_blackhole":        {Tok: makeResource(modDownloadClients, "readarr_download_client_torrent_blackhole")},
			"readarr_download_client_torrent_download_station": {Tok: makeResource(modDownloadClients, "readarr_download_client_torrent_download_station")},
			"readarr_download_client_transmission":             {Tok: makeResource(modDownloadClients, "readarr_download_client_transmission")},
			"readarr_download_client_usenet_blackhole":         {Tok: makeResource(modDownloadClients, "readarr_download_client_usenet_blackhole")},
			"readarr_download_client_usenet_download_station":  {Tok: makeResource(modDownloadClients, "readarr_download_client_usenet_download_station")},
			"readarr_download_client_utorrent":                 {Tok: makeResource(modDownloadClients, "readarr_download_client_utorrent")},
			"readarr_download_client_vuze":                     {Tok: makeResource(modDownloadClients, "readarr_download_client_vuze")},
			"readarr_remote_path_mapping":                      {Tok: makeResource(modDownloadClients, "readarr_remote_path_mapping")},

			"readarr_import_list":                       {Tok: makeResource(modImportLists, "readarr_import_list")},
			"readarr_import_list_exclusion":             {Tok: makeResource(modImportLists, "readarr_import_list_exclusion")},
			"readarr_import_list_goodreads_bookshelf":   {Tok: makeResource(modImportLists, "readarr_import_list_goodreads_bookshelf")},
			"readarr_import_list_goodreads_list":        {Tok: makeResource(modImportLists, "readarr_import_list_goodreads_list")},
			"readarr_import_list_goodreads_owned_books": {Tok: makeResource(modImportLists, "readarr_import_list_goodreads_owned_books")},
			"readarr_import_list_goodreads_series":      {Tok: makeResource(modImportLists, "readarr_import_list_goodreads_series")},
			"readarr_import_list_lazy_librarian":        {Tok: makeResource(modImportLists, "readarr_import_list_lazy_librarian")},
			"readarr_import_list_readarr":               {Tok: makeResource(modImportLists, "readarr_import_list_readarr")},

			"readarr_indexer":              {Tok: makeResource(modIndexers, "readarr_indexer")},
			"readarr_indexer_config":       {Tok: makeResource(modIndexers, "readarr_indexer_config")},
			"readarr_indexer_filelist":     {Tok: makeResource(modIndexers, "readarr_indexer_filelist")},
			"readarr_indexer_gazelle":      {Tok: makeResource(modIndexers, "readarr_indexer_gazelle")},
			"readarr_indexer_iptorrents":   {Tok: makeResource(modIndexers, "readarr_indexer_iptorrents")},
			"readarr_indexer_newznab":      {Tok: makeResource(modIndexers, "readarr_indexer_newznab")},
			"readarr_indexer_nyaa":         {Tok: makeResource(modIndexers, "readarr_indexer_nyaa")},
			"readarr_indexer_torrent_rss":  {Tok: makeResource(modIndexers, "readarr_indexer_torrent_rss")},
			"readarr_indexer_torrentleech": {Tok: makeResource(modIndexers, "readarr_indexer_torrentleech")},
			"readarr_indexer_torznab":      {Tok: makeResource(modIndexers, "readarr_indexer_torznab")},

			"readarr_media_management": {Tok: makeResource(modMediaManagement, "readarr_media_management")},
			"readarr_naming":           {Tok: makeResource(modMediaManagement, "readarr_naming")},
			"readarr_root_folder":      {Tok: makeResource(modMediaManagement, "readarr_root_folder")},

			"readarr_metadata_config": {Tok: makeResource(modMetadata, "readarr_metadata_config")},

			"readarr_notification":                       {Tok: makeResource(modNotifications, "readarr_notification")},
			"readarr_notification_boxcar":                {Tok: makeResource(modNotifications, "readarr_notification_boxcar")},
			"readarr_notification_custom_script":         {Tok: makeResource(modNotifications, "readarr_notification_custom_script")},
			"readarr_notification_discord":               {Tok: makeResource(modNotifications, "readarr_notification_discord")},
			"readarr_notification_email":                 {Tok: makeResource(modNotifications, "readarr_notification_email")},
			"readarr_notification_goodreads_bookshelves": {Tok: makeResource(modNotifications, "readarr_notification_goodreads_bookshelves")},
			"readarr_notification_goodreads_owned_books": {Tok: makeResource(modNotifications, "readarr_notification_goodreads_owned_books")},
			"readarr_notification_gotify":                {Tok: makeResource(modNotifications, "readarr_notification_gotify")},
			"readarr_notification_join":                  {Tok: makeResource(modNotifications, "readarr_notification_join")},
			"readarr_notification_kavita":                {Tok: makeResource(modNotifications, "readarr_notification_kavita")},
			"readarr_notification_mailgun":               {Tok: makeResource(modNotifications, "readarr_notification_mailgun")},
			"readarr_notification_notifiarr":             {Tok: makeResource(modNotifications, "readarr_notification_notifiarr")},
			"readarr_notification_ntfy":                  {Tok: makeResource(modNotifications, "readarr_notification_ntfy")},
			"readarr_notification_prowl":                 {Tok: makeResource(modNotifications, "readarr_notification_prowl")},
			"readarr_notification_pushbullet":            {Tok: makeResource(modNotifications, "readarr_notification_pushbullet")},
			"readarr_notification_pushover":              {Tok: makeResource(modNotifications, "readarr_notification_pushover")},
			"readarr_notification_sendgrid":              {Tok: makeResource(modNotifications, "readarr_notification_sendgrid")},
			"readarr_notification_slack":                 {Tok: makeResource(modNotifications, "readarr_notification_slack")},
			"readarr_notification_subsonic":              {Tok: makeResource(modNotifications, "readarr_notification_subsonic")},
			"readarr_notification_synology_indexer":      {Tok: makeResource(modNotifications, "readarr_notification_synology_indexer")},
			"readarr_notification_telegram":              {Tok: makeResource(modNotifications, "readarr_notification_telegram")},
			"readarr_notification_twitter":               {Tok: makeResource(modNotifications, "readarr_notification_twitter")},
			"readarr_notification_webhook":               {Tok: makeResource(modNotifications, "readarr_notification_webhook")},

			"readarr_custom_format":      {Tok: makeResource(modProfiles, "readarr_custom_format")},
			"readarr_delay_profile":      {Tok: makeResource(modProfiles, "readarr_delay_profile")},
			"readarr_metadata_profile":   {Tok: makeResource(modProfiles, "readarr_metadata_profile")},
			"readarr_quality_definition": {Tok: makeResource(modProfiles, "readarr_quality_definition")},
			"readarr_quality_profile":    {Tok: makeResource(modProfiles, "readarr_quality_profile")},
			"readarr_release_profile":    {Tok: makeResource(modProfiles, "readarr_release_profile")},

			"readarr_tag": {Tok: makeResource(modTags, "readarr_tag")},
		},
		DataSources: map[string]*tfbridge.DataSourceInfo{
			"readarr_author":  {Tok: makeDataSource(modAuthors, "readarr_author")},
			"readarr_authors": {Tok: makeDataSource(modAuthors, "readarr_authors")},

			"readarr_download_client":        {Tok: makeDataSource(modDownloadClients, "readarr_download_client")},
			"readarr_download_client_config": {Tok: makeDataSource(modDownloadClients, "readarr_download_client_config")},
			"readarr_download_clients":       {Tok: makeDataSource(modDownloadClients, "readarr_download_clients")},
			"readarr_remote_path_mapping":    {Tok: makeDataSource(modDownloadClients, "readarr_remote_path_mapping")},
			"readarr_remote_path_mappings":   {Tok: makeDataSource(modDownloadClients, "readarr_remote_path_mappings")},

			"readarr_import_list":            {Tok: makeDataSource(modImportLists, "readarr_import_list")},
			"readarr_import_list_exclusion":  {Tok: makeDataSource(modImportLists, "readarr_import_list_exclusion")},
			"readarr_import_list_exclusions": {Tok: makeDataSource(modImportLists, "readarr_import_list_exclusions")},
			"readarr_import_lists":           {Tok: makeDataSource(modImportLists, "readarr_import_lists")},
			"readarr_indexer":                {Tok: makeDataSource(modIndexers, "readarr_indexer")},
			"readarr_indexer_config":         {Tok: makeDataSource(modIndexers, "readarr_indexer_config")},
			"readarr_indexers":               {Tok: makeDataSource(modIndexers, "readarr_indexers")},

			"readarr_media_management": {Tok: makeDataSource(modMediaManagement, "readarr_media_management")},
			"readarr_naming":           {Tok: makeDataSource(modMediaManagement, "readarr_naming")},
			"readarr_root_folder":      {Tok: makeDataSource(modMediaManagement, "readarr_root_folder")},
			"readarr_root_folders":     {Tok: makeDataSource(modMediaManagement, "readarr_root_folders")},

			"readarr_metadata_config": {Tok: makeDataSource(modMetadata, "readarr_metadata_config")},

			"readarr_notification":  {Tok: makeDataSource(modNotifications, "readarr_notification")},
			"readarr_notifications": {Tok: makeDataSource(modNotifications, "readarr_notifications")},

			"readarr_custom_format":                         {Tok: makeDataSource(modProfiles, "readarr_custom_format")},
			"readarr_custom_format_condition":               {Tok: makeDataSource(modProfiles, "readarr_custom_format_condition")},
			"readarr_custom_format_condition_release_group": {Tok: makeDataSource(modProfiles, "readarr_custom_format_condition_release_group")},
			"readarr_custom_format_condition_release_title": {Tok: makeDataSource(modProfiles, "readarr_custom_format_condition_release_title")},
			"readarr_custom_format_condition_size":          {Tok: makeDataSource(modProfiles, "readarr_custom_format_condition_size")},
			"readarr_custom_formats":                        {Tok: makeDataSource(modProfiles, "readarr_custom_formats")},
			"readarr_delay_profile":                         {Tok: makeDataSource(modProfiles, "readarr_delay_profile")},
			"readarr_delay_profiles":                        {Tok: makeDataSource(modProfiles, "readarr_delay_profiles")},
			"readarr_metadata_profile":                      {Tok: makeDataSource(modProfiles, "readarr_metadata_profile")},
			"readarr_metadata_profiles":                     {Tok: makeDataSource(modProfiles, "readarr_metadata_profiles")},
			"readarr_quality":                               {Tok: makeDataSource(modProfiles, "readarr_quality")},
			"readarr_quality_definition":                    {Tok: makeDataSource(modProfiles, "readarr_quality_definition")},
			"readarr_quality_definitions":                   {Tok: makeDataSource(modProfiles, "readarr_quality_definitions")},
			"readarr_quality_profile":                       {Tok: makeDataSource(modProfiles, "readarr_quality_profile")},
			"readarr_quality_profiles":                      {Tok: makeDataSource(modProfiles, "readarr_quality_profiles")},
			"readarr_release_profile":                       {Tok: makeDataSource(modProfiles, "readarr_release_profile")},
			"readarr_release_profiles":                      {Tok: makeDataSource(modProfiles, "readarr_release_profiles")},

			"readarr_system_status": {Tok: makeDataSource(modStatus, "readarr_system_status")},

			"readarr_tag":  {Tok: makeDataSource(modTags, "readarr_tag")},
			"readarr_tags": {Tok: makeDataSource(modTags, "readarr_tags")},
		},
		JavaScript: &tfbridge.JavaScriptInfo{
			PackageName: "@maienm/pulumi-readarr",

			// List any npm dependencies and their versions
			Dependencies: map[string]string{
				"@pulumi/pulumi": "^3.0.0",
			},
			DevDependencies: map[string]string{
				"@types/node": "^10.0.0", // so we can access strongly typed node definitions.
				"@types/mime": "^2.0.0",
			},
			// See the documentation for tfbridge.OverlayInfo for how to lay out this
			// section, or refer to the AWS provider. Delete this section if there are
			// no overlay files.
			//Overlay: &tfbridge.OverlayInfo{},
		},
		Python: &tfbridge.PythonInfo{
			PackageName: "pulumi_readarr",

			// List any Python dependencies and their version ranges
			Requires: map[string]string{
				"pulumi": ">=3.0.0,<4.0.0",
			},
		},
		Golang: &tfbridge.GolangInfo{
			ImportBasePath: filepath.Join(
				fmt.Sprintf("github.com/MaienM/pulumi-%[1]s/sdk/", "readarr"),
				tfbridge.GetModuleMajorVersion(version.Version),
				"go",
				"readarr",
			),
			GenerateResourceContainerTypes: true,
		},
		CSharp: &tfbridge.CSharpInfo{
			RootNamespace: "MaienM",

			PackageReferences: map[string]string{
				"Pulumi": "3.*",
			},
		},
		Java: &tfbridge.JavaInfo{
			BasePackage: "com.maienm",
		},
	}
}
