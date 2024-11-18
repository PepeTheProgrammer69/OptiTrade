import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Trading from "./components/Trading"; // Import the Trading component
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute

const App = () => {
    return (
        <Router>
            <div>
                <Header />

                {/* Routes to handle Main, Login, Signup, and Trading pages */}
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    {/* Use ProtectedRoute for the Trading page */}
                    <Route path="/trading" element={<ProtectedRoute element={Trading} />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    );
};

export default App;
