import React from 'react';
import { shallow } from 'enzyme';
import Character from '../Character';

it('Character renders correctly', () => {
  const component = shallow(<Character />);
  expect(component).toMatchSnapshot();
});