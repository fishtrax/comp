import 'jest-styled-components';

import React from 'react';
import { isPortal, isFragment } from 'react-is';
import { shallow } from 'enzyme';

import HelloWorld from '../HelloWorld.component';

describe('component <HelloWorld />', () => {
  it('should render correctly', () => {
    shallow(<HelloWorld />);
  });

  it('is not type Portal', () => {
    expect(isPortal(<HelloWorld />)).toBeFalsy();
  });

  it('is not type Fragment', () => {
    expect(isFragment(<HelloWorld />)).toBeFalsy();
  });
});
