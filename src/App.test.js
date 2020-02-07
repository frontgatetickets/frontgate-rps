import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("it renders the title", () => {
  const { getByText } = render(<App />);
  getByText("Rock Paper Scissors");
});
