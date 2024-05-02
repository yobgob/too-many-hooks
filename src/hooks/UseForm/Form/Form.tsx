import React from 'react'
import { Select } from '../../../common/components'
import Button from '../../../common/components/Button'
import useForm from '../useForm'

enum Title {
  MR,
  MRS,
  MISS,
  MS,
}

type FormData = {
  email: string
  name: string
  title: Title
  terms: boolean
}

const Form: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<FormData>()

  return (
    <div className="flex w-96 flex-col gap-4">
      <label className="block text-sm font-medium text-gray-900">
        Your email
        <input
          type="email"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
          placeholder="name@example.com"
          {...register('email', {
            isRequired: true,
            validate: ({ email }) => (email?.includes('@') ? null : 'Email must include an @'),
          })}
        />
      </label>
      {errors.email && <span className="text-red-800">{errors.email}</span>}
      <Select
        options={[
          { label: 'Mr', value: Title.MR },
          { label: 'Mrs', value: Title.MRS },
          { label: 'Miss', value: Title.MISS },
          { label: 'Ms', value: Title.MS },
        ]}
        placeholder="Title"
        {...register('title', { isRequired: true, refName: 'selectRef' })}
      />
      {errors.title && <span className="text-red-800">{errors.title}</span>}
      <label className="block text-sm font-medium text-gray-900">
        Your name
        <input
          type="name"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
          {...register('name', { isRequired: true })}
        />
      </label>
      {errors.name && <span className="text-red-800">{errors.name}</span>}
      <label className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        <input
          type="checkbox"
          {...register('terms', {
            isRequired: true,
            validate: ({ terms }) => (terms === false ? 'You must agree to the terms' : null),
          })}
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        />
        <span>I agree to the Terms of Service and Privacy Policy</span>
      </label>
      {errors.terms && <span className="text-red-800">{errors.terms}</span>}

      <div className="flex items-center gap-2">
        <Button onClick={() => handleSubmit({ onSubmit: data => console.log('submitted', data) })}>
          Save
        </Button>
        {/* {hasBegun &&
          (hasUnsavedChanges ? (
            <div className="text-orange-500">&#9888; Unsaved changes</div>
          ) : (
            <div className="text-green-500">&#10003; Saved</div>
          ))} */}
      </div>
    </div>
  )
}

export default Form
