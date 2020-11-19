import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import injectContext, { useContext } from "./store"

import Footer from "./components/footer.js"
import Navbar from "./components/navbar.js"

import Home from "./pages/home.js"
import About from "./pages/about.js"
import Contact from "./pages/contact.js"

import DetailEntity from "./components/detailEntity.js"
import store from "./store";

export default injectContext(function(props) {
    
    return (
        <Router>
            <Navbar />
            
            <div className="page">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/about">
                        <About />
                    </Route>

                    <Route path="/contact">
                        <Contact />
                    </Route>

                    <Route path="/character/:id">
                        <DetailEntity tipo="people"/>
                    </Route>

                    <Route path="/planets/:id">
                        <DetailEntity tipo="planets"/>
                    </Route>
                </Switch>
            </div>
            <Footer />
        </Router>
    )
})

// {...store.planets[params.id]}