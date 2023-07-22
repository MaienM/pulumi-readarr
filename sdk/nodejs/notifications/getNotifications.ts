// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Notifications -->List all available Notifications.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as readarr from "@pulumi/readarr";
 *
 * const example = readarr.Notifications.getNotifications({});
 * ```
 */
export function getNotifications(opts?: pulumi.InvokeOptions): Promise<GetNotificationsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("readarr:Notifications/getNotifications:getNotifications", {
    }, opts);
}

/**
 * A collection of values returned by getNotifications.
 */
export interface GetNotificationsResult {
    /**
     * The ID of this resource.
     */
    readonly id: string;
    /**
     * Notification list.
     */
    readonly notifications: outputs.Notifications.GetNotificationsNotification[];
}
