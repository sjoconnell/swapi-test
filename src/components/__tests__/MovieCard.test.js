import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from '../MovieCard';

it('MovieCard renders correctly', () => {
  const component = shallow(<MovieCard />);
  expect(component).toMatchSnapshot();
});