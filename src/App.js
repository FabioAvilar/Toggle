import "./styles.css";
import { useState } from "react";

export default function App() {
  // define state here
  const [showMenu, setShowMenu] = useState(false);

  function onClick() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="app">
      <header className={showMenu ? "menu visible" : "menu"}>
        <ul className="nav__list">
          <li>Home</li>
          <li>Profile</li>
          <li>Friends</li>
        </ul>
        <button onClick={onClick}>☰</button>
      </header>
      <main>
        <h1>Welcome!</h1>
        <p>This is a toggle navbar example</p>
      </main>
    </div>
  );
}
