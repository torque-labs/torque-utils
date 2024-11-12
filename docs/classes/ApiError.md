[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / ApiError

# Class: ApiError

## Extends

- `Error`

## Constructors

### new ApiError()

> **new ApiError**(`__namedParameters`): [`ApiError`](ApiError.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `object` |
| `__namedParameters.cause`? | `any` |
| `__namedParameters.data`? | `any` |
| `__namedParameters.message` | `string` |
| `__namedParameters.name` | [`ApiErrorNames`](../enumerations/ApiErrorNames.md) |

#### Returns

[`ApiError`](ApiError.md)

#### Overrides

`Error.constructor`

#### Defined in

[types/errors.ts:24](https://github.com/torque-labs/torque-utils/blob/a612e615fa21888d00ebb7bf70f9910fab4be80a/types/errors.ts#L24)

## Properties

| Property | Type | Description | Overrides | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| `cause` | `any` | - | `Error.cause` | - |
| `code` | `number` | - | - | - |
| `data` | `any` | - | - | - |
| `message` | `string` | - | `Error.message` | - |
| `name` | [`ApiErrorNames`](../enumerations/ApiErrorNames.md) | - | `Error.name` | - |
| `stack?` | `string` | - | - | `Error.stack` |
| `prepareStackTrace?` | (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any` | Optional override for formatting stack traces **See** https://v8.dev/docs/stack-trace-api#customizing-stack-traces | - | `Error.prepareStackTrace` |
| `stackTraceLimit` | `number` | - | - | `Error.stackTraceLimit` |

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetObject` | `object` |
| `constructorOpt`? | `Function` |

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:91
