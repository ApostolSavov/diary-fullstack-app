import { useLoginUserMutation } from 'app/common/api/diaryApi'
import Button from 'app/common/components/Button'
import TextInput from 'app/common/components/TextInput'
import notify from 'app/common/services/notify'
import { QueryResult } from 'app/common/types'
import routes from 'app/routes'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'



const LoginForm = () => {
  const {
    register,
    handleSubmit,
  } = useForm()

  const [loginUser, { error, isError, isLoading, isSuccess }] = useLoginUserMutation<QueryResult>()
  const navigate = useNavigate()

  if (isError) {
    notify.error(`An error occurred: ${error.msg || 'unknown error'}`)
  }
  if (isSuccess) {
    notify.success('Successfully logged in!')
    navigate(routes.home)
  }

  return (
    <form
      onSubmit={handleSubmit((data) => loginUser(data))}
      className='flex flex-col gap-4'
    >
      <TextInput
        registerInput={() => register('email')}
        label="Email"
        placeholder='Please enter your email...'
        required
        type={'email'}
      />
      <TextInput
        registerInput={() => register('password')}
        label="Password"
        placeholder='Please enter your password...'
        type='password'
        required
      />
      <Button
        type={'submit'}
        disabled={isLoading}
      >
        Login
      </Button>


    </form>
  )
}

export default LoginForm