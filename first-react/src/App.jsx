import Header from "./components/Header/Header.jsx";
import HeaderTwo from "./components/HeaderTwo.jsx";
import CoreConcepts from "./components/CoreComponent.jsx";

// import componentImg from "./assets/component-1.png";
import { CORE_CONCEPTS } from "./data";

function App() {
  return (
    <div>
      <Header></Header>
      <HeaderTwo></HeaderTwo>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcepts
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />
          <CoreConcepts
            title={CORE_CONCEPTS[1].title}
            description={CORE_CONCEPTS[1].description}
            image={CORE_CONCEPTS[1].image}
          />
          <CoreConcepts
            title={CORE_CONCEPTS[2].title}
            description={CORE_CONCEPTS[2].description}
            image={CORE_CONCEPTS[2].image}
          />
          <CoreConcepts {...CORE_CONCEPTS[3]} />
        </ul>
      </section>
    </div>
  );
}

export default App;
