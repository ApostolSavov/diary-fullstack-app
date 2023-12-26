import { Request, Router } from 'express'
import { login, register } from 'services/authService'
import { AuthReqBody } from 'types/auth'
import { parseError } from 'utils/utils'


const router = Router()

router.post('/register', async (req: Request<{}, {}, AuthReqBody>, res) => {
  const { email, password, name } = req.body

  try {
    const userData = await register(email, name, password)

    res.json(userData)
  } catch (err) {
    const errMsg = parseError(err)
    res.status(err.status || 400).json({ msg: errMsg })
  }
})

router.post('/login', async (req: Request<{}, {}, AuthReqBody>, res) => {
  const { email, password } = req.body

  try {
    const userData = await login(email, password)

    res.json(userData)
  } catch (err) {
    const errMsg = parseError(err)
    res.status(err.status || 400).json({ msg: errMsg })
  }
})

export default router