import reactImg from "./assets/react1.png";

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

function App() {
  return (
    <div>
      <Header></Header>
      <HeaderTwo></HeaderTwo>
    </div>
  );
}

export default App;
