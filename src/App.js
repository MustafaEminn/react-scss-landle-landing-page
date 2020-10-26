import React from "react";
import "./styles/App.scss";
import Navbar from "./pages/Navbar";
import Header from "./pages/Header";
import MainOne from "./pages/MainOne";
import MainTwo from "./pages/MainTwo";
import MainThree from "./pages/MainThree";
import MainFour from "./pages/MainFour";
import MainFive from "./pages/MainFive";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <MainOne />
      <MainTwo />
      <MainThree />
      <MainFour />
      <MainFive />
      <Footer />
    </div>
  );
}

export default App;
