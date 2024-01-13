import { FormLabel } from '@mui/material'
import RouteWrapper from 'app/common/components/RouteWrapper'
import { toClassName } from 'app/common/utils/toClassName'
import CreateEntryForm from 'app/diaryEntries/CreateEntry/CreateEntryForm'
import DiaryRoute from 'app/diaryEntries/ViewEntries/DiaryRoute'

const className = toClassName(
  'flex flex-col',
  'mx-auto sm:w-80 mt-20 p-2 gap-2'
)

const CreateEntryRoute = () => {

  return (
    <RouteWrapper>
      <div className={className}>
        <FormLabel>
          Create a Diary Entry
        </FormLabel>
        <CreateEntryForm />
        <DiaryRoute />
      </div>
    </RouteWrapper>
  )
}

export default CreateEntryRoute