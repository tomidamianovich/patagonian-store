import { render } from '@testing-library/react';
import ImagesRow from './ImagesRow';

it('Images Row renders without crashing', () => {

  const images = [
    {
      id: 1,
      title: "test1",
      url: "https://www.test1-url.com",
    },
    {
      id:2,
      title: "test2",
      url: "https://www.test2-url.com",
    }
  ]

  const component = () => render(
    <ImagesRow images={images} />
  );
  expect(component).toBeDefined();
});