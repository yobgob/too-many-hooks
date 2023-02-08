import React from 'react'
import { useFlag } from 'too-many-hooks'
import { Button } from '../../common/components'

const Form: React.FC = () => {
  const [hasUnsavedChanges, { flag: setUnsaved, unflag: setSaved }] = useFlag(false)
  const [hasBegun, { flag: setHasBegun }] = useFlag(false)
  const [hasAgreedToTerms, { unflag: resetTermsAgreement, toggle: toggleTermsAgreement }] =
    useFlag(false)

  const onChange = () => {
    setUnsaved()
    setHasBegun()
    resetTermsAgreement()
  }

  return (
    <div className="flex w-96 flex-col gap-4">
      <label className="block text-sm font-medium text-gray-900 dark:text-white">
        Your email
        <input
          type="email"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="name@example.com"
          onChange={onChange}
          required
        />
      </label>
      <label className="block text-sm font-medium text-gray-900 dark:text-white">
        Your name
        <input
          type="name"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          onChange={onChange}
          required
        />
      </label>
      <label className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        <input
          type="checkbox"
          value=""
          onChange={toggleTermsAgreement}
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        />
        <span>I agree to the Terms of Service and Privacy Policy</span>
      </label>

      <div className="flex items-center gap-2">
        <Button onClick={setSaved} disabled={!hasAgreedToTerms}>
          Save
        </Button>
        {hasBegun &&
          (hasUnsavedChanges ? (
            <div className="text-orange-500">&#9888; Unsaved changes</div>
          ) : (
            <div className="text-green-500">&#10003; Saved</div>
          ))}
      </div>
    </div>
  )
}

export default Form
