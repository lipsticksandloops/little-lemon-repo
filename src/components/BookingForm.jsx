import React, { useReducer, useEffect } from "react";
import { initializeTimes, updateTimes } from "../reducers/timesReducer";
import "./styles.css";

export default function BookingForm({
  formData,
  handleChange,
  handleSubmit,
  handleClear,
}) {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  useEffect(() => {
    if (formData.date) {
      const times = window.fetchAPI(new Date(formData.date));
      dispatch({ type: "UPDATE_TIMES", payload: times });
    }
  }, [formData.date]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    handleSubmit(e);

    const isSubmitted = window.submitAPI(formData);

    if (isSubmitted) {
      alert("Booking successful!");
    } else {
      alert("Booking failed. Please try again.");
    }
  };

  const handleIncrement = (field) => {
    const value = formData[field];
    if (field === "adults" && value < 8) {
      handleChange({ target: { name: field, value: value + 1 } });
    } else if (field === "children" && value < 8) {
      handleChange({ target: { name: field, value: value + 1 } });
    }
  };

  const handleDecrement = (field) => {
    const value = formData[field];
    if (field === "adults" && value > 1) {
      handleChange({ target: { name: field, value: value - 1 } });
    } else if (field === "children" && value > 0) {
      handleChange({ target: { name: field, value: value - 1 } });
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="reservation-form" data-testid="booking-form">
      <h2 className="section-title">Booking Details</h2>
      <div className="name-group">
        <div>
          <label htmlFor="firstName" className="paragraph-text">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="input-field"
            aria-label="First Name"
            data-testid="first-name-input"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="paragraph-text">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="input-field"
            aria-label="Last Name"
            data-testid="last-name-input"
          />
        </div>
      </div>

      <div className="email-group">
        <label htmlFor="email" className="paragraph-text">Your Best Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input-field"
          aria-label="Email Address"
          data-testid="email-input"
        />
        <div className="checkbox-group">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
            aria-label="Remember Me"
            data-testid="remember-me-checkbox"
          />
          <label htmlFor="rememberMe" className="paragraph-text">Remember me</label>
        </div>
      </div>

      <h2 className="section-title">Reservation Details</h2>
      <div className="guests-occasion-group">
        <label htmlFor="Number-of-guests" className="paragraph-text">Select number of guests:</label>
        <div className="guests-group">
          <div>
            <label htmlFor="adults" className="paragraph-text">Adults:</label>
            <div className="number-input-group">
              <button
                type="button"
                onClick={() => handleDecrement("adults")}
                className="number-input-button"
                aria-label="Decrease Adults"
                data-testid="decrease-adults-button"
              >
                -
              </button>
              <input
                type="number"
                id="adults"
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                min="1"
                max="8"
                required
                className="input-field number-input"
                aria-label="Number of Adults"
                data-testid="adults-input"
              />
              <button
                type="button"
                onClick={() => handleIncrement("adults")}
                className="number-input-button"
                aria-label="Increase Adults"
                data-testid="increase-adults-button"
              >
                +
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="children" className="paragraph-text">Children:</label>
            <div className="number-input-group">
              <button
                type="button"
                onClick={() => handleDecrement("children")}
                className="number-input-button"
                aria-label="Decrease Children"
                data-testid="decrease-children-button"
              >
                -
              </button>
              <input
                type="number"
                id="children"
                name="children"
                value={formData.children}
                onChange={handleChange}
                min="0"
                max="8"
                required
                className="input-field number-input"
                aria-label="Number of Children"
                data-testid="children-input"
              />
              <button
                type="button"
                onClick={() => handleIncrement("children")}
                className="number-input-button"
                aria-label="Increase Children"
                data-testid="increase-children-button"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="date-time-group">
        <div>
          <label htmlFor="date" className="paragraph-text">Select Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="input-field"
            aria-label="Select Date"
            data-testid="date-input"
          />
        </div>
        <div>
          <label htmlFor="time" className="paragraph-text">Check Time Availability:</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="input-field"
            aria-label="Select Time"
            data-testid="time-select"
          >
            <option value="">Select a time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time} data-testid="time-option">
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="occasion" className="paragraph-text">Occasion:</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          className="input-field"
          aria-label="Select Occasion"
          data-testid="occasion-select"
        >
          <option value="">Select an occasion</option>
          <option value="anniversary">Anniversary</option>
          <option value="birthday">Birthday</option>
          <option value="business">Business</option>
          <option value="happyHour">Happy Hour</option>
        </select>
      </div>

      <div className="special-requirements-group">
        <label htmlFor="specialRequests" className="paragraph-text">Special Requirements:</label>
        <textarea
          id="specialRequests"
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          className="input-field"
          rows="4"
          placeholder="Any special requests or comments..."
          aria-label="Special Requirements"
          data-testid="special-requests-textarea"
        ></textarea>
      </div>

      <div className="button-group">
        <button
          type="button"
          onClick={handleClear}
          className="button-secondary"
          aria-label="Clear Form"
          data-testid="clear-button"
        >
          Clear
        </button>
        <button
          type="submit"
          className="button-primary"
          aria-label="Submit Reservation"
          data-testid="submit-button"
        >
          Submit
        </button>
      </div>
    </form>
  );
}