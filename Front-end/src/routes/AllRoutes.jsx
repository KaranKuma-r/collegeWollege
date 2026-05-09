import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Books from "../pages/Books";
import ActiveBorrow from "../pages/ActiveBorrow";
import BorrowHistory from "../pages/BorrowHistory";
import Payments from "../pages/Payments";
import Profile from "../pages/Profile";
import ProtectedRoute from "../components/ProtectedRoute";

function AllRoutes() {

    return (
        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<Signup />} />

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/books"
                element={
                    <ProtectedRoute>
                        <Books />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/active"
                element={
                    <ProtectedRoute>
                        <ActiveBorrow />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/history"
                element={
                    <ProtectedRoute>
                        <BorrowHistory />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/payments"
                element={
                    <ProtectedRoute>
                        <Payments />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/profile"
                element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                }
            />

        </Routes>
    );
}

export default AllRoutes;