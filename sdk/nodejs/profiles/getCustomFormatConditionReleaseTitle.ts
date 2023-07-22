// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Profiles -> Custom Format Condition Release Title data source.
 * For more information refer to [Custom Format Conditions](https://wiki.servarr.com/readarr/settings#conditions).
 *
 * {{% examples %}}
 * ## Example Usage
 * {{% example %}}
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as readarr from "@maienm/pulumi-readarr";
 * import * as readarr from "@pulumi/readarr";
 *
 * const exampleCustomFormatConditionReleaseTitle = readarr.Profiles.getCustomFormatConditionReleaseTitle({
 *     name: "x265",
 *     negate: false,
 *     required: false,
 *     value: "(((x|h)\\.?265)|(HEVC))",
 * });
 * const exampleCustomFormat = new readarr.profiles.CustomFormat("exampleCustomFormat", {
 *     includeCustomFormatWhenRenaming: false,
 *     name: "Example",
 *     specifications: [exampleCustomFormatConditionReleaseTitle],
 * });
 * ```
 * {{% /example %}}
 * {{% /examples %}}
 */
export function getCustomFormatConditionReleaseTitle(args: GetCustomFormatConditionReleaseTitleArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomFormatConditionReleaseTitleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("readarr:Profiles/getCustomFormatConditionReleaseTitle:getCustomFormatConditionReleaseTitle", {
        "name": args.name,
        "negate": args.negate,
        "required": args.required,
        "value": args.value,
    }, opts);
}

/**
 * A collection of arguments for invoking getCustomFormatConditionReleaseTitle.
 */
export interface GetCustomFormatConditionReleaseTitleArgs {
    /**
     * Specification name.
     */
    name: string;
    /**
     * Negate flag.
     */
    negate: boolean;
    /**
     * Computed flag.
     */
    required: boolean;
    /**
     * Release title RegEx.
     */
    value: string;
}

/**
 * A collection of values returned by getCustomFormatConditionReleaseTitle.
 */
export interface GetCustomFormatConditionReleaseTitleResult {
    /**
     * Custom format condition release title ID.
     */
    readonly id: number;
    /**
     * Implementation.
     */
    readonly implementation: string;
    /**
     * Specification name.
     */
    readonly name: string;
    /**
     * Negate flag.
     */
    readonly negate: boolean;
    /**
     * Computed flag.
     */
    readonly required: boolean;
    /**
     * Release title RegEx.
     */
    readonly value: string;
}
/**
 * <!-- subcategory:Profiles -> Custom Format Condition Release Title data source.
 * For more information refer to [Custom Format Conditions](https://wiki.servarr.com/readarr/settings#conditions).
 *
 * {{% examples %}}
 * ## Example Usage
 * {{% example %}}
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as readarr from "@maienm/pulumi-readarr";
 * import * as readarr from "@pulumi/readarr";
 *
 * const exampleCustomFormatConditionReleaseTitle = readarr.Profiles.getCustomFormatConditionReleaseTitle({
 *     name: "x265",
 *     negate: false,
 *     required: false,
 *     value: "(((x|h)\\.?265)|(HEVC))",
 * });
 * const exampleCustomFormat = new readarr.profiles.CustomFormat("exampleCustomFormat", {
 *     includeCustomFormatWhenRenaming: false,
 *     name: "Example",
 *     specifications: [exampleCustomFormatConditionReleaseTitle],
 * });
 * ```
 * {{% /example %}}
 * {{% /examples %}}
 */
export function getCustomFormatConditionReleaseTitleOutput(args: GetCustomFormatConditionReleaseTitleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCustomFormatConditionReleaseTitleResult> {
    return pulumi.output(args).apply((a: any) => getCustomFormatConditionReleaseTitle(a, opts))
}

/**
 * A collection of arguments for invoking getCustomFormatConditionReleaseTitle.
 */
export interface GetCustomFormatConditionReleaseTitleOutputArgs {
    /**
     * Specification name.
     */
    name: pulumi.Input<string>;
    /**
     * Negate flag.
     */
    negate: pulumi.Input<boolean>;
    /**
     * Computed flag.
     */
    required: pulumi.Input<boolean>;
    /**
     * Release title RegEx.
     */
    value: pulumi.Input<string>;
}
