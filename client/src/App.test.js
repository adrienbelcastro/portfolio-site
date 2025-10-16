import { render } from "@testing-library/react";
import App from "./App";

jest.mock("./pages/homepage/Homepage", () => () => <main className="homepage" />);

test("renders the application shell", () => {
  const { container } = render(<App />);

  expect(container.querySelector(".homepage")).toBeInTheDocument();
});
