// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Playstation from "./Pages/Playstation"
import Xbox from "./Pages/Xbox";
import About from "./Pages/About";

// COMPONENTS
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Index />} />
            <Route path="/games/new" element={<New />} />
            <Route exact path="/games/:id" element={<Show />} />
            <Route path="/games/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
            <Route path="playstation" element={<Playstation />}/>
            <Route path="xbox" element={<Xbox />}/>
            <Route path="about" element={<About />}/>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
