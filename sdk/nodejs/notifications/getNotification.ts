// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Notifications -->Single Notification.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as readarr from "@pulumi/readarr";
 *
 * const example = readarr.Notifications.getNotification({
 *     name: "Example",
 * });
 * ```
 */
export function getNotification(args: GetNotificationArgs, opts?: pulumi.InvokeOptions): Promise<GetNotificationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("readarr:Notifications/getNotification:getNotification", {
        "name": args.name,
    }, opts);
}

/**
 * A collection of arguments for invoking getNotification.
 */
export interface GetNotificationArgs {
    /**
     * Notification name.
     */
    name: string;
}

/**
 * A collection of values returned by getNotification.
 */
export interface GetNotificationResult {
    /**
     * Access token.
     */
    readonly accessToken: string;
    /**
     * Access token secret.
     */
    readonly accessTokenSecret: string;
    /**
     * Add IDs.
     */
    readonly addIds: string[];
    /**
     * API key.
     */
    readonly apiKey: string;
    /**
     * App token.
     */
    readonly appToken: string;
    /**
     * Arguments.
     */
    readonly arguments: string;
    /**
     * Attach files flag.
     */
    readonly attachFiles: boolean;
    /**
     * Auth user.
     */
    readonly authUser: string;
    /**
     * Author.
     */
    readonly author: string;
    /**
     * Avatar.
     */
    readonly avatar: string;
    /**
     * Bcc.
     */
    readonly bccs: string[];
    /**
     * Bot token.
     */
    readonly botToken: string;
    /**
     * Cc.
     */
    readonly ccs: string[];
    /**
     * Channel.
     */
    readonly channel: string;
    /**
     * Channel tags.
     */
    readonly channelTags: string[];
    /**
     * Chat ID.
     */
    readonly chatId: string;
    /**
     * Click URL.
     */
    readonly clickUrl: string;
    /**
     * Condition. `10` BrandNew, `20` LikeNew, `30` VeryGood, `40` Good, `50` Acceptable, `60` Poor.
     */
    readonly condition: number;
    /**
     * Notification configuration template.
     */
    readonly configContract: string;
    /**
     * Consumer key.
     */
    readonly consumerKey: string;
    /**
     * Consumer secret.
     */
    readonly consumerSecret: string;
    /**
     * Condition description.
     */
    readonly description: string;
    /**
     * Device IDs.
     */
    readonly deviceIds: string[];
    /**
     * Device names.
     */
    readonly deviceNames: string;
    /**
     * Devices.
     */
    readonly devices: string[];
    /**
     * Direct message flag.
     */
    readonly directMessage: boolean;
    /**
     * Event.
     */
    readonly event: string;
    /**
     * Expire.
     */
    readonly expire: number;
    /**
     * Devices.
     */
    readonly fieldTags: string[];
    /**
     * From.
     */
    readonly from: string;
    /**
     * Grab fields. `0` Overview, `1` Rating, `2` Genres, `3` Quality, `4` Group, `5` Size, `6` Links, `7` Release, `8` Poster, `9` Fanart, `10` CustomFormats, `11` CustomFormatScore.
     */
    readonly grabFields: number;
    /**
     * Host.
     */
    readonly host: string;
    /**
     * Icon.
     */
    readonly icon: string;
    /**
     * Notification ID.
     */
    readonly id: number;
    /**
     * Notification implementation name.
     */
    readonly implementation: string;
    /**
     * Import fields. `0` Overview, `1` Rating, `2` Genres, `3` Quality, `4` Codecs, `5` Group, `6` Size, `7` Languages, `8` Subtitles, `9` Links, `10` Release, `11` Poster, `12` Fanart.
     */
    readonly importFields: number;
    /**
     * Include health warnings.
     */
    readonly includeHealthWarnings: boolean;
    /**
     * Instance name.
     */
    readonly instanceName: string;
    /**
     * Key.
     */
    readonly key: string;
    /**
     * Purchase location.
     */
    readonly location: string;
    /**
     * Map From.
     */
    readonly mapFrom: string;
    /**
     * Map To.
     */
    readonly mapTo: string;
    /**
     * Mention.
     */
    readonly mention: string;
    /**
     * Method. `1` POST, `2` PUT.
     */
    readonly method: number;
    /**
     * Notification name.
     */
    readonly name: string;
    /**
     * Notify flag.
     */
    readonly notify: boolean;
    /**
     * On application update flag.
     */
    readonly onApplicationUpdate: boolean;
    /**
     * On author deleted flag.
     */
    readonly onAuthorDelete: boolean;
    /**
     * On book delete flag.
     */
    readonly onBookDelete: boolean;
    /**
     * On book file delete flag.
     */
    readonly onBookFileDelete: boolean;
    /**
     * On book file delete for upgrade flag.
     */
    readonly onBookFileDeleteForUpgrade: boolean;
    /**
     * On book retag flag.
     */
    readonly onBookRetag: boolean;
    /**
     * On download failure flag.
     */
    readonly onDownloadFailure: boolean;
    /**
     * On grab flag.
     */
    readonly onGrab: boolean;
    /**
     * On health issue flag.
     */
    readonly onHealthIssue: boolean;
    /**
     * On import failure flag.
     */
    readonly onImportFailure: boolean;
    /**
     * On release import flag.
     */
    readonly onReleaseImport: boolean;
    /**
     * On rename flag.
     */
    readonly onRename: boolean;
    /**
     * On upgrade flag.
     */
    readonly onUpgrade: boolean;
    /**
     * password.
     */
    readonly password: string;
    /**
     * Path.
     */
    readonly path: string;
    /**
     * Port.
     */
    readonly port: number;
    /**
     * Priority.
     */
    readonly priority: number;
    /**
     * Recipients.
     */
    readonly recipients: string[];
    /**
     * Refresh token.
     */
    readonly refreshToken: string;
    /**
     * Remove IDs.
     */
    readonly removeIds: string[];
    /**
     * Request token secret.
     */
    readonly requestTokenSecret: string;
    /**
     * Require encryption flag.
     */
    readonly requireEncryption: boolean;
    /**
     * Retry.
     */
    readonly retry: number;
    /**
     * Add silently flag.
     */
    readonly sendSilently: boolean;
    /**
     * Sender domain.
     */
    readonly senderDomain: string;
    /**
     * Sender ID.
     */
    readonly senderId: string;
    /**
     * server.
     */
    readonly server: string;
    /**
     * Server url.
     */
    readonly serverUrl: string;
    /**
     * Sign in.
     */
    readonly signIn: string;
    /**
     * Sound.
     */
    readonly sound: string;
    /**
     * List of associated tags.
     */
    readonly tags: number[];
    /**
     * Token.
     */
    readonly token: string;
    /**
     * Devices.
     */
    readonly topics: string[];
    /**
     * To.
     */
    readonly tos: string[];
    /**
     * Update library flag.
     */
    readonly updateLibrary: boolean;
    /**
     * URL.
     */
    readonly url: string;
    /**
     * URL base.
     */
    readonly urlBase: string;
    /**
     * Use EU endpoint flag.
     */
    readonly useEuEndpoint: boolean;
    /**
     * Use SSL flag.
     */
    readonly useSsl: boolean;
    /**
     * User ID.
     */
    readonly userId: string;
    /**
     * User key.
     */
    readonly userKey: string;
    /**
     * Username.
     */
    readonly username: string;
    /**
     * Web hook url.
     */
    readonly webHookUrl: string;
}
/**
 * <!-- subcategory:Notifications -->Single Notification.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as readarr from "@pulumi/readarr";
 *
 * const example = readarr.Notifications.getNotification({
 *     name: "Example",
 * });
 * ```
 */
export function getNotificationOutput(args: GetNotificationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNotificationResult> {
    return pulumi.output(args).apply((a: any) => getNotification(a, opts))
}

/**
 * A collection of arguments for invoking getNotification.
 */
export interface GetNotificationOutputArgs {
    /**
     * Notification name.
     */
    name: pulumi.Input<string>;
}
