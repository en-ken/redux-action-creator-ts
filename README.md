# redux-action-creator-ts

Simple type-safe FSA(flux standard action) creator of redux for TypeScript.

## Installation

```
npm install --save redux-action-creator-ts
```

## Usage
1. Import `redux-action-creator-ts`
```
import { createAction, ActionsUnion } from 'redux-action-creator-ts'
```

2. Define a dictionary of action creators by `createAction`.
```
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
```
type Actions = ActionsUnion <type of actionCreators>
```

After that, types of actions can be resolved naturally by using `Actions`.
See [examples](./examples/test.ts) to understand how to use this.
