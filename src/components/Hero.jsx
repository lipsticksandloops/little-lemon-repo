import { useState } from "react";
import "../styles.css";

export default function HeroCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "/images/pizza-dinner.jpg",
      text: "Delicious Pizza for Dinner",
      cta: "Gather your crew, grab a slice, and let the good times roll! 🍕 Order your pizza now and make tonight a feast to remember!",
    },
    { src: "/images/oyster.jpg", text: "", cta: "" },
    { src: "/images/aperol.jpg", text: "", cta: "" },
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
          {currentIndex === 0 && (
            <div className="hero-text">
              <h2>{images[currentIndex].text}</h2>
              <p>{images[currentIndex].cta}</p>
              <button className="cta-button">Order Now</button> {/* CTA Button */}
            </div>
          )}
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
