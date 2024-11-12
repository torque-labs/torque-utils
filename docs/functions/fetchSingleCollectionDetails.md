[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / fetchSingleCollectionDetails

# Function: fetchSingleCollectionDetails()

```ts
function fetchSingleCollectionDetails(collectionId): Promise<{
  collId: collection.collId;
  compressed: collection.compressed;
  imageUri: collection.imageUri;
  metadataProgram: any;
  name: collection.name;
  slugdisplay: collection.slugDisplay;
  stats: collection.stats;
  symbol: collection.symbol;
  tokenStandard: collection.tokenStandard;
  whitelistPda: collection.whitelistPda;
}>
```

Fetches single collection details

## Parameters

| Parameter | Type |
| ------ | ------ |
| `collectionId` | `string` |

## Returns

`Promise`\<\{
  `collId`: `collection.collId`;
  `compressed`: `collection.compressed`;
  `imageUri`: `collection.imageUri`;
  `metadataProgram`: `any`;
  `name`: `collection.name`;
  `slugdisplay`: `collection.slugDisplay`;
  `stats`: `collection.stats`;
  `symbol`: `collection.symbol`;
  `tokenStandard`: `collection.tokenStandard`;
  `whitelistPda`: `collection.whitelistPda`;
 \}\>

### collId

```ts
collId: any = collection.collId;
```

### compressed

```ts
compressed: any = collection.compressed;
```

### imageUri

```ts
imageUri: any = collection.imageUri;
```

### metadataProgram

```ts
metadataProgram: any;
```

### name

```ts
name: any = collection.name;
```

### slugdisplay

```ts
slugdisplay: any = collection.slugDisplay;
```

### stats

```ts
stats: any = collection.stats;
```

### symbol

```ts
symbol: any = collection.symbol;
```

### tokenStandard

```ts
tokenStandard: any = collection.tokenStandard;
```

### whitelistPda

```ts
whitelistPda: any = collection.whitelistPda;
```

## Defined in

[lib/tensor-api.ts:99](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/lib/tensor-api.ts#L99)
