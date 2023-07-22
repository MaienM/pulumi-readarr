// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Notifications -->Notification Slack resource.
 * For more information refer to [Notification](https://wiki.servarr.com/readarr/settings#connect) and [Slack](https://wiki.servarr.com/readarr/supported#slack).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as readarr from "@maienm/pulumi-readarr";
 *
 * const example = new readarr.notifications.NotificationSlack("example", {
 *     channel: "example-channel",
 *     includeHealthWarnings: false,
 *     name: "Example",
 *     onAuthorDelete: false,
 *     onBookDelete: false,
 *     onBookFileDelete: false,
 *     onBookFileDeleteForUpgrade: false,
 *     onBookRetag: true,
 *     onDownloadFailure: false,
 *     onGrab: false,
 *     onHealthIssue: false,
 *     onImportFailure: false,
 *     onReleaseImport: false,
 *     onRename: true,
 *     onUpgrade: false,
 *     username: "user",
 *     webHookUrl: "http://my.slack.com/test",
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import readarr:Notifications/notificationSlack:NotificationSlack example 1
 * ```
 */
export class NotificationSlack extends pulumi.CustomResource {
    /**
     * Get an existing NotificationSlack resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NotificationSlackState, opts?: pulumi.CustomResourceOptions): NotificationSlack {
        return new NotificationSlack(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'readarr:Notifications/notificationSlack:NotificationSlack';

    /**
     * Returns true if the given object is an instance of NotificationSlack.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NotificationSlack {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NotificationSlack.__pulumiType;
    }

    /**
     * Channel.
     */
    public readonly channel!: pulumi.Output<string>;
    /**
     * Icon.
     */
    public readonly icon!: pulumi.Output<string>;
    /**
     * Include health warnings.
     */
    public readonly includeHealthWarnings!: pulumi.Output<boolean>;
    /**
     * Notification name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * On application update flag.
     */
    public readonly onApplicationUpdate!: pulumi.Output<boolean>;
    /**
     * On author deleted flag.
     */
    public readonly onAuthorDelete!: pulumi.Output<boolean>;
    /**
     * On book delete flag.
     */
    public readonly onBookDelete!: pulumi.Output<boolean>;
    /**
     * On book file delete flag.
     */
    public readonly onBookFileDelete!: pulumi.Output<boolean>;
    /**
     * On book file delete for upgrade flag.
     */
    public readonly onBookFileDeleteForUpgrade!: pulumi.Output<boolean>;
    /**
     * On book retag flag.
     */
    public readonly onBookRetag!: pulumi.Output<boolean>;
    /**
     * On download failure flag.
     */
    public readonly onDownloadFailure!: pulumi.Output<boolean>;
    /**
     * On grab flag.
     */
    public readonly onGrab!: pulumi.Output<boolean>;
    /**
     * On health issue flag.
     */
    public readonly onHealthIssue!: pulumi.Output<boolean>;
    /**
     * On import failure flag.
     */
    public readonly onImportFailure!: pulumi.Output<boolean>;
    /**
     * On release import flag.
     */
    public readonly onReleaseImport!: pulumi.Output<boolean>;
    /**
     * On rename flag.
     */
    public readonly onRename!: pulumi.Output<boolean>;
    /**
     * On upgrade flag.
     */
    public readonly onUpgrade!: pulumi.Output<boolean>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;
    /**
     * Username.
     */
    public readonly username!: pulumi.Output<string>;
    /**
     * URL.
     */
    public readonly webHookUrl!: pulumi.Output<string>;

    /**
     * Create a NotificationSlack resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotificationSlackArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NotificationSlackArgs | NotificationSlackState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NotificationSlackState | undefined;
            resourceInputs["channel"] = state ? state.channel : undefined;
            resourceInputs["icon"] = state ? state.icon : undefined;
            resourceInputs["includeHealthWarnings"] = state ? state.includeHealthWarnings : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["onApplicationUpdate"] = state ? state.onApplicationUpdate : undefined;
            resourceInputs["onAuthorDelete"] = state ? state.onAuthorDelete : undefined;
            resourceInputs["onBookDelete"] = state ? state.onBookDelete : undefined;
            resourceInputs["onBookFileDelete"] = state ? state.onBookFileDelete : undefined;
            resourceInputs["onBookFileDeleteForUpgrade"] = state ? state.onBookFileDeleteForUpgrade : undefined;
            resourceInputs["onBookRetag"] = state ? state.onBookRetag : undefined;
            resourceInputs["onDownloadFailure"] = state ? state.onDownloadFailure : undefined;
            resourceInputs["onGrab"] = state ? state.onGrab : undefined;
            resourceInputs["onHealthIssue"] = state ? state.onHealthIssue : undefined;
            resourceInputs["onImportFailure"] = state ? state.onImportFailure : undefined;
            resourceInputs["onReleaseImport"] = state ? state.onReleaseImport : undefined;
            resourceInputs["onRename"] = state ? state.onRename : undefined;
            resourceInputs["onUpgrade"] = state ? state.onUpgrade : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
            resourceInputs["webHookUrl"] = state ? state.webHookUrl : undefined;
        } else {
            const args = argsOrState as NotificationSlackArgs | undefined;
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            if ((!args || args.webHookUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'webHookUrl'");
            }
            resourceInputs["channel"] = args ? args.channel : undefined;
            resourceInputs["icon"] = args ? args.icon : undefined;
            resourceInputs["includeHealthWarnings"] = args ? args.includeHealthWarnings : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["onApplicationUpdate"] = args ? args.onApplicationUpdate : undefined;
            resourceInputs["onAuthorDelete"] = args ? args.onAuthorDelete : undefined;
            resourceInputs["onBookDelete"] = args ? args.onBookDelete : undefined;
            resourceInputs["onBookFileDelete"] = args ? args.onBookFileDelete : undefined;
            resourceInputs["onBookFileDeleteForUpgrade"] = args ? args.onBookFileDeleteForUpgrade : undefined;
            resourceInputs["onBookRetag"] = args ? args.onBookRetag : undefined;
            resourceInputs["onDownloadFailure"] = args ? args.onDownloadFailure : undefined;
            resourceInputs["onGrab"] = args ? args.onGrab : undefined;
            resourceInputs["onHealthIssue"] = args ? args.onHealthIssue : undefined;
            resourceInputs["onImportFailure"] = args ? args.onImportFailure : undefined;
            resourceInputs["onReleaseImport"] = args ? args.onReleaseImport : undefined;
            resourceInputs["onRename"] = args ? args.onRename : undefined;
            resourceInputs["onUpgrade"] = args ? args.onUpgrade : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["webHookUrl"] = args ? args.webHookUrl : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NotificationSlack.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NotificationSlack resources.
 */
export interface NotificationSlackState {
    /**
     * Channel.
     */
    channel?: pulumi.Input<string>;
    /**
     * Icon.
     */
    icon?: pulumi.Input<string>;
    /**
     * Include health warnings.
     */
    includeHealthWarnings?: pulumi.Input<boolean>;
    /**
     * Notification name.
     */
    name?: pulumi.Input<string>;
    /**
     * On application update flag.
     */
    onApplicationUpdate?: pulumi.Input<boolean>;
    /**
     * On author deleted flag.
     */
    onAuthorDelete?: pulumi.Input<boolean>;
    /**
     * On book delete flag.
     */
    onBookDelete?: pulumi.Input<boolean>;
    /**
     * On book file delete flag.
     */
    onBookFileDelete?: pulumi.Input<boolean>;
    /**
     * On book file delete for upgrade flag.
     */
    onBookFileDeleteForUpgrade?: pulumi.Input<boolean>;
    /**
     * On book retag flag.
     */
    onBookRetag?: pulumi.Input<boolean>;
    /**
     * On download failure flag.
     */
    onDownloadFailure?: pulumi.Input<boolean>;
    /**
     * On grab flag.
     */
    onGrab?: pulumi.Input<boolean>;
    /**
     * On health issue flag.
     */
    onHealthIssue?: pulumi.Input<boolean>;
    /**
     * On import failure flag.
     */
    onImportFailure?: pulumi.Input<boolean>;
    /**
     * On release import flag.
     */
    onReleaseImport?: pulumi.Input<boolean>;
    /**
     * On rename flag.
     */
    onRename?: pulumi.Input<boolean>;
    /**
     * On upgrade flag.
     */
    onUpgrade?: pulumi.Input<boolean>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Username.
     */
    username?: pulumi.Input<string>;
    /**
     * URL.
     */
    webHookUrl?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NotificationSlack resource.
 */
export interface NotificationSlackArgs {
    /**
     * Channel.
     */
    channel?: pulumi.Input<string>;
    /**
     * Icon.
     */
    icon?: pulumi.Input<string>;
    /**
     * Include health warnings.
     */
    includeHealthWarnings?: pulumi.Input<boolean>;
    /**
     * Notification name.
     */
    name: pulumi.Input<string>;
    /**
     * On application update flag.
     */
    onApplicationUpdate?: pulumi.Input<boolean>;
    /**
     * On author deleted flag.
     */
    onAuthorDelete?: pulumi.Input<boolean>;
    /**
     * On book delete flag.
     */
    onBookDelete?: pulumi.Input<boolean>;
    /**
     * On book file delete flag.
     */
    onBookFileDelete?: pulumi.Input<boolean>;
    /**
     * On book file delete for upgrade flag.
     */
    onBookFileDeleteForUpgrade?: pulumi.Input<boolean>;
    /**
     * On book retag flag.
     */
    onBookRetag?: pulumi.Input<boolean>;
    /**
     * On download failure flag.
     */
    onDownloadFailure?: pulumi.Input<boolean>;
    /**
     * On grab flag.
     */
    onGrab?: pulumi.Input<boolean>;
    /**
     * On health issue flag.
     */
    onHealthIssue?: pulumi.Input<boolean>;
    /**
     * On import failure flag.
     */
    onImportFailure?: pulumi.Input<boolean>;
    /**
     * On release import flag.
     */
    onReleaseImport?: pulumi.Input<boolean>;
    /**
     * On rename flag.
     */
    onRename?: pulumi.Input<boolean>;
    /**
     * On upgrade flag.
     */
    onUpgrade?: pulumi.Input<boolean>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Username.
     */
    username: pulumi.Input<string>;
    /**
     * URL.
     */
    webHookUrl: pulumi.Input<string>;
}
