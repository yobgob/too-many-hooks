import type React from 'react'
import { Select } from '../../../storybook-common/components'
import Button from '../../../storybook-common/components/Button'
import type { Errors } from '../useForm';
import useForm from '../useForm'
import { buildOverriddenRegister } from '../useForm/utils'

enum Title {
  Mr = 'MR',
  Mrs = 'MRS',
  Miss = 'MISS',
  Ms = 'MS',
}

enum Industry {
  Agriculture = 'AGRICULTURE',
  Finance = 'FINANCE',
  Retail = 'RETAIL',
  Tech = 'TECH',
}

export type ApplicationFormData = {
  email: string
  title: Title
  name: string
  previousIndustries: string[]
  startDate: Date
  expectedSalary: number
  hasAgreedToTerms: boolean
  coverLetter: string
}

interface Props {
  onSubmit: (data: ApplicationFormData) => void
  onError: (data: Errors<ApplicationFormData>) => void
}

const JobApplication: React.FC<Props> = ({ onSubmit, onError }) => {
  const { register, errors, hasBegun, hasChangedWithoutSubmit, handleSubmit } =
    useForm<ApplicationFormData>()
  const registerSelect = buildOverriddenRegister(register, { ref: 'selectRef' })

  return (
    <div className="flex w-96 flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label className="block text-sm font-medium text-gray-900">
          Your email
          <input
            type="email"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="name@example.com"
            {...register('email', {
              isRequired: true,
              validate: email => (email.includes('@') ? null : 'Email must include an @'),
            })}
          />
        </label>
        {errors?.email && <span className="text-red-800">{errors.email}</span>}
      </div>
      <div className="flex flex-col gap-1">
        <Select
          options={[
            { label: 'Mr', value: Title.Mr },
            { label: 'Mrs', value: Title.Mrs },
            { label: 'Miss', value: Title.Miss },
            { label: 'Ms', value: Title.Ms },
          ]}
          placeholder="Title"
          {...registerSelect('title', { isRequired: true })}
        />
        {errors?.title && <span className="text-red-800">{errors.title}</span>}
      </div>
      <div className="flex flex-col gap-1">
        <label className="block text-sm font-medium text-gray-900">
          Your name
          <input
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            {...register('name', { isRequired: true })}
          />
        </label>
        {errors?.name && <span className="text-red-800">{errors.name}</span>}
      </div>
      <div className="flex flex-col gap-1">
        <label className="block text-sm font-medium text-gray-900">
          Previous industries
          <select
            multiple
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            {...register('previousIndustries', { isRequired: true })}
          >
            <option label="Agriculture" value={Industry.Agriculture} />
            <option label="Finance" value={Industry.Finance} />
            <option label="Retail" value={Industry.Retail} />
            <option label="Tech" value={Industry.Tech} />
          </select>
        </label>
        {errors?.previousIndustries && (
          <span className="text-red-800">{errors.previousIndustries}</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label className="block text-sm font-medium text-gray-900">
          Available start date
          <input
            type="date"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            {...register('startDate', {
              isRequired: true,
              validate: startDate =>
                startDate < new Date(Date.now()) ? 'Date must be in the future' : null,
            })}
          />
        </label>
        {errors?.startDate && <span className="text-red-800">{errors.startDate}</span>}
      </div>
      <div className="flex flex-col gap-1">
        <label className="block text-sm font-medium text-gray-900">
          Expected salary
          <input
            type="number"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            {...register('expectedSalary', {
              isRequired: true,
              validate: expectedSalary =>
                expectedSalary < 0 || expectedSalary > 1000000
                  ? 'Please enter a number between $0 and $1,000,000'
                  : null,
            })}
          />
        </label>
        {errors?.expectedSalary && <span className="text-red-800">{errors.expectedSalary}</span>}
      </div>
      <div className="flex flex-col gap-1">
        <label className="block text-sm font-medium text-gray-900">
          Cover letter
          <textarea
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            {...register('coverLetter')}
          />
        </label>
        {errors?.coverLetter && <span className="text-red-800">{errors.coverLetter}</span>}
      </div>
      <div className="flex flex-col gap-1">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          <input
            type="checkbox"
            {...register('hasAgreedToTerms', {
              isRequired: true,
              validate: hasAgreedToTerms =>
                hasAgreedToTerms === false ? 'You must agree to the terms' : null,
            })}
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          />
          <span>I agree to the Terms of Service and Privacy Policy</span>
        </label>
        {errors?.hasAgreedToTerms && (
          <span className="text-red-800">{errors.hasAgreedToTerms}</span>
        )}
      </div>

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
          (hasChangedWithoutSubmit ? (
            <div className="text-orange-500">&#9888; Unsaved changes</div>
          ) : (
            <div className="text-green-500">&#10003; Saved</div>
          ))}
      </div>
    </div>
  )
}

export default JobApplication
