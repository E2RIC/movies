import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Fetchs from "./components/fetchm/fetchM";
import Fmovies from "./components/Fmovies/full";
import Detail from "./components/Detail/detail";
import Navigation from "./components/Navigation";
import Login from "./components/Auth/login";
import Signup from "./components/Auth/signup";
import SearchPage from "./components/Search/search";





function App() {
  return (
   <BrowserRouter>
   <Navigation/>
      <Routes>!
        <Route>
          <Route index element={<Home />} />
          <Route path="/" element={<Fetchs />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/movies/:id" element={<Fmovies />} />
          <Route path="Login" element={<Login/>} />
          <Route path="Signup" element={<Signup/>} />
          <Route path="search" element={<SearchPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;