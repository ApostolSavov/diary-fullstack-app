import { AuthResponse } from 'app/common/types'

export const loadUser = (data: AuthResponse) => {
  const { accessToken, email, name } = data

  const userData = JSON.stringify({
    name,
    email,
    token: accessToken,
  })

  localStorage.setItem('user', userData)
  window.dispatchEvent(new Event("storage"))
}