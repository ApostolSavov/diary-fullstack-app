import DiaryEntry from 'models/DiaryEntry'
import { Entry } from 'types/diary'


const createEntry = async (data: Entry, ownerId: string) => {
  const { title, content, imageUrl = '' } = data

  const entry = new DiaryEntry({
    title,
    content,
    imageUrl,
    ownerId,
    createdAt: new Date().toISOString()
  })

  return await entry.save()
}

const diaryService = {
  createEntry
}

export default diaryService