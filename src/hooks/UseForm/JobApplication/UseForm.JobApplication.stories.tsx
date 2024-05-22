import { Meta, StoryObj } from '@storybook/react'
import { Errors } from '../useForm'
import JobApplication, { ApplicationFormData } from './JobApplication'
import JOB_APPLICATION_CODE from './JobApplication.tsx?raw'

type FormMeta = Meta<typeof JobApplication>

export default {
  title: 'useForm/Job Application',
  component: JobApplication,
} satisfies FormMeta

export const jobApplication: StoryObj<FormMeta> = {
  name: 'Job Application',
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: JOB_APPLICATION_CODE, language: 'tsx' },
    },
  },
  argTypes: {
    onSubmit: {
      action: (data: ApplicationFormData) => data,
    },
    onError: {
      action: (errors: Errors<ApplicationFormData>) => errors,
    },
  },
  render: args => <JobApplication {...args} />,
}
