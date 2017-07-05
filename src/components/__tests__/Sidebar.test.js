import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from '../Sidebar';

it('Sidebar renders correctly', () => {
  const component = shallow(<Sidebar />);
  expect(component).toMatchSnapshot();
});