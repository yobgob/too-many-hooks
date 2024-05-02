import React from 'react'
import { Select } from '../../../common/components'
import Button from '../../../common/components/Button'
import useForm from '../useForm'

enum Title {
  Mr = 'MR',
  Mrs = 'MRS',
  Miss = 'MISS',
  Ms = 'MS',
}

export type ApplicationFormData = {
  email: string
  title: Title
  name: string
  startDate: Date
  expectedSalary: number
  terms: boolean
}

export type ApplicationErrors = Partial<{ [Key in keyof ApplicationFormData]: string | null }>

interface Props {
  onSubmit: (data: ApplicationFormData) => void
  onError: (data: ApplicationErrors) => void
}

const JobApplication: React.FC<Props> = ({ onSubmit, onError }) => {
  const { register, errors, touched, changed, handleSubmit } = useForm<ApplicationFormData>()
  const hasBegun = Object.values(touched).some(hasBeenTouched => hasBeenTouched)
  const hasChangedAnyValue = Object.values(changed).some(hasBeenChanged => hasBeenChanged)

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
          { label: 'Mr', value: Title.Mr },
          { label: 'Mrs', value: Title.Mrs },
          { label: 'Miss', value: Title.Miss },
          { label: 'Ms', value: Title.Ms },
        ]}
        placeholder="Title"
        {...register('title', { isRequired: true, refName: 'selectRef' })}
      />
      {errors.title && <span className="text-red-800">{errors.title}</span>}
      <label className="block text-sm font-medium text-gray-900">
        Your name
        <input
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
          {...register('name', { isRequired: true })}
        />
      </label>
      {errors.name && <span className="text-red-800">{errors.name}</span>}
      <label className="block text-sm font-medium text-gray-900">
        Available start date
        <input
          type="date"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
          {...register('startDate', {
            isRequired: true,
            validate: ({ startDate }) =>
              startDate < new Date(Date.now()) ? 'Date must be in the future' : null,
          })}
        />
      </label>
      {errors.startDate && <span className="text-red-800">{errors.startDate}</span>}
      <label className="block text-sm font-medium text-gray-900">
        Expected salary
        <input
          type="number"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
          {...register('expectedSalary', {
            isRequired: true,
            validate: ({ expectedSalary }) =>
              expectedSalary < 0 || expectedSalary > 1000000
                ? 'Please enter a number between $0 and $1,000,000'
                : null,
          })}
        />
      </label>
      {errors.expectedSalary && <span className="text-red-800">{errors.expectedSalary}</span>}
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
        <Button
          onClick={() =>
            handleSubmit({
              onSubmit,
              onError,
            })
          }
        >
          Save
        </Button>
        {hasBegun &&
          (hasChangedAnyValue ? (
            <div className="text-orange-500">&#9888; Unsaved changes</div>
          ) : (
            <div className="text-green-500">&#10003; Saved</div>
          ))}
      </div>
    </div>
  )
}

export default JobApplication
