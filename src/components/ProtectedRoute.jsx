import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';     // Para redirigir

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  // Si no hay un usuario logueado, lo mandamos a la página de login
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // Si hay un usuario, mostramos el componente hijo (el dashboard)
  return children;
};

export default ProtectedRoute;