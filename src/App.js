import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Certificate from "./components/pages/Certificate";
import Disucssion from "./components/pages/Disucssion";
import Home from "./components/pages/Home";
import Language from "./components/pages/Language";
import Learn from "./components/pages/Learn";
import Login from "./components/pages/Login";
import Pronunciation from "./components/pages/Pronunciation";
import Quiz from "./components/pages/Quiz";
import Quizes from "./components/pages/Quizes";
import Register from "./components/pages/Register";
import Stories from "./components/pages/Stories";
import Story from "./components/pages/Story";
import DefaultLayout from "./DefaultLayout";

function App() {
  const [logged, setLogged] = useState(false);
  const changeLogged = (val) => setLogged(val);
  useEffect(() => {
    const res = localStorage.getItem("logged");
    changeLogged(res === "true");
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home logged={logged} changeLogged={changeLogged} />}
        />
        <Route
          path="/learn"
          element={<Learn logged={logged} changeLogged={changeLogged} />}
        />
        <Route
          path="/quiz"
          element={<Quiz logged={logged} changeLogged={changeLogged} />}
        />
        <Route
          path="/certificate"
          element={<Certificate logged={logged} changeLogged={changeLogged} />}
        />
        <Route
          path="/login"
          element={<Login logged={logged} changeLogged={changeLogged} />}
        />
        <Route
          path="/register"
          element={<Register logged={logged} changeLogged={changeLogged} />}
        />
        <Route
          path="/story"
          element={<Story logged={logged} changeLogged={changeLogged} />}
        />
        <Route
          path="/language"
          element={<Language logged={logged} changeLogged={changeLogged} />}
        />
        <Route
          path="/stories"
          element={<Stories logged={logged} changeLogged={changeLogged} />}
        />
        <Route
          path="/quizes"
          element={<Quizes logged={logged} changeLogged={changeLogged} />}
        />
        <Route
          path="/discussions"
          element={<Disucssion logged={logged} changeLogged={changeLogged} />}
        />
        <Route
          path="/pronunciations"
          element={
            <Pronunciation logged={logged} changeLogged={changeLogged} />
          }
        />
        <Route
          path="/*"
          element={
            <DefaultLayout logged={logged} changeLogged={changeLogged}>
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
