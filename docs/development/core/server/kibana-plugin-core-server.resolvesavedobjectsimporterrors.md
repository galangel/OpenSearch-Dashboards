<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-core-server](./kibana-plugin-core-server.md) &gt; [resolveSavedObjectsImportErrors](./kibana-plugin-core-server.resolvesavedobjectsimporterrors.md)

## resolveSavedObjectsImportErrors() function

Resolve and return saved object import errors. See the [options](./kibana-plugin-core-server.savedobjectsresolveimporterrorsoptions.md) for more detailed informations.

<b>Signature:</b>

```typescript
export declare function resolveSavedObjectsImportErrors({ readStream, objectLimit, retries, savedObjectsClient, supportedTypes, namespace, }: SavedObjectsResolveImportErrorsOptions): Promise<SavedObjectsImportResponse>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  { readStream, objectLimit, retries, savedObjectsClient, supportedTypes, namespace, } | <code>SavedObjectsResolveImportErrorsOptions</code> |  |

<b>Returns:</b>

`Promise<SavedObjectsImportResponse>`
