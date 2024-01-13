import { Request, Router } from 'express'
import { decode } from 'jsonwebtoken'
import diaryService from 'services/diaryService'
import { Entry } from 'types/diary'
import { parseError, userExists } from 'utils/utils'


const router = Router()

router.post('/create', async (req: Request<{}, {}, Entry>, res) => {
  const { title, content, imageUrl } = req.body

  try {
    const token = req.headers.authorization || ''
    const decodedToken = decode(token)

    const foundUser = await userExists(decodedToken)

    if (!foundUser) {
      throw new Error('User does not exist')
    }

    const diaryEntryData = await diaryService.createEntry(
      { title, content, imageUrl },
      foundUser._id
    )
    res.json(diaryEntryData)
  } catch (err) {
    const errMsg = parseError(err)
    res.status(err.status || 400).json({ msg: errMsg })
  }
})

export default router