import { TextField, TextFieldProps } from '@mui/material'
import { UseFormRegisterReturn } from 'react-hook-form'


type Props = TextFieldProps & {
  registerInput?: () => UseFormRegisterReturn
}

const TextInput = (props: Props) => {
  const {
    variant = 'outlined',
    size = 'small',
    registerInput = () => ({}),
    ...restProps
  } = props

  return (
    <TextField
      {...restProps}
      {...registerInput()}
      variant={variant}
      size={size}
    />
  )
}

export default TextInput