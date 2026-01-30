import "./App.css";
import RootLayout from "./Layout/RootLayout";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardHome from "./Dashboard/DashboardHome";
import Users from "./Dashboard/Users";
import UserDetails from "./Dashboard/UserDetails";
import Analytics from "./Dashboard/Analytics";
import Settings from "./Dashboard/Settings";
import ProtectedRoute from "./components/ProtectedRoute";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetails />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
