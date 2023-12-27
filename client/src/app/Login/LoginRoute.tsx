import { FormLabel } from '@mui/material'
import LoginForm from 'app/Login/LoginForm'
import RouteWrapper from 'app/common/components/RouteWrapper'
import { toClassName } from 'app/common/utils/toClassName'

const className = toClassName(
  'flex flex-col',
  'mx-auto sm:w-80 mt-20 p-2 gap-2'
)

const LoginRoute = () => {

  return (
    <RouteWrapper>
      <div className={className}>
        <FormLabel>
          Log Into Your Account
        </FormLabel>
        <LoginForm />
      </div>
    </RouteWrapper>
  )
}

export default LoginRoute