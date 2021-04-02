import { render } from '@testing-library/react';
import ImageGallery from './ImageGallery';

it('Image Gallery renders without crashing', () => {
  const component = () => render(
    <ImageGallery />
  );
  expect(component).toBeDefined();
});