import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../App.css"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            alert("Login successful!");
            console.log(data);

            // Store the token in localStorage (if returned by the server)
            // Example: localStorage.setItem("token", data.token); // Adjust based on your server's response

            // Navigate to the Trading page
            navigate("/trading");
        } else {
            alert("Login failed: " + data.message);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleLogin} className="form">
                <h2>Login</h2>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
