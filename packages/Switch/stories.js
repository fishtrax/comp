import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Adapter from 'enzyme-adapter-react-16';
import SwitchButton from './dist/index';
import { mount, configure } from 'enzyme';
import index from './src';


const { expect } = require('chai')


configure({ adapter: new Adapter() });

const stories = storiesOf('Switch', module);

const confirm = (prop) => {
    alert('yea')
  }

stories.add('Switch', () => {
  return (
    <div style={{ width: '100%' }}>
      <SwitchButton />
    </div>
  );
});