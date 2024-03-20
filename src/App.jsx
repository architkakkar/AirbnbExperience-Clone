import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Card from "./components/Card";

import Card1_Image from "./assets/katie-zaferes.png";
import Card2_Image from "./assets/wedding-photography.png";
import Card3_Image from "./assets/mountain-bike.png";
import Card4_Image from "./assets/mount-batur-sunrise.png";
import Card5_Image from "./assets/hot-air-balloon.png";

function App() {
  const cards = [
    {
      image: Card1_Image,
      tag: "Sold out",
      rating: "5.0",
      review: 6,
      country: "USA",
      title: "Life lessons with Katie Zaferes",
      price: "136",
    },
    {
      image: Card2_Image,
      tag: "Online",
      rating: "5.0",
      review: 30,
      country: "USA",
      title: "Learn wedding photography",
      price: "125",
    },
    {
      image: Card3_Image,
      tag: "",
      rating: "4.8",
      review: 2,
      country: "USA",
      title: "Group Mountain Biking",
      price: "50",
    },
    {
      image: Card4_Image,
      tag: "Available",
      rating: "4.94",
      review: 214,
      country: "Indonesia",
      title: "Bali Private Tour",
      price: "30",
    },
    {
      image: Card5_Image,
      tag: "",
      rating: "5.0",
      review: 37,
      country: "Turkey",
      title: "Cappadocia Goreme Balloon Tour",
      price: "55",
    },
  ];

  return (
    <>
      <Navbar />
      <HeroSection />
      <main className="px-10 py-12 flex flex-wrap gap-3.5 sm:flex-nowrap sm:flex-col sm:gap-5 sm:px-6 sm:pt-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            {...card} // updated logic to spread syntax to send props to a component.
          />
        ))}
      </main>
    </>
  );
}

export default App;
