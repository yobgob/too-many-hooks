import type { Meta, StoryObj } from '@storybook/react'
import ContainerQuery from './ContainerQuery'
import CONTAINER_QUERY_CODE from './ContainerQuery.tsx?raw'

type ContainerQueryMeta = Meta<typeof ContainerQuery>

const meta: ContainerQueryMeta = {
  title: 'UseResizeObserver',
  component: ContainerQuery,
}
export default meta

export const containerQuery: StoryObj<ContainerQueryMeta> = {
  name: 'Container Query',
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: CONTAINER_QUERY_CODE, language: 'tsx' },
    },
  },
  render: args => <ContainerQuery {...args} />,
}
