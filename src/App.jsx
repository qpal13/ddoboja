import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Consulting from "./pages/Consulting";
import Contactus from "./pages/Contactus";
import Design from "./pages/Design";
import Development from "./pages/Development";
import Marketing from "./pages/Marketing";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contactus" component={Contactus} />
          <Route path="/products" component={Products} />
          <Route path="/services" component={Services} />
          <Route path="/signup" component={Signup} />
          <Route path="/development" component={Development} />
          <Route path="/marketing" component={Marketing} />
          <Route path="/design" component={Design} />
          <Route path="/consulting" component={Consulting} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
