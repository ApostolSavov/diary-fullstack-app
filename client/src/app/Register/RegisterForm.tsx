import { useRegisterUserMutation } from 'app/common/api/diaryApi'
import Button from 'app/common/components/Button'
import TextInput from 'app/common/components/TextInput'
import notify from 'app/common/services/notify'
import { QueryResult } from 'app/common/types'
import routes from 'app/routes'
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"


const RegisterForm = () => {
  const {
    register,
    handleSubmit,
  } = useForm()

  const [registerUser, { error, isError, isLoading, isSuccess }] = useRegisterUserMutation<QueryResult>()
  const navigate = useNavigate()

  if (isError) {
    notify.error(`An error occurred: ${error.msg || 'unknown error'}`)
  }
  if (isSuccess) {
    notify.success('Successfully registered!')
    navigate(routes.home)
  }

  return (
    <form
      onSubmit={handleSubmit((data) => registerUser(data))}
      className='flex flex-col gap-4'
    >
      <TextInput
        registerInput={() => register('email')}
        label="Email"
        placeholder='Please enter your email...'
        required
      />
      <TextInput
        registerInput={() => register('name')}
        label="Name"
        placeholder='Please enter your name...'
        required
      />
      <TextInput
        registerInput={() => register('password')}
        label="Password"
        placeholder='Please enter a password...'
        type='password'
        required
      />
      <Button
        type={'submit'}
        disabled={isLoading}
      >
        Register
      </Button>


    </form>
  )
}

export default RegisterForm