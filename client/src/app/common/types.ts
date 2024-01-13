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

export type AuthResponse = {
  _id: string
  name: string
  email: string
  accessToken: string
}

export type LocalUser = {
  name?: string
  email?: string
  token?: string
}