import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MoviesPage } from './pages/MoviesPage'
import { MovieFormPage } from './pages/MovieFormPage'

function App() {
  return(
    <BrowserRouter>
      <Routes>
      <Route path="/" element = {<Navigate to = {"/movies"} />} />
        <Route path="/movies" element = {<MoviesPage/>} />
        <Route path="/movies-create" element = {<MovieFormPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;