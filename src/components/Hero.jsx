import { useState } from "react";
import "../styles.css";

export default function HeroCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
        {
          src: "/images/pizza-dinner1.png",
          text: "Pizza Night, Done Right",
          cta: "Call the squad, grab a slice 🍕 and let the good times roll!",
          button: "Order Pizza",
        },
        {
          src: "/images/oyster.png",
          text: "Ocean to Table",
          cta: "Fresh oysters, always! 🦪 Book ahead and dive into the freshest catch.",
          button: "Reserve now",
        },
        {
          src: "/images/aperol.png",
          text: "Double Trouble Fridays",
          cta: "Double the Spritz, double the fun! 🍹 Every Friday, 17-18H! Cheers!",
          button: "Join Happy Hour",
        },
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="hero-card">
      <div className="carousel">
        <div className="carousel-content">
          <img
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex + 1}`}
            className="carousel-image"
          />
          <div className="hero-text">
            <h2>{images[currentIndex].text}</h2>
            <p>{images[currentIndex].cta}</p>
            <button className="cta-button">{images[currentIndex].button}</button>
          </div>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`carousel-indicator ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}