import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Adapter from 'enzyme-adapter-react-16';
import CookieBanner from './dist/index';
import { mount, configure } from 'enzyme';
import index from './src';


const { expect } = require('chai')


configure({ adapter: new Adapter() });

const stories = storiesOf('Cookie Banner', module);

const confirm = (prop) => {
    alert('yea')
  }

stories.add('Cookie Banner', () => {
  return (
    <div style={{ width: '100%' }}>
      <CookieBanner click={confirm}/>
    </div>
  );
});