// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Notifications -->Notification GoodreadsOwnedBooks resource.
 * For more information refer to [Notification](https://wiki.servarr.com/readarr/settings#connect) and [GoodreadsOwnedBooks](https://wiki.servarr.com/readarr/supported#goodreadsownedbooks).
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import readarr:Notifications/notificationGoodreadsOwnedBooks:NotificationGoodreadsOwnedBooks example 1
 * ```
 */
export class NotificationGoodreadsOwnedBooks extends pulumi.CustomResource {
    /**
     * Get an existing NotificationGoodreadsOwnedBooks resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NotificationGoodreadsOwnedBooksState, opts?: pulumi.CustomResourceOptions): NotificationGoodreadsOwnedBooks {
        return new NotificationGoodreadsOwnedBooks(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'readarr:Notifications/notificationGoodreadsOwnedBooks:NotificationGoodreadsOwnedBooks';

    /**
     * Returns true if the given object is an instance of NotificationGoodreadsOwnedBooks.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NotificationGoodreadsOwnedBooks {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NotificationGoodreadsOwnedBooks.__pulumiType;
    }

    /**
     * Access token.
     */
    public readonly accessToken!: pulumi.Output<string>;
    /**
     * Access token secret.
     */
    public readonly accessTokenSecret!: pulumi.Output<string>;
    /**
     * Condition. `10` BrandNew, `20` LikeNew, `30` VeryGood, `40` Good, `50` Acceptable, `60` Poor.
     */
    public readonly condition!: pulumi.Output<number>;
    /**
     * Condition description.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Purchase location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Notification name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * On release import flag.
     */
    public readonly onReleaseImport!: pulumi.Output<boolean>;
    /**
     * On upgrade flag.
     */
    public readonly onUpgrade!: pulumi.Output<boolean>;
    /**
     * Request token secret.
     */
    public readonly requestTokenSecret!: pulumi.Output<string>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;
    /**
     * User ID.
     */
    public readonly userId!: pulumi.Output<string>;
    /**
     * Username.
     */
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a NotificationGoodreadsOwnedBooks resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotificationGoodreadsOwnedBooksArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NotificationGoodreadsOwnedBooksArgs | NotificationGoodreadsOwnedBooksState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NotificationGoodreadsOwnedBooksState | undefined;
            resourceInputs["accessToken"] = state ? state.accessToken : undefined;
            resourceInputs["accessTokenSecret"] = state ? state.accessTokenSecret : undefined;
            resourceInputs["condition"] = state ? state.condition : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["onReleaseImport"] = state ? state.onReleaseImport : undefined;
            resourceInputs["onUpgrade"] = state ? state.onUpgrade : undefined;
            resourceInputs["requestTokenSecret"] = state ? state.requestTokenSecret : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["userId"] = state ? state.userId : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as NotificationGoodreadsOwnedBooksArgs | undefined;
            if ((!args || args.accessToken === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessToken'");
            }
            if ((!args || args.accessTokenSecret === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessTokenSecret'");
            }
            if ((!args || args.condition === undefined) && !opts.urn) {
                throw new Error("Missing required property 'condition'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            resourceInputs["accessToken"] = args?.accessToken ? pulumi.secret(args.accessToken) : undefined;
            resourceInputs["accessTokenSecret"] = args?.accessTokenSecret ? pulumi.secret(args.accessTokenSecret) : undefined;
            resourceInputs["condition"] = args ? args.condition : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["onReleaseImport"] = args ? args.onReleaseImport : undefined;
            resourceInputs["onUpgrade"] = args ? args.onUpgrade : undefined;
            resourceInputs["requestTokenSecret"] = args?.requestTokenSecret ? pulumi.secret(args.requestTokenSecret) : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["userId"] = args ? args.userId : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["accessToken", "accessTokenSecret", "requestTokenSecret"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(NotificationGoodreadsOwnedBooks.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NotificationGoodreadsOwnedBooks resources.
 */
export interface NotificationGoodreadsOwnedBooksState {
    /**
     * Access token.
     */
    accessToken?: pulumi.Input<string>;
    /**
     * Access token secret.
     */
    accessTokenSecret?: pulumi.Input<string>;
    /**
     * Condition. `10` BrandNew, `20` LikeNew, `30` VeryGood, `40` Good, `50` Acceptable, `60` Poor.
     */
    condition?: pulumi.Input<number>;
    /**
     * Condition description.
     */
    description?: pulumi.Input<string>;
    /**
     * Purchase location.
     */
    location?: pulumi.Input<string>;
    /**
     * Notification name.
     */
    name?: pulumi.Input<string>;
    /**
     * On release import flag.
     */
    onReleaseImport?: pulumi.Input<boolean>;
    /**
     * On upgrade flag.
     */
    onUpgrade?: pulumi.Input<boolean>;
    /**
     * Request token secret.
     */
    requestTokenSecret?: pulumi.Input<string>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * User ID.
     */
    userId?: pulumi.Input<string>;
    /**
     * Username.
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NotificationGoodreadsOwnedBooks resource.
 */
export interface NotificationGoodreadsOwnedBooksArgs {
    /**
     * Access token.
     */
    accessToken: pulumi.Input<string>;
    /**
     * Access token secret.
     */
    accessTokenSecret: pulumi.Input<string>;
    /**
     * Condition. `10` BrandNew, `20` LikeNew, `30` VeryGood, `40` Good, `50` Acceptable, `60` Poor.
     */
    condition: pulumi.Input<number>;
    /**
     * Condition description.
     */
    description?: pulumi.Input<string>;
    /**
     * Purchase location.
     */
    location?: pulumi.Input<string>;
    /**
     * Notification name.
     */
    name: pulumi.Input<string>;
    /**
     * On release import flag.
     */
    onReleaseImport?: pulumi.Input<boolean>;
    /**
     * On upgrade flag.
     */
    onUpgrade?: pulumi.Input<boolean>;
    /**
     * Request token secret.
     */
    requestTokenSecret?: pulumi.Input<string>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * User ID.
     */
    userId?: pulumi.Input<string>;
    /**
     * Username.
     */
    username: pulumi.Input<string>;
}