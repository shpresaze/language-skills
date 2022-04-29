import { Container } from "react-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Disucssion from "./components/pages/Disucssion";
import Home from "./components/pages/Home";
import Language from "./components/pages/Language";
import Learn from "./components/pages/Learn";
import Pronunciation from "./components/pages/Pronunciation";
import Quizes from "./components/pages/Quizes";
import Stories from "./components/pages/Stories";
import Story from "./components/pages/Story";
import DefaultLayout from "./DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/story" element={<Story />} />
        <Route path="/language" element={<Language />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/quizes" element={<Quizes />} />
        <Route path="/discussions" element={<Disucssion />} />
        <Route path="/pronunciations" element={<Pronunciation />} />
        <Route
          path="/*"
          element={
            <DefaultLayout>
              <Container className="d-flex custom-green flex-column align-items-center">
                <div>NOT FOUND</div>
                <Link to="/">Go back home</Link>
              </Container>
            </DefaultLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
