export type QueryError = {
  msg?: string
}

export type QueryResult = {
  data: Hash
  error: QueryError
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
}