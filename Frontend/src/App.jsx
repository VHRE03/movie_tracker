import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MoviesPage } from "./pages/MoviesPage";
import { MovieFormPage } from "./pages/MovieFormPage";
import { Toaster } from "react-hot-toast";
import { Navbar } from "./components/Navbar";

function App() {
  const handleEditProfile = () => {
    // Lógica para editar el perfil
  };

  const handleLogout = () => {
    // Lógica para cerrar sesión
  };

  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <div>
          <Navbar
            username="John Doe"
            onEditProfile={handleEditProfile}
            onLogout={handleLogout}
          />
        </div>
        <Routes>
          <Route path="/" element={<Navigate to={"/movies"} />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies-create" element={<MovieFormPage />} />
          <Route path="/movies/:id" element={<MovieFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
