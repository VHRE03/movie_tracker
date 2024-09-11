import React from "react";
import { useNavigate } from "react-router-dom";

export function Navbar({ username, onEditProfile, onLogout }) {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    onEditProfile();
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="text-white text-xl font-bold">MovieTracker</div>
      <div className="flex items-center">
        <span className="text-white mr-4">{username}</span>
        <button
          onClick={handleEditProfile}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Editar Perfil
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
}
