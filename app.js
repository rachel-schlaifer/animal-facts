import { animals } from "./animals";

import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("app"));
const title = "";

const background = (
  <img className="background" src="/images/ocean.jpg" alt="ocean" />
);
const images = [];

for (const animal in animals) {
  const imageElement = (
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
  images.push(imageElement);
}

const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
    {background}
    <p id="fact"></p>
    <div className="animals">{images}</div>
  </div>
);

// Function to display a random fact
function displayFact(e) {
  const animalName = e.target.alt; // Get the animal name from the image alt attribute
  const facts = animals[animalName].facts; // Access the facts array for the clicked animal
  const randomIndex = Math.floor(Math.random() * facts.length); // Generate a random index
  const funFact = facts[randomIndex]; // Select a random fact
  document.getElementById("fact").innerHTML = funFact;
}

root.render(animalFacts);
