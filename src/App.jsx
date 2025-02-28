import React, { useReducer } from "react";
import Booking from "./components/Booking";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./styles.css";

const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return ["17:00", "18:00", "19:00", "20:00", "21:00"];
    default:
      return state;
  }
};

const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00"];

export default function App() {
  const [availableTimes, dispatchTimes] = useReducer(updateTimes, [], initializeTimes);

  return (
    <div>
      <Header />
      <Hero />
      <Booking availableTimes={availableTimes} dispatchTimes={dispatchTimes} />
      <Footer />
    </div>
  );
}