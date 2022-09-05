import  {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleProject from "./pages/SingleProject";
import Projects from "./pages/Projects";
function App() {
  return (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="projects/:id" element={ <SingleProject />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
  )
}

export default App;
