import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import House from '../../components/House';

afterEach(cleanup);

const houseNew = {
  id: 1,
  image: 'https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg',
};

const houseMount = (
  <MemoryRouter>
    <House house={houseNew} />
  </MemoryRouter>
);

it('renders item component correctly', () => {
  const house = renderer.create(houseMount).toJSON();
  expect(house).toMatchSnapshot();
});

it('renders a link to see house details', () => {
  const { getByTestId } = render(houseMount);
  const link = getByTestId('house-link');
  expect(link.innerHTML).toMatch('See Details');
});
