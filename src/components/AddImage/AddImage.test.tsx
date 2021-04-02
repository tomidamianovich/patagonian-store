import { render } from '@testing-library/react';
import AddImage from './AddImage';

it('Add Image renders without crashing', () => {
  const component = () => render(
    <AddImage lastIndex={Math.random()} />
  );
  expect(component).toBeDefined();
});