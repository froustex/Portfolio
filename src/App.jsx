import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Hobbies from "./components/Hobbies";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
