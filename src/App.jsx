import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ReservationForm from './components/ReservationForm';
import Footer from './components/Footer';
import './styles.css';

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <ReservationForm />
      <Footer />
    </div>
  );
}