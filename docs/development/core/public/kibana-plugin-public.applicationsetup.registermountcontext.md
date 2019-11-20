<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-public](./kibana-plugin-public.md) &gt; [ApplicationSetup](./kibana-plugin-public.applicationsetup.md) &gt; [registerMountContext](./kibana-plugin-public.applicationsetup.registermountcontext.md)

## ApplicationSetup.registerMountContext() method

Register a context provider for application mounting. Will only be available to applications that depend on the plugin that registered this context.

<b>Signature:</b>

```typescript
registerMountContext<T extends keyof AppMountContext>(contextName: T, provider: IContextProvider<App['mount'], T>): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  contextName | <code>T</code> | The key of [AppMountContext](./kibana-plugin-public.appmountcontext.md) this provider's return value should be attached to. |
|  provider | <code>IContextProvider&lt;App['mount'], T&gt;</code> | A [IContextProvider](./kibana-plugin-public.icontextprovider.md) function |

<b>Returns:</b>

`void`
