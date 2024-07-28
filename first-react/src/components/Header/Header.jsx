import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const filler = ["Core", " Fundamental", "Crucial"];

function getRandomFiller(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const fill = filler[getRandomFiller(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {fill} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}
