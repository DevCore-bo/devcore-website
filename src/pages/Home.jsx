import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";   
import { 
  Users, 
  BarChart3, 
  Eye, 
  Settings, 
  LogOut,
  Search,
  Filter,
  UserPlus,
  Activity,
} from "lucide-react";
import Icon from "../components/Icon/Icon";
import { useAuth } from '../hooks/useAuth';


const Home = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    newUsersThisMonth: 0,
    totalTransactions: 0
  });
    const { currentUser, logout } = useAuth(); 
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login"); // Redirigimos al login después de cerrar sesión
    } catch (error) {
      console.error("Error al cerrar sesión", error);
      // Aquí podrías mostrar una alerta si falla el logout
    }
  };
  // Simulación de datos de Firebase
  useEffect(() => {
    // Simular datos de usuarios
    const mockUsers = [
      {
        id: "1",
        name: "María González",
        email: "maria.gonzalez@email.com",
        createdAt: "2024-08-15",
        lastLogin: "2024-09-01",
        status: "active",
        totalAmount: 15420
      },
      {
        id: "2",
        name: "Carlos Rodríguez",
        email: "carlos.rodriguez@email.com",
        createdAt: "2024-07-22",
        lastLogin: "2024-08-30",
        status: "active",
        totalAmount: 8930
      },
      {
        id: "3",
        name: "Ana Martínez",
        email: "ana.martinez@email.com",
        createdAt: "2024-08-28",
        lastLogin: "2024-09-02",
        status: "active",
        totalAmount: 5240
      },
      {
        id: "4",
        name: "Luis Fernández",
        email: "luis.fernandez@email.com",
        createdAt: "2024-06-10",
        lastLogin: "2024-08-15",
        status: "inactive",
        totalAmount: 23150
      },
      {
        id: "5",
        name: "Carmen Silva",
        email: "carmen.silva@email.com",
        createdAt: "2024-08-30",
        lastLogin: "2024-09-02",
        status: "active",
        totalAmount: 1890

      }
    ];

    setUsers(mockUsers);
    setStats({
      totalUsers: mockUsers.length,
      activeUsers: mockUsers.filter(u => u.status === "active").length,
      newUsersThisMonth: mockUsers.filter(u => new Date(u.createdAt).getMonth() === 7).length, // Agosto
      totalTransactions: mockUsers.reduce((sum, u) => sum + u.transactions, 0)
    });
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

const StatCard = ({ icon: IconComponent, title, value, subtitle, color }) => (
  <div className="stat-card">
    <div className="stat-icon" style={{ backgroundColor: `var(--${color})` }}>
      <IconComponent size={24} color="white" />
    </div>
    <div className="stat-content">
      <h3>{value}</h3>
      <p>{title}</p>
      {subtitle && <span>{subtitle}</span>}
    </div>
  </div>
);

  const UserChart = () => {
    const chartData = [
      { month: "Jun", users: 12 },
      { month: "Jul", users: 19 },
      { month: "Ago", users: 25 },
      { month: "Sep", users: 29 }
    ];

    const maxValue = Math.max(...chartData.map(d => d.users));

    return (
      <div className="chart-container">
        <h3>Crecimiento de Usuarios</h3>
        <div className="chart">
          {chartData.map((data, index) => (
            <div key={index} className="chart-bar-container">
              <div 
                className="chart-bar"
                style={{ 
                  height: `${(data.users / maxValue) * 100}%`,
                  background: `linear-gradient(180deg, var(--turquoise-light), var(--sky-blue))`
                }}
              />
              <span className="chart-label">{data.month}</span>
              <span className="chart-value">{data.users}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="logo-container">
            <Activity size={32} color="var(--turquoise-light)" />
            <h2>DevCore Admin</h2>
          </div>
        </div>
        <nav className="sidebar-nav">
          <button className={`nav-item ${activeTab === "overview" ? "active" : ""}`} onClick={() => setActiveTab("overview")}>
            <BarChart3 size={20} />
            <span>Dashboard</span>
          </button>
          <button className={`nav-item ${activeTab === "users" ? "active" : ""}`} onClick={() => setActiveTab("users")}>
            <Users size={20} />
            <span>Usuarios</span>
          </button>
        </nav>
        <div className="sidebar-footer">
          <button className="nav-item logout" onClick={handleLogout}>
            <LogOut size={20} />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </div>

      {/* Contenedor Principal (Contenido + Footer) */}
      <div className="dashboard-main-container">
        {/* Contenido Principal */}
        <main className="main-content">
          <header className="dashboard-header">
            <div className="header-left">
              <h1>Dashboard de Administración</h1>
              <p>Gestión de usuarios de DevCore</p>
            </div>
            <div className="header-right">
              <div className="welcome-message">
                <span>Bienvenido, {currentUser?.displayName || currentUser?.email}</span>
              </div>
            </div>
          </header>

          {activeTab === "overview" && (
            <div className="dashboard-content">
              <div className="stats-grid">
                <StatCard icon={Users} title="Total Usuarios" value={stats.totalUsers} subtitle="registrados" color="navy-blue" />
                <StatCard icon={Activity} title="Usuarios Activos" value={stats.activeUsers} subtitle="este mes" color="turquoise-light" />
                <StatCard icon={UserPlus} title="Nuevos Usuarios" value={stats.newUsersThisMonth} subtitle="este mes" color="sky-blue" />
              </div>
              <div className="charts-grid">
                <UserChart />
              </div>
            </div>
          )}

          {activeTab === "users" && (
            <div className="dashboard-content">
              <div className="table-container">
                <div className="table-header">
                  <h2>Gestión de Usuarios</h2>
                  <div className="table-actions">
                    <div className="search-container">
                      <Search size={20} />
                      <input type="text" placeholder="Buscar usuarios..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                    <button className="filter-btn"><Filter size={20} />Filtros</button>
                  </div>
                </div>
                <div className="table-wrapper">
                  <table className="users-table">
                    <thead>
                      <tr>
                        <th>Usuario</th><th>Email</th><th>Fecha Registro</th><th>Último Acceso</th><th>Estado</th><th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredUsers.map((user) => (
                        <tr key={user.id}>
                          <td><div className="user-info"><div className="user-avatar">{user.name.charAt(0)}</div><span>{user.name}</span></div></td>
                          <td>{user.email}</td>
                          <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                          <td>{new Date(user.lastLogin).toLocaleDateString()}</td>
                          <td><span className={`status ${user.status}`}>{user.status === "active" ? "Activo" : "Inactivo"}</span></td>
                          <td><div className="action-buttons"><button className="action-btn view"><Eye size={16} /></button><button className="action-btn settings"><Settings size={16} /></button></div></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </main>
        
        {/* Footer Minimalista */}
        <footer className="dashboard-footer">
          <p>© {new Date().getFullYear()} DevCore. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
};


export default Home;