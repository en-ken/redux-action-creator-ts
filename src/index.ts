// optional values of FSA
interface FSAOptions<Payload, Meta> {
  payload?: Payload,
  error?: boolean,
  meta?: Meta,
}

// type only action
export interface SimpleAction<Type extends string> {
  type: Type
}

// flux standard action
export type FSA<Type extends string, Payload, Meta> = SimpleAction<Type> & FSAOptions<Payload, Meta>


// type definition of function for SimpleAction
export function createAction<Type extends string>(type: Type): SimpleAction<Type>

// type definition of function for FSA
export function createAction<Type extends string, Payload, Meta>(
  type: Type,
  options: FSAOptions<Payload, Meta>
): FSA<Type, Payload, Meta>

// implementation of createAction
export function createAction<Type, Payload, Meta>(
  type: Type,
  options?: FSAOptions<Payload, Meta>) {
  return options ? { type, ...options } : { type }
}

// union type of actions(SimpleAction or FSA)
// exclude ThunkAction( (...args: any[]) => Promise<void> )
export type ActionsUnion<
  A extends { [actionCreator: string]: (...args: any[]) => any }
  > = Exclude<ReturnType<A[keyof A]>, (...args: any[]) => Promise<void>>
