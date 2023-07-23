// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("readarr");

/**
 * API key for Readarr authentication. Can be specified via the `READARR_API_KEY` environment variable.
 */
export declare const apiKey: string | undefined;
Object.defineProperty(exports, "apiKey", {
    get() {
        return __config.get("apiKey");
    },
    enumerable: true,
});

/**
 * Full Readarr URL with protocol and port (e.g. `https://test.readarr.lib:8787`). You should **NOT** supply any path
 * (`/api`), the SDK will use the appropriate paths. Can be specified via the `READARR_URL` environment variable.
 */
export declare const url: string | undefined;
Object.defineProperty(exports, "url", {
    get() {
        return __config.get("url");
    },
    enumerable: true,
});
