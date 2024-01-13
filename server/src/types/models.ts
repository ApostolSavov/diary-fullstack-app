import { Document } from 'mongoose'

export type UserType = Document & {
  name: string
  email: string
  password: string
}

export type DiaryEntryType = Document & {
  title: string
  content: string
  imageUrl: string
  favouriteCount: number
  createdAt: string
  ownerId: string
}