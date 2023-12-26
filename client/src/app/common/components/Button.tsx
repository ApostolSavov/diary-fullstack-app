import { ButtonProps, Button as MuiButton } from '@mui/material'
import { CSSProperties } from 'react'


type Props = ButtonProps & {
  styles?: CSSProperties
}

const defaultStyles = {
  color: 'white'
}

const Button = (props: Props) => {
  const {
    variant = 'contained',
    styles = defaultStyles,
    ...restProps
  } = props

  return (
    <MuiButton
      {...restProps}
      variant={variant}
      sx={styles}
    />
  )
}

export default Button