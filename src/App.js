import { Route, Routes, useLocation, useParams } from "react-router-dom";

import About from "./About";
import Header from "./Header";
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";
import Projects from "./Projects";
import Team from "./Team";
import NotFound from "./NotFound";
import Footer from "./Footer";
import { useEffect } from "react";

function App() {

  let link = useLocation()
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }, [link])

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/dtech-services" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/services" Component={Services} />
        <Route exact path="/projects" Component={Projects} />
        <Route exact path="/team" Component={Team} />
        <Route Component={NotFound} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
