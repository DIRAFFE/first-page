import "./css/App.css";
import "./css/Header.css";
import "./css/Main.css";
import Header from "./main/Header";
import Main from "./main/Main";
import Footer from "./main/Footer";
import bkgrd from "./img/background.png";
import React from "react";

const bkgrdStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${bkgrd})`,
  backgroundSize: "cover",
};

function App() {
  return (
    <div className="App" style={bkgrdStyle}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
