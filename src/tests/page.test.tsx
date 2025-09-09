import {
  test,
  expect,
  describe,
} from "bun:test";
import { screen, render } from "@testing-library/react";

import Page from "../app/page";


describe("Page", () => {
  test("renders its content", () => {
    render(<Page />);

    const heading = screen.queryByRole("heading");

    expect(heading).toBeInTheDocument();
  });
});
