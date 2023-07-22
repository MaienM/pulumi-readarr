// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Import Lists -->List all available Import List Exclusions.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as readarr from "@pulumi/readarr";
 *
 * const example = readarr.ImportLists.getImportListExclusions({});
 * ```
 */
export function getImportListExclusions(opts?: pulumi.InvokeOptions): Promise<GetImportListExclusionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("readarr:ImportLists/getImportListExclusions:getImportListExclusions", {
    }, opts);
}

/**
 * A collection of values returned by getImportListExclusions.
 */
export interface GetImportListExclusionsResult {
    /**
     * The ID of this resource.
     */
    readonly id: string;
    /**
     * ImportListExclusion list.
     */
    readonly importListExclusions: outputs.ImportLists.GetImportListExclusionsImportListExclusion[];
}
