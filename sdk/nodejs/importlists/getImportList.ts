// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Import Lists -->Single Import List.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as readarr from "@pulumi/readarr";
 *
 * const example = readarr.ImportLists.getImportList({
 *     name: "Example",
 * });
 * ```
 */
export function getImportList(args: GetImportListArgs, opts?: pulumi.InvokeOptions): Promise<GetImportListResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("readarr:ImportLists/getImportList:getImportList", {
        "name": args.name,
    }, opts);
}

/**
 * A collection of arguments for invoking getImportList.
 */
export interface GetImportListArgs {
    /**
     * Import List name.
     */
    name: string;
}

/**
 * A collection of values returned by getImportList.
 */
export interface GetImportListResult {
    /**
     * Access token.
     */
    readonly accessToken: string;
    /**
     * Access token secret.
     */
    readonly accessTokenSecret: string;
    /**
     * API key.
     */
    readonly apiKey: string;
    /**
     * Base URL.
     */
    readonly baseUrl: string;
    /**
     * Bookshelf IDs.
     */
    readonly bookshelfIds: string[];
    /**
     * ImportList configuration template.
     */
    readonly configContract: string;
    /**
     * Enable automatic add flag.
     */
    readonly enableAutomaticAdd: boolean;
    /**
     * Import List ID.
     */
    readonly id: number;
    /**
     * ImportList implementation name.
     */
    readonly implementation: string;
    /**
     * List ID.
     */
    readonly listId: number;
    /**
     * List order.
     */
    readonly listOrder: number;
    /**
     * List type.
     */
    readonly listType: string;
    /**
     * Metadata profile ID.
     */
    readonly metadataProfileId: number;
    /**
     * Import List name.
     */
    readonly name: string;
    /**
     * Profile IDs.
     */
    readonly profileIds: number[];
    /**
     * Quality profile ID.
     */
    readonly qualityProfileId: number;
    /**
     * Request token secret.
     */
    readonly requestTokenSecret: string;
    /**
     * Root folder path.
     */
    readonly rootFolderPath: string;
    /**
     * Series ID.
     */
    readonly seriesId: number;
    /**
     * Should monitor.
     */
    readonly shouldMonitor: string;
    /**
     * Should search flag.
     */
    readonly shouldSearch: boolean;
    /**
     * Tag IDs.
     */
    readonly tagIds: number[];
    /**
     * List of associated tags.
     */
    readonly tags: number[];
    /**
     * User ID.
     */
    readonly userId: string;
    /**
     * Username.
     */
    readonly username: string;
}
/**
 * <!-- subcategory:Import Lists -->Single Import List.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as readarr from "@pulumi/readarr";
 *
 * const example = readarr.ImportLists.getImportList({
 *     name: "Example",
 * });
 * ```
 */
export function getImportListOutput(args: GetImportListOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetImportListResult> {
    return pulumi.output(args).apply((a: any) => getImportList(a, opts))
}

/**
 * A collection of arguments for invoking getImportList.
 */
export interface GetImportListOutputArgs {
    /**
     * Import List name.
     */
    name: pulumi.Input<string>;
}
