import { render, renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook ', () => { 
    test('Debe de retornar el estado inicial ', () => {
        const { result } = renderHook(() => useFetchGifs('mr. robot'));
        const { images, isLoading } = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('Debe de retornar un arreglo de imágenes y el loading en false ', async () => {
        const { result } = renderHook(() => useFetchGifs('robot'));
        await waitFor(
         ()=> expect(result.current.images.length).toBeGreaterThan(0)
        );
        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });

 });