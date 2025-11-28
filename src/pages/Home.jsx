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
  X,
  Save,
  Trash2,
  CreditCard,
  DollarSign
} from "lucide-react";
import Icon from "../components/Icon/Icon";
import { useAuth } from '../hooks/useAuth';
import { collection, getDocs, doc, updateDoc, deleteDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const Home = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filterPlan, setFilterPlan] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [users, setUsers] = useState([]);
  const [planes, setPlanes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingPlanes, setLoadingPlanes] = useState(false);
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    newUsersThisMonth: 0,
    totalTransactions: 0
  });

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("view"); // "view", "edit", "editPlan"
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [editFormData, setEditFormData] = useState({
    estado: "",
    subscriptionPlan: ""
  });
  const [editPlanData, setEditPlanData] = useState({
    grupos_limite: 0,
    personas_limite: 0,
    ocr_limite: 0,
    reporte_limite: 0
  });

  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

  // Real-time listener for users
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onSnapshot(collection(db, "users"), (querySnapshot) => {
      const usersList = querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          status: data.estado || "inactivo",
          createdAt: data.createdAt?.toDate ? data.createdAt.toDate().toISOString() : data.createdAt,
          lastLogin: data.lastLogin?.toDate ? data.lastLogin.toDate().toISOString() : (data.lastLogin || new Date().toISOString()),
          subscriptionStartDate: data.subscriptionStartDate?.toDate ? data.subscriptionStartDate.toDate().toISOString() : data.subscriptionStartDate
        };
      });
      setUsers(usersList);
      calculateStats(usersList);
      setLoading(false);
    }, (error) => {
      console.error("Error listening to users:", error);
      setLoading(false);
    });

    // Fetch planes (keep as getDocs for now unless requested otherwise, but it's fine)
    fetchPlanes();

    return () => unsubscribe();
  }, []);

  // Fetch plans from Firebase
  const fetchPlanes = async () => {
    setLoadingPlanes(true);
    try {
      const querySnapshot = await getDocs(collection(db, "planes_subscripcion"));
      const planesList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPlanes(planesList);
    } catch (error) {
      console.error("Error fetching plans:", error);
    } finally {
      setLoadingPlanes(false);
    }
  };

  const calculateStats = (usersList) => {
    const now = new Date();
    setStats({
      totalUsers: usersList.length,
      activeUsers: usersList.filter(u => u.estado === "activo").length,
      newUsersThisMonth: usersList.filter(u => {
        const created = new Date(u.createdAt);
        return created.getMonth() === now.getMonth() && created.getFullYear() === now.getFullYear();
      }).length,
      totalTransactions: 0 // Placeholder as transaction data might not be in user doc
    });
  };

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setModalType("view");
    setModalOpen(true);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setEditFormData({
      estado: user.estado || "inactivo",
      subscriptionPlan: user.subscriptionPlan || "basico"
    });
    setModalType("edit");
    setModalOpen(true);
  };

  const handleEditPlan = (plan) => {
    setSelectedPlan(plan);
    setEditPlanData({
      grupos_limite: plan.grupos_limite || 0,
      personas_limite: plan.personas_limite || 0,
      ocr_limite: plan.ocr_limite || 0,
      reporte_limite: plan.reporte_limite || 0
    });
    setModalType("editPlan");
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedUser(null);
    setSelectedPlan(null);
  };

  const handleSaveChanges = async () => {
    if (modalType === "edit" && selectedUser) {
      try {
        const userRef = doc(db, "users", selectedUser.id);
        await updateDoc(userRef, {
          estado: editFormData.estado,
          subscriptionPlan: editFormData.subscriptionPlan
        });

        // Update local state
        const updatedUsers = users.map(u =>
          u.id === selectedUser.id
            ? { ...u, estado: editFormData.estado, subscriptionPlan: editFormData.subscriptionPlan }
            : u
        );
        setUsers(updatedUsers);
        calculateStats(updatedUsers);
        handleCloseModal();
      } catch (error) {
        console.error("Error updating user:", error);
        alert("Error al actualizar el usuario");
      }
    } else if (modalType === "editPlan" && selectedPlan) {
      try {
        const planRef = doc(db, "planes_subscripcion", selectedPlan.id);
        await updateDoc(planRef, {
          grupos_limite: Number(editPlanData.grupos_limite),
          personas_limite: Number(editPlanData.personas_limite),
          ocr_limite: Number(editPlanData.ocr_limite),
          reporte_limite: Number(editPlanData.reporte_limite)
        });

        const updatedPlanes = planes.map(p =>
          p.id === selectedPlan.id
            ? { ...p, ...editPlanData, grupos_limite: Number(editPlanData.grupos_limite), personas_limite: Number(editPlanData.personas_limite), ocr_limite: Number(editPlanData.ocr_limite), reporte_limite: Number(editPlanData.reporte_limite) }
            : p
        );
        setPlanes(updatedPlanes);
        handleCloseModal();
      } catch (error) {
        console.error("Error updating plan:", error);
        alert("Error al actualizar el plan");
      }
    }
  };

  const handleDeleteUser = async () => {
    if (!selectedUser || !window.confirm("¿Estás seguro de que deseas eliminar este usuario?")) return;

    try {
      await deleteDoc(doc(db, "users", selectedUser.id));
      const updatedUsers = users.filter(u => u.id !== selectedUser.id);
      setUsers(updatedUsers);
      calculateStats(updatedUsers);
      handleCloseModal();
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Error al eliminar el usuario");
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = (user.name?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      (user.email?.toLowerCase() || "").includes(searchTerm.toLowerCase());

    const matchesPlan = filterPlan === "all" || (user.subscriptionPlan || "basico").toLowerCase() === filterPlan.toLowerCase();
    const matchesStatus = filterStatus === "all" || (user.estado || "inactivo").toLowerCase() === filterStatus.toLowerCase();

    return matchesSearch && matchesPlan && matchesStatus;
  });

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
    // Placeholder chart data - in a real app, this would be dynamic
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

  const PlanDistributionChart = () => {
    const planCounts = users.reduce((acc, user) => {
      const plan = (user.subscriptionPlan || 'basico').toLowerCase();
      acc[plan] = (acc[plan] || 0) + 1;
      return acc;
    }, { basico: 0, familiar: 0, pro: 0 });

    const data = [
      { name: 'Básico', value: planCounts.basico, color: '#94a3b8' },
      { name: 'Familiar', value: planCounts.familiar, color: '#f97316' },
      { name: 'Pro', value: planCounts.pro, color: '#22c55e' },
    ].filter(d => d.value > 0);

    return (
      <div className="chart-container">
        <h3>Distribución de Planes</h3>
        <div style={{ width: '100%', height: 200 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                label={({ cx, cy, midAngle, outerRadius, percent, index }) => {
                  const RADIAN = Math.PI / 180;
                  const radius = outerRadius + 10; // Distance of the label from the center
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);

                  return (
                    <text
                      x={x}
                      y={y}
                      fill={data[index].color} // Use the color of the slice
                      textAnchor={x > cx ? 'start' : 'end'}
                      dominantBaseline="central"
                      fontSize="12px"
                      fontWeight="bold"
                    >
                      {`${(percent * 100).toFixed(0)}%`}
                    </text>
                  );
                }}
                labelLine={false} // Hide the line connecting label to slice
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };

  const RevenueOverview = () => {
    const calculations = users.reduce((acc, user) => {
      const plan = (user.subscriptionPlan || 'basico').toLowerCase();
      if (plan === 'basico') { acc.basicCount++; acc.basicRev += 25; }
      if (plan === 'familiar') { acc.famCount++; acc.famRev += 20; }
      if (plan === 'pro') { acc.proCount++; acc.proRev += 35; }
      return acc;
    }, { basicCount: 0, basicRev: 0, famCount: 0, famRev: 0, proCount: 0, proRev: 0 });

    const totalRev = calculations.basicRev + calculations.famRev + calculations.proRev;

    return (
      <div className="revenue-section" style={{ marginTop: '2rem' }}>
        <h2 style={{ marginBottom: '1.5rem', color: 'var(--navy-blue)' }}>Ingresos Estimados</h2>
        <div className="stats-grid">
          <StatCard icon={DollarSign} title="Ingreso Mensual Total" value={`${totalRev} Bs`} subtitle="Estimado" color="purple" />
          <StatCard icon={Users} title="Ingreso Básico" value={`${calculations.basicRev} Bs`} subtitle={`${calculations.basicCount} usuarios (25Bs/u)`} color="gray" />
          <StatCard icon={Users} title="Ingreso Familiar" value={`${calculations.famRev} Bs`} subtitle={`${calculations.famCount} usuarios (20Bs/u)`} color="orange" />
          <StatCard icon={Users} title="Ingreso Pro" value={`${calculations.proRev} Bs`} subtitle={`${calculations.proCount} usuarios (35Bs/u)`} color="green" />
        </div>
      </div>
    );
  };

  const getHistoryData = () => {
    // 1. Filter users with relevant plans and a start date
    const relevantUsers = users.filter(u =>
      (u.subscriptionPlan === 'familiar' || u.subscriptionPlan === 'pro') &&
      u.subscriptionStartDate
    );

    // 2. Sort by date
    relevantUsers.sort((a, b) => new Date(a.subscriptionStartDate) - new Date(b.subscriptionStartDate));

    // 3. Create time series
    const historyMap = new Map();
    let runningFamiliar = 0;
    let runningPro = 0;

    relevantUsers.forEach(user => {
      const dateKey = new Date(user.subscriptionStartDate).toLocaleDateString(); // Group by day
      
      if (!historyMap.has(dateKey)) {
        historyMap.set(dateKey, { date: dateKey, familiar: runningFamiliar, pro: runningPro });
      }
      
      const current = historyMap.get(dateKey);
      if (user.subscriptionPlan === 'familiar') {
        runningFamiliar++;
        current.familiar = runningFamiliar;
      } else if (user.subscriptionPlan === 'pro') {
        runningPro++;
        current.pro = runningPro;
      }
    });

    return Array.from(historyMap.values());
  };

  const historyData = getHistoryData();

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
          <button className={`nav-item ${activeTab === "planes" ? "active" : ""}`} onClick={() => setActiveTab("planes")}>
            <CreditCard size={20} />
            <span>Gestión de Planes</span>
          </button>
        </nav>
        <div className="sidebar-footer">
          <button className="nav-item logout" onClick={handleLogout}>
            <LogOut size={20} />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </div>

      {/* Contenedor Principal */}
      <div className="dashboard-main-container">
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
                <StatCard icon={Activity} title="Usuarios Activos" value={stats.activeUsers} subtitle="actualmente" color="turquoise-light" />
                <StatCard icon={UserPlus} title="Nuevos Usuarios" value={stats.newUsersThisMonth} subtitle="este mes" color="sky-blue" />
              </div>
              <div className="charts-grid">
                <UserChart />
                <PlanDistributionChart />
              </div>
              <RevenueOverview />
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
                    <button className={`filter-btn ${showFilters ? 'active' : ''}`} onClick={() => setShowFilters(!showFilters)}>
                      <Filter size={20} />Filtros
                    </button>
                  </div>
                </div>
                {showFilters && (
                  <div className="filters-row">
                    <select value={filterPlan} onChange={(e) => setFilterPlan(e.target.value)} className="filter-select">
                      <option value="all">Todos los Planes</option>
                      <option value="basico">Básico</option>
                      <option value="familiar">Familiar</option>
                      <option value="pro">Pro</option>
                    </select>
                    <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="filter-select">
                      <option value="all">Todos los Estados</option>
                      <option value="activo">Activo</option>
                      <option value="inactivo">Inactivo</option>
                    </select>
                  </div>
                )}
                <div className="table-wrapper">
                  {loading ? (
                    <div className="loading-state">Cargando usuarios...</div>
                  ) : (
                    <table className="users-table">
                      <thead>
                        <tr>
                          <th>Usuario</th>
                          <th>Email</th>
                          <th>Plan</th>
                          <th>Fecha de Inicio</th>
                          <th>Estado</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredUsers.map((user) => (
                          <tr key={user.id}>
                            <td>
                              <div className="user-info">
                                {user.profilePictureUrl ? (
                                  <img src={user.profilePictureUrl} alt={user.name} className="user-avatar-img" />
                                ) : (
                                  <div className="user-avatar">{user.name?.charAt(0)}</div>
                                )}
                                <span>{user.name}</span>
                              </div>
                            </td>
                            <td>{user.email}</td>
                            <td><span className="plan-badge">{user.subscriptionPlan || "N/A"}</span></td>
                            <td>
                              {user.subscriptionPlan === "basico" || !user.subscriptionStartDate
                                ? "N/A"
                                : new Date(user.subscriptionStartDate).toLocaleDateString()}
                            </td>
                            <td>
                              <span className={`status ${user.estado === "activo" ? "active" : "inactive"}`}>
                                {user.estado === "activo" ? "Activo" : "Inactivo"}
                              </span>
                            </td>
                            <td>
                              <div className="action-buttons">
                                <button className="action-btn view" onClick={() => handleViewUser(user)}>
                                  <Eye size={16} />
                                </button>
                                <button className="action-btn settings" onClick={() => handleEditUser(user)}>
                                  <Settings size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === "planes" && (
            <div className="dashboard-content">
              <div className="chart-container" style={{ marginBottom: '2rem' }}>
                <h3>Historial de Planes Activos</h3>
                <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={historyData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                      <XAxis 
                        dataKey="date" 
                        tick={{ fontSize: 12, fill: '#6b7280' }} 
                        axisLine={{ stroke: '#e5e7eb' }}
                        tickLine={false}
                      />
                      <YAxis 
                        tick={{ fontSize: 12, fill: '#6b7280' }} 
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          borderRadius: '8px', 
                          border: 'none', 
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
                        }} 
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="familiar" 
                        name="Plan Familiar" 
                        stroke="#f97316" 
                        strokeWidth={3}
                        dot={{ r: 4, fill: '#f97316', strokeWidth: 2, stroke: 'white' }}
                        activeDot={{ r: 6 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="pro" 
                        name="Plan Pro" 
                        stroke="#22c55e" 
                        strokeWidth={3}
                        dot={{ r: 4, fill: '#22c55e', strokeWidth: 2, stroke: 'white' }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="table-container">
                <div className="table-header">
                  <h2>Gestión de Planes</h2>
                </div>
                <div className="table-wrapper">
                  {loadingPlanes ? (
                    <div className="loading-state">Cargando planes...</div>
                  ) : (
                    <table className="users-table">
                      <thead>
                        <tr>
                          <th>Nombre</th>
                          <th>Límite Grupos</th>
                          <th>Límite Personas</th>
                          <th>Límite OCR</th>
                          <th>Límite Reportes</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {planes.map((plan) => (
                          <tr key={plan.id}>
                            <td><span className="plan-badge">{plan.nombre}</span></td>
                            <td>{plan.grupos_limite}</td>
                            <td>{plan.personas_limite}</td>
                            <td>{plan.ocr_limite}</td>
                            <td>{plan.reporte_limite}</td>
                            <td>
                              <div className="action-buttons">
                                <button className="action-btn settings" onClick={() => handleEditPlan(plan)}>
                                  <Settings size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          )}
        </main>

        <footer className="dashboard-footer">
          <p>© {new Date().getFullYear()} DevCore. Todos los derechos reservados.</p>
        </footer>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>
                {modalType === "view" ? "Detalles del Usuario" :
                  modalType === "edit" ? "Editar Usuario" :
                    "Editar Plan"}
              </h2>
              <button className="close-btn" onClick={handleCloseModal}>
                <X size={24} />
              </button>
            </div>

            <div className="modal-body">
              {modalType === "view" && selectedUser && (
                <>
                  <div className="user-profile-header">
                    {selectedUser.profilePictureUrl ? (
                      <img src={selectedUser.profilePictureUrl} alt={selectedUser.name} className="large-avatar" />
                    ) : (
                      <div className="large-avatar-placeholder">{selectedUser.name?.charAt(0)}</div>
                    )}
                    <div className="user-header-info">
                      <h3>{selectedUser.name}</h3>
                      <p>{selectedUser.email}</p>
                    </div>
                  </div>
                  <div className="user-details-grid">
                    <div className="detail-item">
                      <label>ID Usuario</label>
                      <p>{selectedUser.id}</p>
                    </div>
                    <div className="detail-item">
                      <label>Estado</label>
                      <span className={`status ${selectedUser.estado === "activo" ? "active" : "inactive"}`}>
                        {selectedUser.estado}
                      </span>
                    </div>
                    <div className="detail-item">
                      <label>Plan de Suscripción</label>
                      <p>{selectedUser.subscriptionPlan}</p>
                    </div>
                    <div className="detail-item">
                      <label>Fecha de Registro</label>
                      <p>{new Date(selectedUser.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                </>
              )}

              {modalType === "edit" && selectedUser && (
                <div className="edit-form">
                  <div className="form-group">
                    <label>Estado</label>
                    <select
                      value={editFormData.estado}
                      onChange={(e) => setEditFormData({ ...editFormData, estado: e.target.value })}
                    >
                      <option value="activo">Activo</option>
                      <option value="inactivo">Inactivo</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Plan de Suscripción</label>
                    <select
                      value={editFormData.subscriptionPlan}
                      onChange={(e) => setEditFormData({ ...editFormData, subscriptionPlan: e.target.value })}
                    >
                      <option value="basico">Basico</option>
                      <option value="familiar">Familiar</option>
                      <option value="pro">Pro</option>
                    </select>
                  </div>

                  <div className="modal-actions">
                    <button className="btn-delete" onClick={handleDeleteUser}>
                      <Trash2 size={18} /> Eliminar Usuario
                    </button>
                    <button className="btn-save" onClick={handleSaveChanges}>
                      <Save size={18} /> Guardar Cambios
                    </button>
                  </div>
                </div>
              )}

              {modalType === "editPlan" && selectedPlan && (
                <div className="edit-form">
                  <div className="form-group">
                    <label>Nombre del Plan</label>
                    <input
                      type="text"
                      value={selectedPlan.nombre}
                      disabled
                      style={{ backgroundColor: '#f3f4f6', cursor: 'not-allowed' }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Límite de Grupos</label>
                    <input
                      type="number"
                      value={editPlanData.grupos_limite}
                      onChange={(e) => setEditPlanData({ ...editPlanData, grupos_limite: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Límite de Personas</label>
                    <input
                      type="number"
                      value={editPlanData.personas_limite}
                      onChange={(e) => setEditPlanData({ ...editPlanData, personas_limite: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Límite de OCR</label>
                    <input
                      type="number"
                      value={editPlanData.ocr_limite}
                      onChange={(e) => setEditPlanData({ ...editPlanData, ocr_limite: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Límite de Reportes</label>
                    <input
                      type="number"
                      value={editPlanData.reporte_limite}
                      onChange={(e) => setEditPlanData({ ...editPlanData, reporte_limite: e.target.value })}
                    />
                  </div>

                  <div className="modal-actions">
                    <button className="btn-save" onClick={handleSaveChanges} style={{ width: '100%' }}>
                      <Save size={18} /> Guardar Cambios
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;