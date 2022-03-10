import React from 'react';

import Map from "../components/Map"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Alaska FAA Drill/Map',
  component: Map,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Map {...args} />;

export const Forecast = Template.bind({});
Forecast.args = {
  src: "forecast_zones.png",
  hovers: [{top: "10px", left: "10px", label: "KEN"}],
};

export const Navaids = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Navaids.args = {
  src: "navaids_airways.png",
  hovers: [{top: "10px", left: "10px", label: "KEN"}],
};

export const Ranges = Template.bind({});
Ranges.args = {
  src: "ranges.png",
  hovers: [{top: "10px", left: "10px", label: "KEN"}],
};

export const Restricted = Template.bind({});
Restricted.args = {
  src: "restricted_moa.png",
  hovers: [{top: "10px", left: "10px", label: "KEN"}],
};
