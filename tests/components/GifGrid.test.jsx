import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid/>", () => {
  const category = "mr. robot";
  test("Debe de mostrar el loading inicialmente ", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Loading..."));
    screen.debug();
  });

  test("Debe de mostrar items cuando se cargan imágenes useFetchGifs", async () => {
    const gif = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https://localhost/cualquier.jpg",
      },
      {
        id: "123",
        title: "Rick",
        url: "https://localhost/cualquier.jpg",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gif,
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(gif.length);
  });
});
