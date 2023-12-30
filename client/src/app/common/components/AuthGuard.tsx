import notify from 'app/common/services/notify'
import routes from 'app/routes'
import { Navigate } from 'react-router-dom'

type Props = {
  children: JSX.Element
  isAuth: boolean
}

const AuthGuard = (props: Props) => {
  const { isAuth, children } = props

  if (!isAuth) {
    notify.info('You need to be logged-in')
    return <Navigate to={routes.login} />
  }

  return children
}

export default AuthGuard