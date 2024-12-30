import "./Utility.css";
import "./App.css";

import "./Utility.css";
import "./App.css";

import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Freelance from "./Components/Freelance";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
// import Chat from "./Chat";

function App() {
  return (
    <div className="App">
      <Navbar />

      <About />
      <Skills />
      <Freelance />
      <Contact />

      <Footer />
      {/* <Chat /> */}
    </div>
  );
}

export default App;
