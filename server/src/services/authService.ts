import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from 'models/User'
import { UserType } from 'types/models'


const createToken = (user: UserType) => {
  const token = jwt.sign(
    {
      _id: user._id,
      email: user.email
    },
    process.env.TOKEN_SECRET as string,
  )

  return token
}

const register = async (email: string, name: string, password: string) => {
  const existing = await User.findOne({ email })

  if (existing) {
    throw new Error('Email is already taken.')
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = new User({
    email,
    password: hashedPassword,
    name
  })

  await user.save()

  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    accessToken: createToken(user)
  }
}

const login = async (email: string, password: string) => {
  const user = await User.findOne({ email })

  if (!user) {
    const error = new Error('Incorrect email or password.')
    error['status'] = 401
    throw error
  }

  const match = await bcrypt.compare(password, user.password)

  if (!match) {
    const error = new Error('Incorrect email or password.')
    error['status'] = 401
    throw error
  }

  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    accessToken: createToken(user)
  }
}

export {
  register,
  login
}