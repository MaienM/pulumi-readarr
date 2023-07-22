// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Notifications -->Notification Mailgun resource.
 * For more information refer to [Notification](https://wiki.servarr.com/readarr/settings#connect) and [Mailgun](https://wiki.servarr.com/readarr/supported#mailgun).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as readarr from "@maienm/pulumi-readarr";
 *
 * const example = new readarr.notifications.NotificationMailgun("example", {
 *     apiKey: "APIkey",
 *     from: "from_mailgun@example.com",
 *     includeHealthWarnings: false,
 *     name: "Example",
 *     onAuthorDelete: false,
 *     onBookDelete: false,
 *     onBookFileDelete: true,
 *     onBookFileDeleteForUpgrade: true,
 *     onGrab: false,
 *     onHealthIssue: false,
 *     onReleaseImport: false,
 *     onUpgrade: false,
 *     recipients: [
 *         "user1@example.com",
 *         "user2@example.com",
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import readarr:Notifications/notificationMailgun:NotificationMailgun example 1
 * ```
 */
export class NotificationMailgun extends pulumi.CustomResource {
    /**
     * Get an existing NotificationMailgun resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NotificationMailgunState, opts?: pulumi.CustomResourceOptions): NotificationMailgun {
        return new NotificationMailgun(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'readarr:Notifications/notificationMailgun:NotificationMailgun';

    /**
     * Returns true if the given object is an instance of NotificationMailgun.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NotificationMailgun {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NotificationMailgun.__pulumiType;
    }

    /**
     * API Key.
     */
    public readonly apiKey!: pulumi.Output<string>;
    /**
     * From.
     */
    public readonly from!: pulumi.Output<string>;
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
     * On grab flag.
     */
    public readonly onGrab!: pulumi.Output<boolean>;
    /**
     * On health issue flag.
     */
    public readonly onHealthIssue!: pulumi.Output<boolean>;
    /**
     * On release import flag.
     */
    public readonly onReleaseImport!: pulumi.Output<boolean>;
    /**
     * On upgrade flag.
     */
    public readonly onUpgrade!: pulumi.Output<boolean>;
    /**
     * Recipients.
     */
    public readonly recipients!: pulumi.Output<string[]>;
    /**
     * Sender domain.
     */
    public readonly senderDomain!: pulumi.Output<string>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;
    /**
     * Use EU endpoint flag.
     */
    public readonly useEuEndpoint!: pulumi.Output<boolean>;

    /**
     * Create a NotificationMailgun resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotificationMailgunArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NotificationMailgunArgs | NotificationMailgunState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NotificationMailgunState | undefined;
            resourceInputs["apiKey"] = state ? state.apiKey : undefined;
            resourceInputs["from"] = state ? state.from : undefined;
            resourceInputs["includeHealthWarnings"] = state ? state.includeHealthWarnings : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["onApplicationUpdate"] = state ? state.onApplicationUpdate : undefined;
            resourceInputs["onAuthorDelete"] = state ? state.onAuthorDelete : undefined;
            resourceInputs["onBookDelete"] = state ? state.onBookDelete : undefined;
            resourceInputs["onBookFileDelete"] = state ? state.onBookFileDelete : undefined;
            resourceInputs["onBookFileDeleteForUpgrade"] = state ? state.onBookFileDeleteForUpgrade : undefined;
            resourceInputs["onGrab"] = state ? state.onGrab : undefined;
            resourceInputs["onHealthIssue"] = state ? state.onHealthIssue : undefined;
            resourceInputs["onReleaseImport"] = state ? state.onReleaseImport : undefined;
            resourceInputs["onUpgrade"] = state ? state.onUpgrade : undefined;
            resourceInputs["recipients"] = state ? state.recipients : undefined;
            resourceInputs["senderDomain"] = state ? state.senderDomain : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["useEuEndpoint"] = state ? state.useEuEndpoint : undefined;
        } else {
            const args = argsOrState as NotificationMailgunArgs | undefined;
            if ((!args || args.apiKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiKey'");
            }
            if ((!args || args.from === undefined) && !opts.urn) {
                throw new Error("Missing required property 'from'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.recipients === undefined) && !opts.urn) {
                throw new Error("Missing required property 'recipients'");
            }
            resourceInputs["apiKey"] = args?.apiKey ? pulumi.secret(args.apiKey) : undefined;
            resourceInputs["from"] = args ? args.from : undefined;
            resourceInputs["includeHealthWarnings"] = args ? args.includeHealthWarnings : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["onApplicationUpdate"] = args ? args.onApplicationUpdate : undefined;
            resourceInputs["onAuthorDelete"] = args ? args.onAuthorDelete : undefined;
            resourceInputs["onBookDelete"] = args ? args.onBookDelete : undefined;
            resourceInputs["onBookFileDelete"] = args ? args.onBookFileDelete : undefined;
            resourceInputs["onBookFileDeleteForUpgrade"] = args ? args.onBookFileDeleteForUpgrade : undefined;
            resourceInputs["onGrab"] = args ? args.onGrab : undefined;
            resourceInputs["onHealthIssue"] = args ? args.onHealthIssue : undefined;
            resourceInputs["onReleaseImport"] = args ? args.onReleaseImport : undefined;
            resourceInputs["onUpgrade"] = args ? args.onUpgrade : undefined;
            resourceInputs["recipients"] = args ? args.recipients : undefined;
            resourceInputs["senderDomain"] = args ? args.senderDomain : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["useEuEndpoint"] = args ? args.useEuEndpoint : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["apiKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(NotificationMailgun.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NotificationMailgun resources.
 */
export interface NotificationMailgunState {
    /**
     * API Key.
     */
    apiKey?: pulumi.Input<string>;
    /**
     * From.
     */
    from?: pulumi.Input<string>;
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
     * On grab flag.
     */
    onGrab?: pulumi.Input<boolean>;
    /**
     * On health issue flag.
     */
    onHealthIssue?: pulumi.Input<boolean>;
    /**
     * On release import flag.
     */
    onReleaseImport?: pulumi.Input<boolean>;
    /**
     * On upgrade flag.
     */
    onUpgrade?: pulumi.Input<boolean>;
    /**
     * Recipients.
     */
    recipients?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Sender domain.
     */
    senderDomain?: pulumi.Input<string>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Use EU endpoint flag.
     */
    useEuEndpoint?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a NotificationMailgun resource.
 */
export interface NotificationMailgunArgs {
    /**
     * API Key.
     */
    apiKey: pulumi.Input<string>;
    /**
     * From.
     */
    from: pulumi.Input<string>;
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
     * On grab flag.
     */
    onGrab?: pulumi.Input<boolean>;
    /**
     * On health issue flag.
     */
    onHealthIssue?: pulumi.Input<boolean>;
    /**
     * On release import flag.
     */
    onReleaseImport?: pulumi.Input<boolean>;
    /**
     * On upgrade flag.
     */
    onUpgrade?: pulumi.Input<boolean>;
    /**
     * Recipients.
     */
    recipients: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Sender domain.
     */
    senderDomain?: pulumi.Input<string>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Use EU endpoint flag.
     */
    useEuEndpoint?: pulumi.Input<boolean>;
}
