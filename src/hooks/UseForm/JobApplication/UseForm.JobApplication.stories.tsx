import { action } from 'storybook/actions'
import preview from '../../../../.storybook/preview'
import USE_FORM_DOCS from '../use-form-docs'
import type { Errors } from '../useForm'
import type { ApplicationFormData } from './JobApplication'
import JobApplication from './JobApplication'
import JOB_APPLICATION_CODE from './JobApplication.tsx?raw'

const meta = preview.meta({
  title: 'useForm',
  component: JobApplication,
  parameters: {
    layout: 'centered',
    docs: USE_FORM_DOCS,
  },
})

export default meta

export const JobApplication_Example = meta.story({
  args: {
    onSubmit: (data: ApplicationFormData) => {
      action('onSubmit')(data)
      return data
    },
    onError: (errors: Errors<ApplicationFormData>) => {
      action('onError')(errors)
      return errors
    },
  },
  name: 'Job Application',
  parameters: {
    docs: {
      source: { code: JOB_APPLICATION_CODE, language: 'tsx' },
    },
  },
})
