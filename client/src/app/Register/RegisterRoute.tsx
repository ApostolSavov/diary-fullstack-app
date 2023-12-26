import { FormLabel } from '@mui/material'
import RegisterForm from 'app/Register/RegisterForm'
import RouteWrapper from 'app/common/components/RouteWrapper'
import { toClassName } from 'app/common/utils/toClassName'


const className = toClassName(
  'flex flex-col',
  'mx-auto sm:w-80 mt-20 p-2 gap-2'
)

const RegisterRoute = () => {

  return (
    <RouteWrapper>
      <div className={className}>
        <FormLabel>
          Create An Account
        </FormLabel>
        <RegisterForm />
      </div>
    </RouteWrapper >
  )
}

export default RegisterRoute