//Components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";

//Styles
import GlobalStyles from "./components/GlobalStyles";

//Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Nav />

      <Routes>
        <Route exact path="/game/:id" element={<Home />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
