import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem/>', () => {
    const title = 'Mario Bros';
    const url = 'https://localhost/mario.jpg';
  test('Debe de hacer match con el snapshot ', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  })
  test('Debe de mistrar la imagen con el url y el alt indicado ', () => {

    render(<GifItem title={title} url={url} />);
    expect(screen.getByRole('img').src).toBe(url);
    const {src, alt} = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);

  })

  test('Debe de mostrar el titulo en el componente ', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
    
  })
  
  
  
})