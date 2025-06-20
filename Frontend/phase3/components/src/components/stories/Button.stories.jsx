import Button from '../Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'radio', options: ['primary', 'secondary'] },
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: 'Primary', variant: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { label: 'Secondary', variant: 'secondary' };
