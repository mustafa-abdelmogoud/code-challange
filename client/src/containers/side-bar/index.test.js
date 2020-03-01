import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "../../App";

afterEach(cleanup);

test("renders search", () => {
  const { getByPlaceholderText } = render(<App />);
  const searchBar = getByPlaceholderText(/company name/i);
  expect(searchBar).toBeInTheDocument();
});
test("renders Filter by speciality ", () => {
  const { getByText } = render(<App />);
  const filterBySpeciality = getByText(/Filter by speciality/i);
  expect(filterBySpeciality).toBeInTheDocument();
});

test("renders Excavation Filter", () => {
  const { getByText } = render(<App />);
  const ExcavationFilter = getByText(/Excavation/i);
  expect(ExcavationFilter).toBeInTheDocument();
});

test("renders Plumbing Filter", () => {
  const { getByText } = render(<App />);
  const PlumbingFilter = getByText(/Plumbing/i);
  expect(PlumbingFilter).toBeInTheDocument();
});

test("renders Electrical Filter", () => {
  const { getByText } = render(<App />);
  const ElectricalFilter = getByText(/Electrical/i);
  expect(ElectricalFilter).toBeInTheDocument();
});

test("renders add company button", () => {
  const { getByText } = render(<App />);
  const addCompany = getByText(/Add company/i);
  expect(addCompany).toBeInTheDocument();
});
