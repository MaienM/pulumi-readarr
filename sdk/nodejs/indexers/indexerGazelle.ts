// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Indexers -->Indexer Gazelle resource.
 * For more information refer to [Indexer](https://wiki.servarr.com/readarr/settings#indexers) and [Gazelle](https://wiki.servarr.com/readarr/supported#gazelle).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as readarr from "@maienm/pulumi-readarr";
 *
 * const example = new readarr.indexers.IndexerGazelle("example", {
 *     baseUrl: "https://orpheus.network",
 *     enableAutomaticSearch: true,
 *     minimumSeeders: 1,
 *     name: "Example",
 *     password: "Pass",
 *     username: "User",
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import readarr:Indexers/indexerGazelle:IndexerGazelle example 1
 * ```
 */
export class IndexerGazelle extends pulumi.CustomResource {
    /**
     * Get an existing IndexerGazelle resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IndexerGazelleState, opts?: pulumi.CustomResourceOptions): IndexerGazelle {
        return new IndexerGazelle(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'readarr:Indexers/indexerGazelle:IndexerGazelle';

    /**
     * Returns true if the given object is an instance of IndexerGazelle.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IndexerGazelle {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IndexerGazelle.__pulumiType;
    }

    /**
     * Author seed time.
     */
    public readonly authorSeedTime!: pulumi.Output<number>;
    /**
     * Base URL.
     */
    public readonly baseUrl!: pulumi.Output<string>;
    /**
     * Early release limit.
     */
    public readonly earlyReleaseLimit!: pulumi.Output<number>;
    /**
     * Enable automatic search flag.
     */
    public readonly enableAutomaticSearch!: pulumi.Output<boolean>;
    /**
     * Enable interactive search flag.
     */
    public readonly enableInteractiveSearch!: pulumi.Output<boolean>;
    /**
     * Enable RSS flag.
     */
    public readonly enableRss!: pulumi.Output<boolean>;
    /**
     * Minimum seeders.
     */
    public readonly minimumSeeders!: pulumi.Output<number>;
    /**
     * IndexerGazelle name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Password.
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * Priority.
     */
    public readonly priority!: pulumi.Output<number>;
    /**
     * Seed ratio.
     */
    public readonly seedRatio!: pulumi.Output<number>;
    /**
     * Seed time.
     */
    public readonly seedTime!: pulumi.Output<number>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;
    /**
     * Username.
     */
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a IndexerGazelle resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IndexerGazelleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IndexerGazelleArgs | IndexerGazelleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IndexerGazelleState | undefined;
            resourceInputs["authorSeedTime"] = state ? state.authorSeedTime : undefined;
            resourceInputs["baseUrl"] = state ? state.baseUrl : undefined;
            resourceInputs["earlyReleaseLimit"] = state ? state.earlyReleaseLimit : undefined;
            resourceInputs["enableAutomaticSearch"] = state ? state.enableAutomaticSearch : undefined;
            resourceInputs["enableInteractiveSearch"] = state ? state.enableInteractiveSearch : undefined;
            resourceInputs["enableRss"] = state ? state.enableRss : undefined;
            resourceInputs["minimumSeeders"] = state ? state.minimumSeeders : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["seedRatio"] = state ? state.seedRatio : undefined;
            resourceInputs["seedTime"] = state ? state.seedTime : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as IndexerGazelleArgs | undefined;
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.password === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            resourceInputs["authorSeedTime"] = args ? args.authorSeedTime : undefined;
            resourceInputs["baseUrl"] = args ? args.baseUrl : undefined;
            resourceInputs["earlyReleaseLimit"] = args ? args.earlyReleaseLimit : undefined;
            resourceInputs["enableAutomaticSearch"] = args ? args.enableAutomaticSearch : undefined;
            resourceInputs["enableInteractiveSearch"] = args ? args.enableInteractiveSearch : undefined;
            resourceInputs["enableRss"] = args ? args.enableRss : undefined;
            resourceInputs["minimumSeeders"] = args ? args.minimumSeeders : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["seedRatio"] = args ? args.seedRatio : undefined;
            resourceInputs["seedTime"] = args ? args.seedTime : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(IndexerGazelle.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering IndexerGazelle resources.
 */
export interface IndexerGazelleState {
    /**
     * Author seed time.
     */
    authorSeedTime?: pulumi.Input<number>;
    /**
     * Base URL.
     */
    baseUrl?: pulumi.Input<string>;
    /**
     * Early release limit.
     */
    earlyReleaseLimit?: pulumi.Input<number>;
    /**
     * Enable automatic search flag.
     */
    enableAutomaticSearch?: pulumi.Input<boolean>;
    /**
     * Enable interactive search flag.
     */
    enableInteractiveSearch?: pulumi.Input<boolean>;
    /**
     * Enable RSS flag.
     */
    enableRss?: pulumi.Input<boolean>;
    /**
     * Minimum seeders.
     */
    minimumSeeders?: pulumi.Input<number>;
    /**
     * IndexerGazelle name.
     */
    name?: pulumi.Input<string>;
    /**
     * Password.
     */
    password?: pulumi.Input<string>;
    /**
     * Priority.
     */
    priority?: pulumi.Input<number>;
    /**
     * Seed ratio.
     */
    seedRatio?: pulumi.Input<number>;
    /**
     * Seed time.
     */
    seedTime?: pulumi.Input<number>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Username.
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IndexerGazelle resource.
 */
export interface IndexerGazelleArgs {
    /**
     * Author seed time.
     */
    authorSeedTime?: pulumi.Input<number>;
    /**
     * Base URL.
     */
    baseUrl?: pulumi.Input<string>;
    /**
     * Early release limit.
     */
    earlyReleaseLimit?: pulumi.Input<number>;
    /**
     * Enable automatic search flag.
     */
    enableAutomaticSearch?: pulumi.Input<boolean>;
    /**
     * Enable interactive search flag.
     */
    enableInteractiveSearch?: pulumi.Input<boolean>;
    /**
     * Enable RSS flag.
     */
    enableRss?: pulumi.Input<boolean>;
    /**
     * Minimum seeders.
     */
    minimumSeeders?: pulumi.Input<number>;
    /**
     * IndexerGazelle name.
     */
    name: pulumi.Input<string>;
    /**
     * Password.
     */
    password: pulumi.Input<string>;
    /**
     * Priority.
     */
    priority?: pulumi.Input<number>;
    /**
     * Seed ratio.
     */
    seedRatio?: pulumi.Input<number>;
    /**
     * Seed time.
     */
    seedTime?: pulumi.Input<number>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Username.
     */
    username: pulumi.Input<string>;
}