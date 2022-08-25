import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { SingleMovies } from "./components/SingleMovies";
import NoRoute  from "./components/NoRoute.jsx";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<SingleMovies />}></Route>
        <Route path="*" element={<NoRoute />}></Route>
      </Routes>
    </div>
  );
}

export default App;
