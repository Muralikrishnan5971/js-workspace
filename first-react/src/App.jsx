import reactImg from "./assets/react-core-concepts.png";
// import componentImg from "./assets/component-1.png";
import { CORE_CONCEPTS } from "./data";

const filler = ["Core", " Fundamental", "Crucial"];

function getRandomFiller(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
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

function HeaderTwo() {
  return (
    <main>
      <h2>Time to get started!</h2>
    </main>
  );
}

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.img} alt="..." />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <HeaderTwo></HeaderTwo>
      <section id="core-concepts"></section>
      <h2>Core Concepts</h2>
      <ul>
        <CoreConcepts
          title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
          img={CORE_CONCEPTS[0].image}
        />
        <CoreConcepts {...CORE_CONCEPTS} />
        <CoreConcepts
          title={CORE_CONCEPTS[2].title}
          description={CORE_CONCEPTS[2].description}
          img={CORE_CONCEPTS[2].image}
        />
        <CoreConcepts
          title={CORE_CONCEPTS[3].title}
          description={CORE_CONCEPTS[3].description}
          img={CORE_CONCEPTS[3].image}
        />
      </ul>
    </div>
  );
}

export default App;
