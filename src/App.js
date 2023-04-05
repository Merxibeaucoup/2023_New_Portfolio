import React, { createContext, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";
import NotFound from "./components/NotFound";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";
import ScrollToTopBtn from "./components/ScrollToTopBtn";

export const ModeContext = createContext(null);

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [scrolledNav, setScrolledNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY > 0) {
      setScrolledNav(true);
    } else {
      setScrolledNav(false);
    }
  };

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    const nextMode = mode === "light" ? "dark" : "light";
    setMode(nextMode);
    document.documentElement.className = nextMode;
  };

  return (
    <ModeContext.Provider value={{ mode }}>
      <Navbar
        scrolledNav={scrolledNav}
        changeNav={changeNav}
        handleMenu={handleMenu}
        isOpen={isOpen}
        toggleMode={toggleMode}
        mode={mode}
      />
      <ScrollToTopBtn />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/portfolio" exact>
            <Portfolio />
          </Route>
          <Route path="/project/:id" exact>
            <Project />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route
            path="/resume"
            component={() => {
              window.location.href =
                "https://drive.google.com/file/d/101Dlw1sFG-AIvc-JcRKnf-qx3oC153Un/view?usp=share_link";
              return null;
            }}
          />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </AnimatePresence>
    </ModeContext.Provider>
  );
};

export default App;
