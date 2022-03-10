import React from 'react';

import MapPage from '../components/MapPage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Alaska FAA Drill/MapPage',
  component: MapPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <MapPage {...args} />;

export const Navaids = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Navaids.args = {
  primary: true,
  label: 'Button',
};

export const Restricted = Template.bind({});
Restricted.args = {
  label: 'Button',
};

export const Forecast = Template.bind({});
Forecast.args = {
  size: 'large',
  label: 'Button',
};

export const Ranges = Template.bind({});
Ranges.args = {
  size: 'small',
  label: 'Button',
};
