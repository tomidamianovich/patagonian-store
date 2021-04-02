import { render } from '@testing-library/react';
import LoadingSpinner from './LoadingSpinner';

it('Loading Spinner renders without crashing', () => {
  const component = () => render(
    <LoadingSpinner isLoading={false} />
  );
  expect(component).toBeDefined();
});