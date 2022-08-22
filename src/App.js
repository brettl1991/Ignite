//Components and pages

import Home from "./pages/Home";

import GlobalStyles from "./components/GlobalStyles";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyles />

      <Routes>
        <Route exact path="/game/:id" element={<Home />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
