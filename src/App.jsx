import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SyntacticDecending from "./components/SyntacticDecending";



function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SyntacticDescending" element={<SyntacticDecending />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
