import React from 'react';
import { shallow } from 'enzyme';
import Movie from '../Movie';

it('Movie renders correctly', () => {
  const component = shallow(<Movie />);
  expect(component).toMatchSnapshot();
});