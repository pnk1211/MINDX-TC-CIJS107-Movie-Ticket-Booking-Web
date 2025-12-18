import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieDetail from "./pages/MovieDetail";
import Trailer from "./pages/Trailer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Booking from "./pages/Booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movie" element={<MovieDetail />} />
        <Route path="/trailer" element={<Trailer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
