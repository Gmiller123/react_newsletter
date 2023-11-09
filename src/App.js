import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Include the Navbar component outside th  e Switch */}
        <Routes>
          <Route path="/card" element={<Card />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
