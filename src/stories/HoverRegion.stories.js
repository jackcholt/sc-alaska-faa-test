import React from 'react';

import HoverRegion from "../components/HoverRegion"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Alaska FAA Drill/Hover Region',
  component: HoverRegion,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <HoverRegion {...args} />

export const Airway = Template.bind({});
Airway.args = {
  left: 30,
  top: 10,
  width: 110,
  height: 100,
  label: "G10"
};

export const Navaid = Template.bind({})
Navaid.args = {
  left: 10,
  top: 10,
  width: 130,
  height: 110,
  label: "ENA"
};

export const Debug = Template.bind({})
Debug.args = {
  left: 20,
  top: 20,
  width: 130,
  height: 110,
  label: "DEBUG",
  debug: true
};