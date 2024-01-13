import { useCreateEntryMutation } from 'app/common/api/diaryApi'
import Button from 'app/common/components/Button'
import TextInput from 'app/common/components/TextInput'
import notify from 'app/common/services/notify'
import { QueryResult } from 'app/common/types'
import { useForm } from 'react-hook-form'



const CreateEntryForm = () => {
  const {
    register,
    handleSubmit,
  } = useForm()

  const [createEntry, { error, isError, isLoading, isSuccess }] = useCreateEntryMutation<QueryResult>()

  if (isError) {
    notify.error(`An error occurred: ${error.msg || 'unknown error'}`)
  }
  if (isSuccess) {
    notify.success('Successfully created diary entry!')
  }

  return (
    <form
      onSubmit={handleSubmit((data) => createEntry(data))}
      className='flex flex-col gap-4'
    >
      <TextInput
        registerInput={() => register('title')}
        label="Title"
        placeholder='Please enter a title...'
        required
        type={'title'}
      />

      <TextInput
        registerInput={() => register('content')}
        placeholder='Please fill in content...'
        required
        label={'Content'}
        multiline
        minRows={4}
      />
      <Button
        type={'submit'}
        disabled={isLoading}
      >
        Create Diary Entry
      </Button>


    </form>
  )
}

export default CreateEntryForm