import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

function DashboardLayout() {
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