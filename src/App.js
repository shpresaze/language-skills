import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Disucssion from "./components/pages/Disucssion";
import Home from "./components/pages/Home";
import Pronunciation from "./components/pages/Pronunciation";
import Quizes from "./components/pages/Quizes";
import Stories from "./components/pages/Stories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/quizes" element={<Quizes />} />
        <Route path="/discussions" element={<Disucssion />} />
        <Route path="/pronunciations" element={<Pronunciation />} />
        <Route
          path="/*"
          element={
            <>
              <div>NOT FOUND</div>
              <Link to="/">Go back home</Link>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
