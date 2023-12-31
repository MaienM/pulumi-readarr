// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Media Management -->Naming.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as readarr from "@pulumi/readarr";
 *
 * const example = readarr.MediaManagement.getNaming({});
 * ```
 */
export function getNaming(opts?: pulumi.InvokeOptions): Promise<GetNamingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("readarr:MediaManagement/getNaming:getNaming", {
    }, opts);
}

/**
 * A collection of values returned by getNaming.
 */
export interface GetNamingResult {
    /**
     * Author folder format.
     */
    readonly authorFolderFormat: string;
    /**
     * Naming ID.
     */
    readonly id: number;
    /**
     * Readarr will use the existing file name if false.
     */
    readonly renameBooks: boolean;
    /**
     * Replace illegal characters. They will be removed if false.
     */
    readonly replaceIllegalCharacters: boolean;
    /**
     * Standard book formatss.
     */
    readonly standardBookFormat: string;
}
