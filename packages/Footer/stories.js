import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { specs, describe, it } from 'storybook-addon-specifications'
import { shallow, configure } from 'enzyme';
import Footer from './dist/index';

const { expect } = require('chai')

configure({ adapter: new Adapter() });

const stories = storiesOf('Footer', module);

const handleLink = (link) => {
  console.log(link)
}

const policyOpt = (opt) => {
  console.log(opt)
}

const links = {
  'Explore': ['Rivers', 'Fly Shops', 'Plan Trips', ],
  'Discover': ['About', , 'Events',  'Blog', 'Newsroom'],
  'Information for': ['Investors', 'Partners'],
  'Opportunity': ['Careers','Life @ fishtrax'],
  'Policy': ['Legal', 'Policies', 'Privacy', 'Cookies',],
  'Copyright': ['©2021 fishtrax LLC. All Rights Reserved']
}

const smallData = {
  copyright: 'Copyright 2021',
  name: 'fishtrax LLC',
  rights: 'All rights reserved'
}

stories.addDecorator(withKnobs);
stories.add('Tall Footer', () => {
  const story = <Footer handleLink={handleLink} policyOpt={policyOpt} links={links}/>;

  specs(() => describe('Footer', () => {
    it('Should have the fishtrax copyright label', () => {
      const output = shallow(story);
      expect(output.prop('links').Copyright).to.contain('©2021 fishtrax LLC. All Rights Reserved');
    });
  }));

  return story;
});

stories.add('Small Footer', () => {
  const story = <Footer content={smallData} size={'small'} />;

  return story;
});

