import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LandingPage from '../../components/LandingPage';

configure({ adapter: new Adapter() });

it('renders LandingPage component correctly', () => {
  const landing = shallow(<LandingPage />);
  expect(landing).toMatchSnapshot();
});
