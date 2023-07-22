// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Download Clients -->Generic Download Client resource. When possible use a specific resource instead.
 * For more information refer to [Download Client](https://wiki.servarr.com/readarr/settings#download-clients).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as readarr from "@maienm/pulumi-readarr";
 *
 * const example = new readarr.downloadclient.DownloadClient("example", {
 *     configContract: "TransmissionSettings",
 *     enable: true,
 *     host: "transmission",
 *     implementation: "Transmission",
 *     name: "Example",
 *     port: 9091,
 *     priority: 1,
 *     protocol: "torrent",
 *     urlBase: "/transmission/",
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import readarr:DownloadClient/downloadClient:DownloadClient example 1
 * ```
 */
export class DownloadClient extends pulumi.CustomResource {
    /**
     * Get an existing DownloadClient resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DownloadClientState, opts?: pulumi.CustomResourceOptions): DownloadClient {
        return new DownloadClient(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'readarr:DownloadClient/downloadClient:DownloadClient';

    /**
     * Returns true if the given object is an instance of DownloadClient.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DownloadClient {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DownloadClient.__pulumiType;
    }

    /**
     * Add paused flag.
     */
    public readonly addPaused!: pulumi.Output<boolean>;
    /**
     * Add stopped flag.
     */
    public readonly addStopped!: pulumi.Output<boolean>;
    /**
     * Additional tags, `0` TitleSlug, `1` Quality, `2` Language, `3` ReleaseGroup, `4` Year, `5` Indexer, `6` Network.
     */
    public readonly additionalTags!: pulumi.Output<number[]>;
    /**
     * API key.
     */
    public readonly apiKey!: pulumi.Output<string>;
    /**
     * Book category.
     */
    public readonly bookCategory!: pulumi.Output<string>;
    /**
     * Book directory.
     */
    public readonly bookDirectory!: pulumi.Output<string>;
    /**
     * Book imported category.
     */
    public readonly bookImportedCategory!: pulumi.Output<string>;
    /**
     * Book directory.
     */
    public readonly bookdirectory!: pulumi.Output<string>;
    /**
     * Category.
     */
    public readonly category!: pulumi.Output<string>;
    /**
     * DownloadClient configuration template.
     */
    public readonly configContract!: pulumi.Output<string>;
    /**
     * Destination.
     */
    public readonly destination!: pulumi.Output<string>;
    /**
     * Enable flag.
     */
    public readonly enable!: pulumi.Output<boolean>;
    /**
     * Field tags.
     */
    public readonly fieldTags!: pulumi.Output<string[]>;
    /**
     * First and last flag.
     */
    public readonly firstAndLast!: pulumi.Output<boolean>;
    /**
     * host.
     */
    public readonly host!: pulumi.Output<string>;
    /**
     * DownloadClient implementation name.
     */
    public readonly implementation!: pulumi.Output<string>;
    /**
     * Initial state. `0` Start, `1` ForceStart, `2` Pause.
     */
    public readonly initialState!: pulumi.Output<number>;
    /**
     * Initial state, with Stop support. `0` Start, `1` ForceStart, `2` Pause, `3` Stop.
     */
    public readonly intialState!: pulumi.Output<number>;
    /**
     * Magnet file extension.
     */
    public readonly magnetFileExtension!: pulumi.Output<string>;
    /**
     * Download Client name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * NZB folder.
     */
    public readonly nzbFolder!: pulumi.Output<string>;
    /**
     * Older Book priority. `0` Last, `1` First.
     */
    public readonly olderBookPriority!: pulumi.Output<number>;
    /**
     * Password.
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * Port.
     */
    public readonly port!: pulumi.Output<number>;
    /**
     * Post import tags.
     */
    public readonly postImportTags!: pulumi.Output<string[]>;
    /**
     * Priority.
     */
    public readonly priority!: pulumi.Output<number>;
    /**
     * Protocol. Valid values are 'usenet' and 'torrent'.
     */
    public readonly protocol!: pulumi.Output<string>;
    /**
     * Read only flag.
     */
    public readonly readOnly!: pulumi.Output<boolean>;
    /**
     * Recent Book priority. `0` Last, `1` First.
     */
    public readonly recentBookPriority!: pulumi.Output<number>;
    /**
     * RPC path.
     */
    public readonly rpcPath!: pulumi.Output<string>;
    /**
     * Save magnet files flag.
     */
    public readonly saveMagnetFiles!: pulumi.Output<boolean>;
    /**
     * Secret token.
     */
    public readonly secretToken!: pulumi.Output<string>;
    /**
     * Sequential order flag.
     */
    public readonly sequentialOrder!: pulumi.Output<boolean>;
    /**
     * Start on add flag.
     */
    public readonly startOnAdd!: pulumi.Output<boolean>;
    /**
     * STRM folder.
     */
    public readonly strmFolder!: pulumi.Output<string>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;
    /**
     * Torrent folder.
     */
    public readonly torrentFolder!: pulumi.Output<string>;
    /**
     * Base URL.
     */
    public readonly urlBase!: pulumi.Output<string>;
    /**
     * Use SSL flag.
     */
    public readonly useSsl!: pulumi.Output<boolean>;
    /**
     * Username.
     */
    public readonly username!: pulumi.Output<string>;
    /**
     * Watch folder flag.
     */
    public readonly watchFolder!: pulumi.Output<string>;

    /**
     * Create a DownloadClient resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DownloadClientArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DownloadClientArgs | DownloadClientState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DownloadClientState | undefined;
            resourceInputs["addPaused"] = state ? state.addPaused : undefined;
            resourceInputs["addStopped"] = state ? state.addStopped : undefined;
            resourceInputs["additionalTags"] = state ? state.additionalTags : undefined;
            resourceInputs["apiKey"] = state ? state.apiKey : undefined;
            resourceInputs["bookCategory"] = state ? state.bookCategory : undefined;
            resourceInputs["bookDirectory"] = state ? state.bookDirectory : undefined;
            resourceInputs["bookImportedCategory"] = state ? state.bookImportedCategory : undefined;
            resourceInputs["bookdirectory"] = state ? state.bookdirectory : undefined;
            resourceInputs["category"] = state ? state.category : undefined;
            resourceInputs["configContract"] = state ? state.configContract : undefined;
            resourceInputs["destination"] = state ? state.destination : undefined;
            resourceInputs["enable"] = state ? state.enable : undefined;
            resourceInputs["fieldTags"] = state ? state.fieldTags : undefined;
            resourceInputs["firstAndLast"] = state ? state.firstAndLast : undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["implementation"] = state ? state.implementation : undefined;
            resourceInputs["initialState"] = state ? state.initialState : undefined;
            resourceInputs["intialState"] = state ? state.intialState : undefined;
            resourceInputs["magnetFileExtension"] = state ? state.magnetFileExtension : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nzbFolder"] = state ? state.nzbFolder : undefined;
            resourceInputs["olderBookPriority"] = state ? state.olderBookPriority : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["postImportTags"] = state ? state.postImportTags : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["readOnly"] = state ? state.readOnly : undefined;
            resourceInputs["recentBookPriority"] = state ? state.recentBookPriority : undefined;
            resourceInputs["rpcPath"] = state ? state.rpcPath : undefined;
            resourceInputs["saveMagnetFiles"] = state ? state.saveMagnetFiles : undefined;
            resourceInputs["secretToken"] = state ? state.secretToken : undefined;
            resourceInputs["sequentialOrder"] = state ? state.sequentialOrder : undefined;
            resourceInputs["startOnAdd"] = state ? state.startOnAdd : undefined;
            resourceInputs["strmFolder"] = state ? state.strmFolder : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["torrentFolder"] = state ? state.torrentFolder : undefined;
            resourceInputs["urlBase"] = state ? state.urlBase : undefined;
            resourceInputs["useSsl"] = state ? state.useSsl : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
            resourceInputs["watchFolder"] = state ? state.watchFolder : undefined;
        } else {
            const args = argsOrState as DownloadClientArgs | undefined;
            if ((!args || args.configContract === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configContract'");
            }
            if ((!args || args.implementation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'implementation'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.protocol === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protocol'");
            }
            resourceInputs["addPaused"] = args ? args.addPaused : undefined;
            resourceInputs["addStopped"] = args ? args.addStopped : undefined;
            resourceInputs["additionalTags"] = args ? args.additionalTags : undefined;
            resourceInputs["apiKey"] = args ? args.apiKey : undefined;
            resourceInputs["bookCategory"] = args ? args.bookCategory : undefined;
            resourceInputs["bookDirectory"] = args ? args.bookDirectory : undefined;
            resourceInputs["bookImportedCategory"] = args ? args.bookImportedCategory : undefined;
            resourceInputs["bookdirectory"] = args ? args.bookdirectory : undefined;
            resourceInputs["category"] = args ? args.category : undefined;
            resourceInputs["configContract"] = args ? args.configContract : undefined;
            resourceInputs["destination"] = args ? args.destination : undefined;
            resourceInputs["enable"] = args ? args.enable : undefined;
            resourceInputs["fieldTags"] = args ? args.fieldTags : undefined;
            resourceInputs["firstAndLast"] = args ? args.firstAndLast : undefined;
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["implementation"] = args ? args.implementation : undefined;
            resourceInputs["initialState"] = args ? args.initialState : undefined;
            resourceInputs["intialState"] = args ? args.intialState : undefined;
            resourceInputs["magnetFileExtension"] = args ? args.magnetFileExtension : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nzbFolder"] = args ? args.nzbFolder : undefined;
            resourceInputs["olderBookPriority"] = args ? args.olderBookPriority : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["postImportTags"] = args ? args.postImportTags : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["readOnly"] = args ? args.readOnly : undefined;
            resourceInputs["recentBookPriority"] = args ? args.recentBookPriority : undefined;
            resourceInputs["rpcPath"] = args ? args.rpcPath : undefined;
            resourceInputs["saveMagnetFiles"] = args ? args.saveMagnetFiles : undefined;
            resourceInputs["secretToken"] = args ? args.secretToken : undefined;
            resourceInputs["sequentialOrder"] = args ? args.sequentialOrder : undefined;
            resourceInputs["startOnAdd"] = args ? args.startOnAdd : undefined;
            resourceInputs["strmFolder"] = args ? args.strmFolder : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["torrentFolder"] = args ? args.torrentFolder : undefined;
            resourceInputs["urlBase"] = args ? args.urlBase : undefined;
            resourceInputs["useSsl"] = args ? args.useSsl : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["watchFolder"] = args ? args.watchFolder : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DownloadClient.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DownloadClient resources.
 */
export interface DownloadClientState {
    /**
     * Add paused flag.
     */
    addPaused?: pulumi.Input<boolean>;
    /**
     * Add stopped flag.
     */
    addStopped?: pulumi.Input<boolean>;
    /**
     * Additional tags, `0` TitleSlug, `1` Quality, `2` Language, `3` ReleaseGroup, `4` Year, `5` Indexer, `6` Network.
     */
    additionalTags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * API key.
     */
    apiKey?: pulumi.Input<string>;
    /**
     * Book category.
     */
    bookCategory?: pulumi.Input<string>;
    /**
     * Book directory.
     */
    bookDirectory?: pulumi.Input<string>;
    /**
     * Book imported category.
     */
    bookImportedCategory?: pulumi.Input<string>;
    /**
     * Book directory.
     */
    bookdirectory?: pulumi.Input<string>;
    /**
     * Category.
     */
    category?: pulumi.Input<string>;
    /**
     * DownloadClient configuration template.
     */
    configContract?: pulumi.Input<string>;
    /**
     * Destination.
     */
    destination?: pulumi.Input<string>;
    /**
     * Enable flag.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * Field tags.
     */
    fieldTags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * First and last flag.
     */
    firstAndLast?: pulumi.Input<boolean>;
    /**
     * host.
     */
    host?: pulumi.Input<string>;
    /**
     * DownloadClient implementation name.
     */
    implementation?: pulumi.Input<string>;
    /**
     * Initial state. `0` Start, `1` ForceStart, `2` Pause.
     */
    initialState?: pulumi.Input<number>;
    /**
     * Initial state, with Stop support. `0` Start, `1` ForceStart, `2` Pause, `3` Stop.
     */
    intialState?: pulumi.Input<number>;
    /**
     * Magnet file extension.
     */
    magnetFileExtension?: pulumi.Input<string>;
    /**
     * Download Client name.
     */
    name?: pulumi.Input<string>;
    /**
     * NZB folder.
     */
    nzbFolder?: pulumi.Input<string>;
    /**
     * Older Book priority. `0` Last, `1` First.
     */
    olderBookPriority?: pulumi.Input<number>;
    /**
     * Password.
     */
    password?: pulumi.Input<string>;
    /**
     * Port.
     */
    port?: pulumi.Input<number>;
    /**
     * Post import tags.
     */
    postImportTags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Priority.
     */
    priority?: pulumi.Input<number>;
    /**
     * Protocol. Valid values are 'usenet' and 'torrent'.
     */
    protocol?: pulumi.Input<string>;
    /**
     * Read only flag.
     */
    readOnly?: pulumi.Input<boolean>;
    /**
     * Recent Book priority. `0` Last, `1` First.
     */
    recentBookPriority?: pulumi.Input<number>;
    /**
     * RPC path.
     */
    rpcPath?: pulumi.Input<string>;
    /**
     * Save magnet files flag.
     */
    saveMagnetFiles?: pulumi.Input<boolean>;
    /**
     * Secret token.
     */
    secretToken?: pulumi.Input<string>;
    /**
     * Sequential order flag.
     */
    sequentialOrder?: pulumi.Input<boolean>;
    /**
     * Start on add flag.
     */
    startOnAdd?: pulumi.Input<boolean>;
    /**
     * STRM folder.
     */
    strmFolder?: pulumi.Input<string>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Torrent folder.
     */
    torrentFolder?: pulumi.Input<string>;
    /**
     * Base URL.
     */
    urlBase?: pulumi.Input<string>;
    /**
     * Use SSL flag.
     */
    useSsl?: pulumi.Input<boolean>;
    /**
     * Username.
     */
    username?: pulumi.Input<string>;
    /**
     * Watch folder flag.
     */
    watchFolder?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DownloadClient resource.
 */
export interface DownloadClientArgs {
    /**
     * Add paused flag.
     */
    addPaused?: pulumi.Input<boolean>;
    /**
     * Add stopped flag.
     */
    addStopped?: pulumi.Input<boolean>;
    /**
     * Additional tags, `0` TitleSlug, `1` Quality, `2` Language, `3` ReleaseGroup, `4` Year, `5` Indexer, `6` Network.
     */
    additionalTags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * API key.
     */
    apiKey?: pulumi.Input<string>;
    /**
     * Book category.
     */
    bookCategory?: pulumi.Input<string>;
    /**
     * Book directory.
     */
    bookDirectory?: pulumi.Input<string>;
    /**
     * Book imported category.
     */
    bookImportedCategory?: pulumi.Input<string>;
    /**
     * Book directory.
     */
    bookdirectory?: pulumi.Input<string>;
    /**
     * Category.
     */
    category?: pulumi.Input<string>;
    /**
     * DownloadClient configuration template.
     */
    configContract: pulumi.Input<string>;
    /**
     * Destination.
     */
    destination?: pulumi.Input<string>;
    /**
     * Enable flag.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * Field tags.
     */
    fieldTags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * First and last flag.
     */
    firstAndLast?: pulumi.Input<boolean>;
    /**
     * host.
     */
    host?: pulumi.Input<string>;
    /**
     * DownloadClient implementation name.
     */
    implementation: pulumi.Input<string>;
    /**
     * Initial state. `0` Start, `1` ForceStart, `2` Pause.
     */
    initialState?: pulumi.Input<number>;
    /**
     * Initial state, with Stop support. `0` Start, `1` ForceStart, `2` Pause, `3` Stop.
     */
    intialState?: pulumi.Input<number>;
    /**
     * Magnet file extension.
     */
    magnetFileExtension?: pulumi.Input<string>;
    /**
     * Download Client name.
     */
    name: pulumi.Input<string>;
    /**
     * NZB folder.
     */
    nzbFolder?: pulumi.Input<string>;
    /**
     * Older Book priority. `0` Last, `1` First.
     */
    olderBookPriority?: pulumi.Input<number>;
    /**
     * Password.
     */
    password?: pulumi.Input<string>;
    /**
     * Port.
     */
    port?: pulumi.Input<number>;
    /**
     * Post import tags.
     */
    postImportTags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Priority.
     */
    priority?: pulumi.Input<number>;
    /**
     * Protocol. Valid values are 'usenet' and 'torrent'.
     */
    protocol: pulumi.Input<string>;
    /**
     * Read only flag.
     */
    readOnly?: pulumi.Input<boolean>;
    /**
     * Recent Book priority. `0` Last, `1` First.
     */
    recentBookPriority?: pulumi.Input<number>;
    /**
     * RPC path.
     */
    rpcPath?: pulumi.Input<string>;
    /**
     * Save magnet files flag.
     */
    saveMagnetFiles?: pulumi.Input<boolean>;
    /**
     * Secret token.
     */
    secretToken?: pulumi.Input<string>;
    /**
     * Sequential order flag.
     */
    sequentialOrder?: pulumi.Input<boolean>;
    /**
     * Start on add flag.
     */
    startOnAdd?: pulumi.Input<boolean>;
    /**
     * STRM folder.
     */
    strmFolder?: pulumi.Input<string>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Torrent folder.
     */
    torrentFolder?: pulumi.Input<string>;
    /**
     * Base URL.
     */
    urlBase?: pulumi.Input<string>;
    /**
     * Use SSL flag.
     */
    useSsl?: pulumi.Input<boolean>;
    /**
     * Username.
     */
    username?: pulumi.Input<string>;
    /**
     * Watch folder flag.
     */
    watchFolder?: pulumi.Input<string>;
}
