import { Error } from 'mongoose'


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


export {
  parseError,
}
