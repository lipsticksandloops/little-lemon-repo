import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

global.fetchAPI = jest.fn(() => ["17:00", "18:00", "19:00"]);
global.submitAPI = jest.fn(() => true);

global.alert = jest.fn();

test("renders BookingForm component", () => {
  const mockFormData = {
    firstName: "",
    lastName: "",
    email: "",
    rememberMe: false,
    adults: 1,
    children: 0,
    date: "",
    time: "",
    occasion: "",
    specialRequests: "",
  };
  const mockAvailableTimes = ["17:00", "18:00", "19:00"];

  render(
    <BookingForm
      formData={mockFormData}
      handleChange={jest.fn()}
      handleSubmit={jest.fn()}
      handleClear={jest.fn()}
      availableTimes={mockAvailableTimes}
    />
  );

  // Test to check if the form is rendered
  const formElement = screen.getByTestId("booking-form");
  expect(formElement).toBeInTheDocument();

  // Test to check if the "Booking Details" heading is rendered
  const heading = screen.getByText(/Booking Details/i);
  expect(heading).toBeInTheDocument();

  // Test to check if the first name input is rendered
  const firstNameInput = screen.getByTestId("first-name-input");
  expect(firstNameInput).toBeInTheDocument();

  // Test to check if the submit button is rendered
  const submitButton = screen.getByTestId("submit-button");
  expect(submitButton).toBeInTheDocument();
});

test("handles increment and decrement for adults and children", () => {
  const mockFormData = {
    adults: 1,
    children: 1,
  };
  const mockHandleChange = jest.fn();

  render(
    <BookingForm
      formData={mockFormData}
      handleChange={mockHandleChange}
      handleSubmit={jest.fn()}
      handleClear={jest.fn()}
      availableTimes={[]}
    />
  );

  // Test to check if incrementing adults is working
  const increaseAdultsButton = screen.getByTestId("increase-adults-button");
  fireEvent.click(increaseAdultsButton);
  expect(mockHandleChange).toHaveBeenCalledWith({
    target: { name: "adults", value: 2 },
  });

  // Test to check if decrementing children is working
  const decreaseChildrenButton = screen.getByTestId("decrease-children-button");
  fireEvent.click(decreaseChildrenButton);
  expect(mockHandleChange).toHaveBeenCalledWith({
    target: { name: "children", value: 0 },
  });
});

test("submits the form when the submit button is clicked", () => {
  const mockFormData = {
    firstName: "Jane",
    lastName: "Doe",
    email: "jane.doe@example.com",
    rememberMe: true,
    adults: 2,
    children: 1,
    date: "2023-10-01",
    time: "18:00",
    occasion: "birthday",
    specialRequests: "No nuts, please",
  };
  const mockHandleSubmit = jest.fn((e) => e.preventDefault());

  render(
    <BookingForm
      formData={mockFormData}
      handleChange={jest.fn()}
      handleSubmit={mockHandleSubmit}
      handleClear={jest.fn()}
      availableTimes={["17:00", "18:00", "19:00"]}
    />
  );

  // Trigger the form's submit event
  const formElement = screen.getByTestId("booking-form");
  fireEvent.submit(formElement);

  // Check if the handleSubmit was called
  expect(mockHandleSubmit).toHaveBeenCalled();

  // Check if window.alert was called with the correct message
  expect(global.alert).toHaveBeenCalledWith("Booking successful!");
});

test("updates available times when the date changes", () => {
  const mockFormData = {
    date: "2023-10-01",
  };
  const mockHandleChange = jest.fn();

  render(
    <BookingForm
      formData={mockFormData}
      handleChange={mockHandleChange}
      handleSubmit={jest.fn()}
      handleClear={jest.fn()}
    />
  );

  // Simulate a date change
  const dateInput = screen.getByTestId("date-input");
  fireEvent.change(dateInput, { target: { value: "2023-10-01" } });

  // Verify if the available times are updated
  const timeOptions = screen.getAllByTestId("time-option");
  expect(timeOptions.length).toBeGreaterThan(0);
});