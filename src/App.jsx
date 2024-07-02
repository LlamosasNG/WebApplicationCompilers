import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Syntactic from "./components/Syntactic";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Syntactic" element={<Syntactic />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
