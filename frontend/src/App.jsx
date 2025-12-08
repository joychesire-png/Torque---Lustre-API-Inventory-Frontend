import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Layout/Sidebar";
import Header from "./components/Layout/Header";
import Dashboard from "./pages/Dashboard";
import Cars from "./pages/Cars";
import Categories from "./pages/Categories";
import Orders from "./pages/Orders";
import "./App.css";

function App() {
  const [apiStatus, setApiStatus] = useState("checking");

  useEffect(() => {
    checkApiConnection();
  }, []);

  const checkApiConnection = async () => {
    try {
      const response = await fetch("http://localhost:8000/");
      if (response.ok) {
        setApiStatus("connected");
      } else {
        setApiStatus("error");
      }
    } catch (error) {
      setApiStatus("offline");
    }
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header apiStatus={apiStatus} onRefresh={checkApiConnection} />
          <div className="content-area">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/cars" element={<Cars />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
