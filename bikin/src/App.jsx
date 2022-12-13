import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import './App.css'
import Header from "./components/Header";
import Section from "./components/Section";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </>
  );
}

export default App;
