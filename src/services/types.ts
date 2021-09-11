export type ApiResult<T> = 
| {state: 'loading'}
| {state: 'error', error: string}
| {state: 'loaded', data: T}