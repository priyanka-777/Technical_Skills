import Card from '../Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    footer: { control: 'text' },
  },
};

const Template = (args) => <Card {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: 'Card Title',
  description: 'This is a description.',
  footer: 'Card Footer',
};
