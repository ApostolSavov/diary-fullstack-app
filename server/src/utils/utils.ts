import User from 'models/User'
import { Error } from 'mongoose'
import { Hash } from 'types/common'


const parseError = (error: Error) => {
  if (error instanceof Error.ValidationError) {
    return Object.values(error.errors)
      .map((err) => {
        if (err instanceof Error.ValidatorError) {
          return err.properties.message
        }
        return err.stringValue
      })
      .join(' \n')
  } else {
    return error.message
  }
}

const userExists = async (decodedToken: Hash | null | string) => {
  if (decodedToken && typeof decodedToken !== 'string') {
    return await User.findById(decodedToken._id)
  }
  return false
}

export {
  parseError,
  userExists
}
