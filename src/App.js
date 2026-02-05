
import './App.css';

import About from "./components/About";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;