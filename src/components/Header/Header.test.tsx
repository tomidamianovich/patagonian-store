import { render } from '@testing-library/react';
import Header from './Header';
import { MENU_OPTIONS } from '../../utils/constants'

it('Header renders without crashing', () => {
  const component = () => render(
    <Header options={MENU_OPTIONS} appName={'test'} />
  );
  expect(component).toBeDefined();
});