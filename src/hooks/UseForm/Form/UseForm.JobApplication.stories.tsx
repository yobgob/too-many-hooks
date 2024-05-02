import { Meta, StoryObj } from '@storybook/react'
import JobApplication from './JobApplication'
import JOB_APPLICATION_CODE from './JobApplication.tsx?raw'

type FormMeta = Meta<typeof JobApplication>

export default {
  title: 'useForm/Job Application',
  component: JobApplication,
} satisfies FormMeta

export const form: StoryObj<FormMeta> = {
  name: 'Job Application',
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: JOB_APPLICATION_CODE, language: 'tsx' },
    },
  },
  render: args => <JobApplication {...args} />,
}
