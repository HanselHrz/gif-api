import { render } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("pruebas en el componente < GifExpertApp />", () => {
  test("Debe de hacer match con el snapshot ", () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });
});
