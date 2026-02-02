import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

function DashboardLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-6 bg-gray-100">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;