import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "./App";

test("renders footer", () => {
  const { getByText } = render(<App />);
  const footerElement = getByText(
    /Cosuno ©2020 Created by Mustafa Abdelmogoud/i
  );
  expect(footerElement).toBeInTheDocument();
});
