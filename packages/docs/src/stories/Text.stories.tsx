import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, sit eaque explicabo quis omnis, distinctio repellendus autem quisquam maiores quibusdam consectetur eius laboriosam similique iste. Provident minus sit quam veniam',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
