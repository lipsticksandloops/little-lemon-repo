import React, { useState } from "react";
import BookingForm from "./BookingForm";
import "../styles.css";

export default function Booking({ availableTimes, dispatchTimes }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    rememberMe: false,
    adults: 1,
    children: 0,
    seating: "noPreference",
    occasion: "",
    time: "",
    date: "",
    specialRequests: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "adults" || name === "children") {
      const updatedValue = parseInt(value, 10);

      if (name === "adults") {
        if (updatedValue + formData.children <= 8) {
          setFormData({
            ...formData,
            [name]: updatedValue,
          });
        }
      } else if (name === "children") {
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
        [name]: type === "checkbox" ? checked : value,
      });
    }

    // Dispatch action to update availableTimes when date changes
    if (name === "date") {
      dispatchTimes({ type: "UPDATE_TIMES", date: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const handleClear = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      rememberMe: false,
      adults: 1,
      children: 0,
      seating: "noPreference",
      occasion: "",
      time: "",
      date: "",
      specialRequests: "",
    });
  };

  return (
    <BookingForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleClear={handleClear}
      availableTimes={availableTimes}
    />
  );
}