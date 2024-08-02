export default function TabButton({ children }) {
  function handleClick() {
    console.log("hi this is from console");
  }
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
