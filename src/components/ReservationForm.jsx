import { useState } from "react";
import "../styles.css";

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    rememberMe: false,
    adults: 1,
    children: 0,
    seating: 'noPreference',
    occasion: '',
    time: '',
    date: '',
    specialRequests: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'adults' || name === 'children') {
      const updatedValue = parseInt(value, 10);

      if (name === 'adults') {
        if (updatedValue + formData.children <= 8) {
          setFormData({
            ...formData,
            [name]: updatedValue,
          });
        }
      } else if (name === 'children') {
        if (updatedValue + formData.adults <= 8) {
          setFormData({
            ...formData,
            [name]: updatedValue,
          });
        }
      }
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  const handleClear = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      rememberMe: false,
      adults: 1,
      children: 0,
      seating: 'noPreference',
      occasion: '',
      time: '',
      date: '',
      specialRequests: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="reservation-form">
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
        />
        <div className="checkbox-group">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
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
            <input
              type="number"
              id="adults"
              name="adults"
              value={formData.adults}
              onChange={handleChange}
              min="1"
              max="8"
              required
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="children" className="paragraph-text">Children:</label>
            <input
              type="number"
              id="children"
              name="children"
              value={formData.children}
              onChange={handleChange}
              min="0"
              max="8"
              required
              className="input-field"
            />
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
            >
              <option value="">Select a time</option>
              <option value="5:00PM">5:00 PM</option>
              <option value="6:00PM">6:00 PM</option>
              <option value="7:00PM">7:00 PM</option>
              <option value="8:00PM">8:00 PM</option>
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
          >
            <option value="">Select an occasion</option>
            <option value="anniversary">Anniversary</option>
            <option value="birthday">Birthday</option>
            <option value="business">Business</option>
            <option value="happyHour">Happy Hour</option>
          </select>
        </div>
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
        ></textarea>
      </div>
      <div className="button-group">
        <button type="button" onClick={handleClear} className="button-secondary">
          Clear
        </button>
        <button type="submit" className="button-primary">
          Submit
        </button>
      </div>
    </form>
  );
}