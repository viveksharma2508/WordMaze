import React from "react";
import Header from "./components/Header/Header";
import Game from "./components/Game/Game";
import "./components/style.css"
import "./components/reset.css"

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game />
      </div>
    </div>
  );
}
export default App
