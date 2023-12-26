import { Schema, model } from 'mongoose'
import { UserType } from 'types/models'


const userSchema = new Schema<UserType>({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    requied: [true, 'Email is required'],
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  }
})

export default model<UserType>('User', userSchema)