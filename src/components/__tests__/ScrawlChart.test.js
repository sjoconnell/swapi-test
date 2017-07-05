import React from 'react';
import { shallow } from 'enzyme';
import ScrawlChart from '../ScrawlChart';

it('ScrawlChart renders correctly', () => {
  const component = shallow(<ScrawlChart />);
  expect(component).toMatchSnapshot();
});