import notify from 'app/common/services/notify'
import { AuthResponse } from 'app/common/types'

export const loadLocalUserData = (data: AuthResponse) => {
  const { accessToken, email, name } = data

  const userData = JSON.stringify({
    name,
    email,
    token: accessToken,
  })

  localStorage.setItem('user', userData)
  window.dispatchEvent(new Event("storage"))
}

export const clearLocalUserData = () => {
  notify.info('Logged out')
  localStorage.removeItem('user')
  window.dispatchEvent(new Event("storage"))
}