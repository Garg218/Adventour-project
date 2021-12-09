import React, { Component } from "react";
import "../App.css";
import Hero from "../components/Hero";
import About from "../components/About";
import Package from "../components/Package";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <div id='home'>
        <Hero />
        <About />
        <Package />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
