import { render } from '@testing-library/react';
import Products from './Products';

it('Products renders without crashing', () => {
  const component = () => render(
    <Products />
  );
  expect(component).toBeDefined();
});