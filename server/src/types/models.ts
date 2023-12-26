import { Document } from 'mongoose'

export type UserType = Document & {
  name: string
  email: string
  password: string
}