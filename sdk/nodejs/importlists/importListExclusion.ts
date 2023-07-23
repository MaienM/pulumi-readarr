// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Import Lists -->Import List Exclusion resource.
 * For more information refer to [ImportListExclusions](https://wiki.servarr.com/readarr/settings#list-exclusions) documentation.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as readarr from "@maienm/pulumi-readarr";
 *
 * const example = new readarr.importlists.ImportListExclusion("example", {
 *     authorName: "Agatha Christie",
 *     foreignId: "46a098f3-272d-4bec-9746-67e8ab48ed40",
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import readarr:ImportLists/importListExclusion:ImportListExclusion example 10
 * ```
 */
export class ImportListExclusion extends pulumi.CustomResource {
    /**
     * Get an existing ImportListExclusion resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ImportListExclusionState, opts?: pulumi.CustomResourceOptions): ImportListExclusion {
        return new ImportListExclusion(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'readarr:ImportLists/importListExclusion:ImportListExclusion';

    /**
     * Returns true if the given object is an instance of ImportListExclusion.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ImportListExclusion {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ImportListExclusion.__pulumiType;
    }

    /**
     * Author to be excluded.
     */
    public readonly authorName!: pulumi.Output<string>;
    /**
     * Musicbrainz ID.
     */
    public readonly foreignId!: pulumi.Output<string>;

    /**
     * Create a ImportListExclusion resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ImportListExclusionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ImportListExclusionArgs | ImportListExclusionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ImportListExclusionState | undefined;
            resourceInputs["authorName"] = state ? state.authorName : undefined;
            resourceInputs["foreignId"] = state ? state.foreignId : undefined;
        } else {
            const args = argsOrState as ImportListExclusionArgs | undefined;
            if ((!args || args.authorName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authorName'");
            }
            if ((!args || args.foreignId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'foreignId'");
            }
            resourceInputs["authorName"] = args ? args.authorName : undefined;
            resourceInputs["foreignId"] = args ? args.foreignId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ImportListExclusion.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ImportListExclusion resources.
 */
export interface ImportListExclusionState {
    /**
     * Author to be excluded.
     */
    authorName?: pulumi.Input<string>;
    /**
     * Musicbrainz ID.
     */
    foreignId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ImportListExclusion resource.
 */
export interface ImportListExclusionArgs {
    /**
     * Author to be excluded.
     */
    authorName: pulumi.Input<string>;
    /**
     * Musicbrainz ID.
     */
    foreignId: pulumi.Input<string>;
}