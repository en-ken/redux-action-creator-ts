import { createAction, ActionsUnion } from '../index'

enum ActionType {
  SIMPLE = 'redux-action-create-ts/examples/SIMPLE',
  WITH_PAYLOAD = 'redux-action-create-ts/examples/WITH_PAYLOAD',
  WITH_ERROR = 'redux-action-create-ts/examples/WITH_ERROR',
  WITH_META = 'redux-action-create-ts/examples/WITH_META',
  WITH_PAYLOAD_ERROR = 'redux-action-create-ts/examples/WITH_PAYLOAD_ERROR',
  WITH_PAYLOAD_META = 'redux-action-create-ts/examples/WITH_PAYLOAD_META',
  WITH_ERROR_META = 'redux-action-create-ts/examples/WITH_ERROR_META',
  WITH_PAYLOAD_ERROR_META = 'redux-action-create-ts/examples/WITH_PAYLOAD_ERROR_META',
}

const actionCreators = {
  simple: () => createAction(ActionType.SIMPLE),
  withPayload: (payload1: string) => createAction(
    ActionType.WITH_PAYLOAD, { payload: { payload1 } }),
  withError: (errorDetails: string) => createAction(
    ActionType.WITH_ERROR, { error: true }),
  withMeta: () => createAction(
    ActionType.WITH_META,
    { meta: { meta1: 'foo' } }),
  withPayloadAndError: (payload2: string) => createAction(
    ActionType.WITH_PAYLOAD_ERROR,
    { error: true, payload: { payload2 } }
  ),
  withPayloadAndMeta: (payload3: string) => createAction(
    ActionType.WITH_PAYLOAD_META,
    { payload: { payload3 }, meta: { meta2: 'bar' } }
  ),
  withErrorAndMeta: () => createAction(
    ActionType.WITH_ERROR_META,
    { error: true, meta: { meta3: 'baz' } }
  ),
  withAllOptions: (payload4: string) => createAction(
    ActionType.WITH_PAYLOAD_ERROR_META,
    { error: true, payload: { payload4 }, meta: { meta4: 'qux' } }
  )
}


type ExampleAction = ActionsUnion<typeof actionCreators>


const exampleReducer = (
  state: ExampleState,
  action: ExampleAction
) => {
  switch (action.type) {
    case ActionType.SIMPLE:
      return state
    case ActionType.WITH_PAYLOAD:
      return {
        ...state,
        payload: action.payload.payload1
      }
    case ActionType.WITH_ERROR:
      return {
        ...state,
        error: action.error
      }
    case ActionType.WITH_META:
      return {
        ...state,
        meta: action.meta.meta1
      }
    case ActionType.WITH_PAYLOAD_ERROR:
      return {
        ...state,
        payload: action.payload.payload2
      }
    case ActionType.WITH_PAYLOAD_META:
      return {
        ...state,
        payload: action.payload.payload3,
        meta: action.meta.meta2
      }
    case ActionType.WITH_ERROR_META:
      return {
        ...state,
        error: action.error,
        meta: action.meta.meta3
      }
    case ActionType.WITH_PAYLOAD_ERROR_META:
      return {
        ...state,
        error: action.error,
        payload: action.payload.payload4,
        meta: action.meta.meta4
      }
  }
}


interface ExampleState {
  error: boolean,
  payload: string,
  meta: string
}