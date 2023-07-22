// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Media Management -->Root Folder resource.
 * For more information refer to [Root Folders](https://wiki.servarr.com/readarr/settings#root-folders) documentation.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as readarr from "@maienm/pulumi-readarr";
 *
 * const example = new readarr.mediamanagement.RootFolder("example", {
 *     defaultMetadataProfileId: 1,
 *     defaultMonitorOption: "all",
 *     defaultQualityProfileId: 1,
 *     isCalibreLibrary: false,
 *     name: "Example",
 *     outputProfile: "default",
 *     path: "/example",
 * });
 * // with calibre
 * const calibreExample = new readarr.mediamanagement.RootFolder("calibreExample", {
 *     defaultMetadataProfileId: 1,
 *     defaultMonitorOption: "all",
 *     defaultQualityProfileId: 1,
 *     host: "calibre-host",
 *     isCalibreLibrary: true,
 *     library: "Calibre_Library",
 *     name: "Calibre",
 *     outputProfile: "default",
 *     password: "Pass",
 *     path: "/calibre",
 *     port: 8081,
 *     useSsl: false,
 *     username: "User",
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import readarr:MediaManagement/rootFolder:RootFolder example 10
 * ```
 */
export class RootFolder extends pulumi.CustomResource {
    /**
     * Get an existing RootFolder resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RootFolderState, opts?: pulumi.CustomResourceOptions): RootFolder {
        return new RootFolder(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'readarr:MediaManagement/rootFolder:RootFolder';

    /**
     * Returns true if the given object is an instance of RootFolder.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RootFolder {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RootFolder.__pulumiType;
    }

    /**
     * Access flag.
     */
    public /*out*/ readonly accessible!: pulumi.Output<boolean>;
    /**
     * Default metadata profile ID.
     */
    public readonly defaultMetadataProfileId!: pulumi.Output<number>;
    /**
     * Default monitor option.
     */
    public readonly defaultMonitorOption!: pulumi.Output<string>;
    /**
     * Default metadata profile ID.
     */
    public readonly defaultQualityProfileId!: pulumi.Output<number>;
    /**
     * List of associated tags.
     */
    public readonly defaultTags!: pulumi.Output<number[]>;
    /**
     * Calibre host.
     */
    public readonly host!: pulumi.Output<string>;
    /**
     * Is calibre library flag.
     */
    public readonly isCalibreLibrary!: pulumi.Output<boolean>;
    /**
     * Calibre library.
     */
    public readonly library!: pulumi.Output<string>;
    /**
     * Root Folder name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Calibre output profile.
     */
    public readonly outputProfile!: pulumi.Output<string>;
    /**
     * Calibre password.
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * Root Folder absolute path.
     */
    public readonly path!: pulumi.Output<string>;
    /**
     * Calibre Port.
     */
    public readonly port!: pulumi.Output<number>;
    /**
     * Use SSL for calibre connection.
     */
    public readonly useSsl!: pulumi.Output<boolean>;
    /**
     * Calibre username.
     */
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a RootFolder resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RootFolderArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RootFolderArgs | RootFolderState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RootFolderState | undefined;
            resourceInputs["accessible"] = state ? state.accessible : undefined;
            resourceInputs["defaultMetadataProfileId"] = state ? state.defaultMetadataProfileId : undefined;
            resourceInputs["defaultMonitorOption"] = state ? state.defaultMonitorOption : undefined;
            resourceInputs["defaultQualityProfileId"] = state ? state.defaultQualityProfileId : undefined;
            resourceInputs["defaultTags"] = state ? state.defaultTags : undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["isCalibreLibrary"] = state ? state.isCalibreLibrary : undefined;
            resourceInputs["library"] = state ? state.library : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["outputProfile"] = state ? state.outputProfile : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["useSsl"] = state ? state.useSsl : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as RootFolderArgs | undefined;
            if ((!args || args.defaultMetadataProfileId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'defaultMetadataProfileId'");
            }
            if ((!args || args.defaultMonitorOption === undefined) && !opts.urn) {
                throw new Error("Missing required property 'defaultMonitorOption'");
            }
            if ((!args || args.defaultQualityProfileId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'defaultQualityProfileId'");
            }
            if ((!args || args.isCalibreLibrary === undefined) && !opts.urn) {
                throw new Error("Missing required property 'isCalibreLibrary'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.path === undefined) && !opts.urn) {
                throw new Error("Missing required property 'path'");
            }
            resourceInputs["defaultMetadataProfileId"] = args ? args.defaultMetadataProfileId : undefined;
            resourceInputs["defaultMonitorOption"] = args ? args.defaultMonitorOption : undefined;
            resourceInputs["defaultQualityProfileId"] = args ? args.defaultQualityProfileId : undefined;
            resourceInputs["defaultTags"] = args ? args.defaultTags : undefined;
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["isCalibreLibrary"] = args ? args.isCalibreLibrary : undefined;
            resourceInputs["library"] = args ? args.library : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["outputProfile"] = args ? args.outputProfile : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["path"] = args ? args.path : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["useSsl"] = args ? args.useSsl : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["accessible"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(RootFolder.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering RootFolder resources.
 */
export interface RootFolderState {
    /**
     * Access flag.
     */
    accessible?: pulumi.Input<boolean>;
    /**
     * Default metadata profile ID.
     */
    defaultMetadataProfileId?: pulumi.Input<number>;
    /**
     * Default monitor option.
     */
    defaultMonitorOption?: pulumi.Input<string>;
    /**
     * Default metadata profile ID.
     */
    defaultQualityProfileId?: pulumi.Input<number>;
    /**
     * List of associated tags.
     */
    defaultTags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Calibre host.
     */
    host?: pulumi.Input<string>;
    /**
     * Is calibre library flag.
     */
    isCalibreLibrary?: pulumi.Input<boolean>;
    /**
     * Calibre library.
     */
    library?: pulumi.Input<string>;
    /**
     * Root Folder name.
     */
    name?: pulumi.Input<string>;
    /**
     * Calibre output profile.
     */
    outputProfile?: pulumi.Input<string>;
    /**
     * Calibre password.
     */
    password?: pulumi.Input<string>;
    /**
     * Root Folder absolute path.
     */
    path?: pulumi.Input<string>;
    /**
     * Calibre Port.
     */
    port?: pulumi.Input<number>;
    /**
     * Use SSL for calibre connection.
     */
    useSsl?: pulumi.Input<boolean>;
    /**
     * Calibre username.
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RootFolder resource.
 */
export interface RootFolderArgs {
    /**
     * Default metadata profile ID.
     */
    defaultMetadataProfileId: pulumi.Input<number>;
    /**
     * Default monitor option.
     */
    defaultMonitorOption: pulumi.Input<string>;
    /**
     * Default metadata profile ID.
     */
    defaultQualityProfileId: pulumi.Input<number>;
    /**
     * List of associated tags.
     */
    defaultTags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Calibre host.
     */
    host?: pulumi.Input<string>;
    /**
     * Is calibre library flag.
     */
    isCalibreLibrary: pulumi.Input<boolean>;
    /**
     * Calibre library.
     */
    library?: pulumi.Input<string>;
    /**
     * Root Folder name.
     */
    name: pulumi.Input<string>;
    /**
     * Calibre output profile.
     */
    outputProfile?: pulumi.Input<string>;
    /**
     * Calibre password.
     */
    password?: pulumi.Input<string>;
    /**
     * Root Folder absolute path.
     */
    path: pulumi.Input<string>;
    /**
     * Calibre Port.
     */
    port?: pulumi.Input<number>;
    /**
     * Use SSL for calibre connection.
     */
    useSsl?: pulumi.Input<boolean>;
    /**
     * Calibre username.
     */
    username?: pulumi.Input<string>;
}
