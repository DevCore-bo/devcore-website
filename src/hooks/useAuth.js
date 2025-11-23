// src/hooks/useAuth.js

import { useContext } from "react";
// 1. IMPORTAMOS EL CONTEXTO DESDE EL OTRO ARCHIVO
import { AuthContext } from "../context/AuthContext";

// 2. CREAMOS Y EXPORTAMOS EL HOOK DESDE AQUÍ
export const useAuth = () => {
  const context = useContext(AuthContext);

  // Verificación para evitar errores: si el hook se usa fuera del provider
  if (context === undefined) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }

  return context;
};
