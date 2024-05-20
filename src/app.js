import React from "react";
import "./index.css"
import Header from "./components/header/header";
import Hero from "./components/hero/Hero";
import Category from "./components/category/category"
import Selling from "./components/Selling/Selling"
import Easy from "./components/easy/easy"
import Testimonials from "./components/Testimonials/Testimonials.js"
import Footer from "./components/footer/footer.js"


const App = () => {
  return (
<>
<Header/>
    <Hero/>
    <Category/>
    <Selling/>
    <Easy/>
    <Testimonials/>
    <Footer/>
      </> 
  );
};

export default App;