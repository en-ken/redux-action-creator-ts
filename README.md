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
  withMeta: () => createAction(
    ActionType.WITH_META,
    { meta: { meta1: 'foo' } }),
  ...
}
```

3. Define the action union.

```ts
type Action = ActionsUnion <type of actionCreators>
```

After that, types of actions can be resolved in `switch` sentence by using `Action`.

```ts
interface State {
  error: boolean,
  payload: string,
  meta: string
}

const reducer = (
  state: State,
  action: Action
) => {
  switch (action.type) {
    case ActionType.SIMPLE:
      return state
    case ActionType.WITH_PAYLOAD:
      return {
        ...state,
        payload: action.payload!.payload1
      }
    case ActionType.WITH_ERROR:
      return {
        ...state,
        error: action.error!
      }
    case ActionType.WITH_META:
      return {
        ...state,
        meta: action.meta!.meta1
      }
  ...
```
