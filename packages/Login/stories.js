import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { specs, describe, it } from 'storybook-addon-specifications'
import { shallow, configure } from 'enzyme';
import Login from './dist/index';

const { expect } = require('chai')


configure({ adapter: new Adapter() });

const stories = storiesOf('Login', module);

const linkOptions = (prop) => {
  console.log(prop)
}


stories.addDecorator(withKnobs);
stories.add('with a spec test', () => {

  const onSubmit = (user, pass) => {
    console.log('Username: ', user)
    console.log('Password: ', pass)
  }

  specs(() => describe('Login', () => {
    it('Should have the New to fishtrax? link', () => {
      const output = shallow(<Login />);
      expect(output.dive().children().hostNodes().prop('children')).to.equal('Welcome');
    });
  }));

  return (<Login onSubmit={onSubmit} linkOptions={linkOptions} />)
});
