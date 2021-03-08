import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { cleanup } from '@testing-library/react';
import Profile from '../../layouts/Profile';

configure({ adapter: new Adapter() });

afterEach(cleanup);

const mockStore = configureMockStore();
const store = mockStore({});

it('should render without throwing an error', () => {
  const profile = shallow(
    <Provider store={store}>
      <Profile />
    </Provider>,
  );
  expect(profile).toMatchSnapshot();
});
