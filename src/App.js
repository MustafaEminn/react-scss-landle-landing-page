import React from "react";
import "./styles/App.scss";
import Navbar from "./pages/Navbar";
import Header from "./pages/Header";
import MainOne from "./pages/MainOne";
import MainTwo from "./pages/MainTwo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <MainOne />
      <MainTwo />
    </div>
  );
}

export default App;
