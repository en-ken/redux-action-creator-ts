
// Action which has no payloads
export interface Action<Type extends string> {
  type: Type,
  error?: boolean
  meta?: Object
}


// Action which has a payload
export interface ActionWithPayload<Type extends string, Payload> {
  type: Type
  payload: Payload
  error?: boolean
  meta?: Object
}


// function definition for Action
export function createAction<Type extends string>(type: Type): Action<Type>

// function definition for ActionWithPayload
export function createAction<Type extends string, Payload>(
  type: Type,
  payload: Payload
): ActionWithPayload<Type, Payload>

// implemantation of createAction
export function createAction<Type, Payload>(
  type: Type,
  payload?: Payload,
  error?: boolean) {
  return payload ? { type, payload } : { type }
}

// union definition of actions(Action or ActionWithPayload)
// exclude ThunkAction( (...args: any[]) => Promise<void> )
export type ActionsUnion<
  A extends { [actionCreator: string]: (...args: any[]) => any }
  > = Exclude<ReturnType<A[keyof A]>, (...args: any[]) => Promise<void>>
