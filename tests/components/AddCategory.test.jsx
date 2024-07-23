import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en el componente <AddCategory/>', () => {

  test('Debe de cambiar el valor de la caja de texto', () => {
    render(<AddCategory onNewCategory={ () => {} }/>);
    const input = screen.getByRole('textbox');
    fireEvent.input(input, {target:{value:'Saitama'}})//Disparador de evento
    expect(input.value).toBe('Saitama'); //El valor que se espera
  })

  test ('Debe de llamar si onNewCategory si el input tiene unv valor', () => {
    const inputValue = 'Mr. Robot';
    const onNewCategory = jest.fn(); // Mock de la función
    render(<AddCategory onNewCategory={onNewCategory}/>);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, {target:{value: inputValue}});
    fireEvent.submit(form);
    screen.debug();

    expect(input.value).toBe('');

    expect(onNewCategory).toHaveBeenCalled(); // que se haya llamado
    expect(onNewCategory).toHaveBeenCalledTimes(1); // una sola vez
    expect(onNewCategory).toHaveBeenCalledWith(inputValue); // con un string
  
  })

  test('No debe de llamar el onNewCategory si el inpot esta vacio', () => {
    const onNewCategory = jest.fn(); // Mock de la función
    render(<AddCategory onNewCategory={onNewCategory}/>);
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    expect(onNewCategory).toHaveBeenCalledTimes(0); // una sola vez
    
  })
  
})
