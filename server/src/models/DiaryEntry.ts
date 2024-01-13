import { Schema, model } from 'mongoose'
import { DiaryEntryType } from 'types/models'


const diaryEntrySchema = new Schema<DiaryEntryType>({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  content: {
    type: String,
    required: [true, 'Content is required']
  },
  imageUrl: {
    type: String,
    default: ''
  },
  favouriteCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: String,
  },
  ownerId: {
    type: String
  }
})

export default model<DiaryEntryType>('DiaryEntry', diaryEntrySchema)