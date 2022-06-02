import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import Home from "../src/pages/Home";
import Matches from "./pages/Matches";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}
        ></Route>
        <Route
          exact
          path="/matches/:id"
          element={<Matches />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
