import React from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate instead of useHistory

const Header = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login"); // Use navigate to redirect to login page
    };

    return (
        <header className="flex justify-between py-7 px-20">
            <h1 className="font-semibold text-4xl text-black">OptiTrade</h1>
            <nav className="flex gap-16">
                <Link to="/" className="font-montserrat text-2xl font-semibold text-black no-underline">Home</Link>
                <Link to="/trading" className="font-montserrat text-2xl font-semibold text-black no-underline">Trading</Link>
                <Link to="/market" className="font-montserrat text-2xl font-semibold text-black no-underline">Market</Link>
                <Link to="/learn" className="font-montserrat text-2xl font-semibold text-black no-underline">Learn</Link>
                <Link to="/about" className="font-montserrat text-2xl font-semibold text-black no-underline">About</Link>
            </nav>
            <div className="flex gap-3">
                {token ? (
                    // If logged in, show Logout button
                    <button
                        className="w-32 h-11 rounded-full border border-black font-semibold text-lg bg-white"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                ) : (
                    // If not logged in, show Login and Signup buttons
                    <>
                        <Link to="/login">
                            <button className="w-32 h-11 rounded-full border border-black font-semibold text-lg bg-white">
                                Log in
                            </button>
                        </Link>
                        <Link to="/signup">
                            <button className="w-32 h-11 rounded-full border border-white font-semibold text-lg bg-black text-white">
                                Sign up
                            </button>
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
