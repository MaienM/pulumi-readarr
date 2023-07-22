// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Media Management -->Naming resource.
 * For more information refer to [Naming](https://wiki.servarr.com/readarr/settings#community-naming-suggestions) documentation.
 *
 * ## Import
 *
 * import does not need parameters
 *
 * ```sh
 *  $ pulumi import readarr:MediaManagement/naming:Naming example
 * ```
 */
export class Naming extends pulumi.CustomResource {
    /**
     * Get an existing Naming resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NamingState, opts?: pulumi.CustomResourceOptions): Naming {
        return new Naming(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'readarr:MediaManagement/naming:Naming';

    /**
     * Returns true if the given object is an instance of Naming.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Naming {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Naming.__pulumiType;
    }

    /**
     * Author folder format.
     */
    public readonly authorFolderFormat!: pulumi.Output<string>;
    /**
     * Readarr will use the existing file name if false.
     */
    public readonly renameBooks!: pulumi.Output<boolean>;
    /**
     * Replace illegal characters. They will be removed if false.
     */
    public readonly replaceIllegalCharacters!: pulumi.Output<boolean>;
    /**
     * Standard book formatss.
     */
    public readonly standardBookFormat!: pulumi.Output<string>;

    /**
     * Create a Naming resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NamingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NamingArgs | NamingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NamingState | undefined;
            resourceInputs["authorFolderFormat"] = state ? state.authorFolderFormat : undefined;
            resourceInputs["renameBooks"] = state ? state.renameBooks : undefined;
            resourceInputs["replaceIllegalCharacters"] = state ? state.replaceIllegalCharacters : undefined;
            resourceInputs["standardBookFormat"] = state ? state.standardBookFormat : undefined;
        } else {
            const args = argsOrState as NamingArgs | undefined;
            if ((!args || args.authorFolderFormat === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authorFolderFormat'");
            }
            if ((!args || args.renameBooks === undefined) && !opts.urn) {
                throw new Error("Missing required property 'renameBooks'");
            }
            if ((!args || args.replaceIllegalCharacters === undefined) && !opts.urn) {
                throw new Error("Missing required property 'replaceIllegalCharacters'");
            }
            if ((!args || args.standardBookFormat === undefined) && !opts.urn) {
                throw new Error("Missing required property 'standardBookFormat'");
            }
            resourceInputs["authorFolderFormat"] = args ? args.authorFolderFormat : undefined;
            resourceInputs["renameBooks"] = args ? args.renameBooks : undefined;
            resourceInputs["replaceIllegalCharacters"] = args ? args.replaceIllegalCharacters : undefined;
            resourceInputs["standardBookFormat"] = args ? args.standardBookFormat : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Naming.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Naming resources.
 */
export interface NamingState {
    /**
     * Author folder format.
     */
    authorFolderFormat?: pulumi.Input<string>;
    /**
     * Readarr will use the existing file name if false.
     */
    renameBooks?: pulumi.Input<boolean>;
    /**
     * Replace illegal characters. They will be removed if false.
     */
    replaceIllegalCharacters?: pulumi.Input<boolean>;
    /**
     * Standard book formatss.
     */
    standardBookFormat?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Naming resource.
 */
export interface NamingArgs {
    /**
     * Author folder format.
     */
    authorFolderFormat: pulumi.Input<string>;
    /**
     * Readarr will use the existing file name if false.
     */
    renameBooks: pulumi.Input<boolean>;
    /**
     * Replace illegal characters. They will be removed if false.
     */
    replaceIllegalCharacters: pulumi.Input<boolean>;
    /**
     * Standard book formatss.
     */
    standardBookFormat: pulumi.Input<string>;
}
