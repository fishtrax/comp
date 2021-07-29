import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { specs, describe, it } from 'storybook-addon-specifications'
import { shallow, configure } from 'enzyme';
import Cards from './dist/index';

const BUCKET = 'https://d3izp14dmtz9lq.cloudfront.net/web';

const { expect } = require('chai')

configure({ adapter: new Adapter() });

const stories = storiesOf('IconCards', module);

const selected = (type, action) => {
  console.log('selected', type, action)
}

const iconCards = [
  { type: 'restroom', title: 'Restroom' },
  { type: 'lodging', title: 'Lodging' },
  { type: 'flyShop', title: 'Fly Shop' },
  { type: 'hazard', title: 'Hazard' },
  { type: 'dam', title: 'Dam' },
  { type: 'campSite', title: 'Campsite' },
  { type: 'parking', title: 'Parking' },
  { type: 'bridge', title: 'Bridge' },
  { type: 'boatRamp', title: 'Boat Ramp' },
  { type: 'accessPoint', title: 'Access Point' },
  { type: 'miscellaneous', title: 'Miscellaneous' }
];

const widths = {
  'standard': '33%',
  'half page': '50%',
  'full page': '100%'
}

stories.addDecorator(withKnobs);
stories.add('Icon Cards', () => {
  const containerWidth = select('Outer Container Width', widths, widths['standard']);

  return (
    <Cards 
      content={iconCards} 
      selectedCard={selected}
      bodyWidth={containerWidth}
    />
  );
});
