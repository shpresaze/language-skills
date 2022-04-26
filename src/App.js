import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/*"
          element={
            <>
              <div>NOT FOUND</div>
              <Link to="/#aboutus">Go back home</Link>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
