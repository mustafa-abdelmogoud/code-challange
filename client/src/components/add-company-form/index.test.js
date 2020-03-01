import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "../../App";

beforeEach(() => {
  const { getByText } = render(<App />);
  getByText(/Add company/i).click();
});

afterEach(cleanup);

test("renders company name field", () => {
  const { getByText } = render(<App />);
  const companyNameField = getByText(/Company name/i);
  expect(companyNameField).toBeInTheDocument();
});

test("renders Specialty field", () => {
  const { getByText } = render(<App />);
  const SpecialtyField = getByText(/Specialty/i);
  expect(SpecialtyField).toBeInTheDocument();
});

test("renders logo field", () => {
  const { getByText } = render(<App />);
  const logoField = getByText(/Logo URL/i);
  expect(logoField).toBeInTheDocument();
});

test("renders city field", () => {
  const { getByText } = render(<App />);
  const cityField = getByText(/City/i);
  expect(cityField).toBeInTheDocument();
});
