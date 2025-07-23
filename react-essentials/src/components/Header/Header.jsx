import React from "react";
import reactImage from "../../assets/react-core-concepts.png"; // Assuming the image is in the assets folder
import "./Header.css"; // Assuming you have a CSS file for styling the header

const Header = () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const reactDescs = ["Fundemental", "Core", "Essential"];
  const desc = reactDescs[getRandomInt(0, 2)];
  console.log(`Image description: ${reactImage}`);
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {desc} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
};

export default Header;
