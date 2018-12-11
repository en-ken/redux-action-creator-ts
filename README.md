# typescript-fsa-creator

Simple type-safe FSA(flux standard action) creator for TypeScript.

## Installation

```bash
npm install --save typescript-fsa-creator
```

## Usage
1. Import `typescript-fsa-creator`

```ts
import { createAction, ActionsUnion } from 'typescript-fsa-creator'
```

2. Define a dictionary of action creators by `createAction`.

```ts
const actionCreators = {
  // createAction('action type') or
  // createAction('action type', { error?: {}, payload?: {}, meta?: {} }) 
  simple: () => createAction('SIMPLE'),
  withPayload: (payload1: string) => createAction(
    'WITH_PAYLOAD', { payload: { payload1 } }),
  withError: (errorDetails: string) => createAction(
    'WITH_ERROR', { error: true }),
  ...
}
```

3. Define the action union.

```ts
type Actions = ActionsUnion <type of actionCreators>
```

After that, types of actions can be resolved naturally by using `Actions`.
See [examples](./examples/test.ts) to understand how to use this.
