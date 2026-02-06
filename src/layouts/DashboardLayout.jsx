import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import { useContext } from "react";
import { Context } from "../Context/Context";

function DashboardLayout() {
  const isAuthenticated = localStorage.getItem("token");

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Changing Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
