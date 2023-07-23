// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Media Management -->Media Management.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as readarr from "@pulumi/readarr";
 *
 * const example = readarr.MediaManagement.getMediaManagement({});
 * ```
 */
export function getMediaManagement(opts?: pulumi.InvokeOptions): Promise<GetMediaManagementResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("readarr:MediaManagement/getMediaManagement:getMediaManagement", {
    }, opts);
}

/**
 * A collection of values returned by getMediaManagement.
 */
export interface GetMediaManagementResult {
    /**
     * Allow fingerprinting. valid inputs are: 'newFiles', 'allFiles' and 'never'.
     */
    readonly allowFingerprinting: string;
    /**
     * Permission in linux format.
     */
    readonly chmodFolder: string;
    /**
     * Group used for permission.
     */
    readonly chownGroup: string;
    /**
     * Create empty author directories.
     */
    readonly createEmptyAuthorFolders: boolean;
    /**
     * Delete empty directories.
     */
    readonly deleteEmptyFolders: boolean;
    /**
     * Download proper and repack policy. valid inputs are: 'preferAndUpgrade', 'doNotUpgrade', and 'doNotPrefer'.
     */
    readonly downloadPropersRepacks: string;
    /**
     * Comma separated list of extra files to import (.nfo will be imported as .nfo-orig).
     */
    readonly extraFileExtensions: string;
    /**
     * Define the file date modification. valid inputs are: 'none', and 'bookReleaseDate'.
     */
    readonly fileDate: string;
    /**
     * Use hardlinks instead of copy.
     */
    readonly hardlinksCopy: boolean;
    /**
     * Media Management ID.
     */
    readonly id: number;
    /**
     * Import extra files. If enabled it will leverage 'extra*file*extensions'.
     */
    readonly importExtraFiles: boolean;
    /**
     * Minimum free space in MB to allow import.
     */
    readonly minimumFreeSpace: number;
    /**
     * Recyle bin days of retention.
     */
    readonly recycleBinDays: number;
    /**
     * Recycle bin absolute path.
     */
    readonly recycleBinPath: string;
    /**
     * Rescan after refresh policy. valid inputs are: 'always', 'afterManual' and 'never'.
     */
    readonly rescanAfterRefresh: string;
    /**
     * Set permission for imported files.
     */
    readonly setPermissions: boolean;
    /**
     * Skip free space check before importing.
     */
    readonly skipFreeSpaceCheck: boolean;
    /**
     * Unmonitor deleted files.
     */
    readonly unmonitorPreviousBooks: boolean;
    /**
     * Watch library for changes.
     */
    readonly watchIbraryForChanges: boolean;
}