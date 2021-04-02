import { render } from '@testing-library/react';
import PersonalPage from './PersonalPage';

it('Personal Page renders without crashing', () => {
  const component = () => render(
    <PersonalPage />
  );
  expect(component).toBeDefined();
});