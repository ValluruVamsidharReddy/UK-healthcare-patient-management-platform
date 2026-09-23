import { useState } from "react";
import {
  Eye,
  EyeOff,
  Lock,
  User,
  Calendar,
  Shield,
  Stethoscope,
} from "lucide-react";
import API from "../services/api";
import "./Login.css";
import loginBg from "../assets/login-bg.png";
import HealthcareLogo from "./HealthcareLogo";

function Login({ setLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await API.post("/auth/login", {
        username,
        password,
      });

      localStorage.setItem("token", response.data.token);
      setLoggedIn(true);
    } catch (err) {
      if (err.response?.status === 401) {
        setError("Invalid username or password.");
      } else if (err.response?.status === 403) {
        setError("Access denied.");
      } else {
        setError("Unable to connect to the server.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      {/* LEFT PANEL */}
      <div
        className="left-panel"
        style={{
          backgroundImage: `linear-gradient(rgba(240,247,255,.55), rgba(240,247,255,.62)), url(${loginBg})`,
        }}
      >
        <div className="brand">
          <div className="logo-box">
            <HealthcareLogo size={48} />
          </div>

          <div>
            <h1>UK Healthcare</h1>
            <p>Patient Management Platform</p>
          </div>
        </div>

        <div className="hero-content">
          <h2>
            Better Healthcare
            <br />
            for a <span>Healthier Tomorrow</span>
          </h2>

          <p>
            Delivering secure patient management, seamless appointment
            scheduling, and efficient healthcare services for better patient
            care.
          </p>

          <div className="features">
            <div className="feature">
              <div className="icon-circle">
                <User size={26} color="#005EB8" />
              </div>
              <span>Patient Management</span>
            </div>

            <div className="feature">
              <div className="icon-circle">
                <Calendar size={26} color="#005EB8" />
              </div>
              <span>Appointment Scheduling</span>
            </div>

            <div className="feature">
              <div className="icon-circle">
                <Stethoscope size={26} color="#005EB8" />
              </div>
              <span>Doctor Management</span>
            </div>

            <div className="feature">
              <div className="icon-circle">
                <Shield size={26} color="#005EB8" />
              </div>
              <span>Secure & Reliable</span>
            </div>
          </div>
        </div>

        <div className="footer-left">Trusted Healthcare. Better Lives.</div>
      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">
        <div className="login-card">
          <div className="login-header">
            <div className="login-logo">
              <HealthcareLogo size={56} />
            </div>

            <h2>UK Healthcare</h2>
            <p>Patient Management Platform</p>
          </div>

          <hr />

          <h3>Sign In</h3>

          <p className="subtitle">Access your account to continue</p>

          <form onSubmit={handleLogin}>
            <label>Username</label>

            <div className="input-group">
              <User size={18} className="input-icon" />

              <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <label>Password</label>

            <div className="input-group">
              <Lock size={18} className="input-icon" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff size={18} color="#374151" />
                ) : (
                  <Eye size={18} color="#374151" />
                )}
              </button>
            </div>

            <button type="submit" className="signin-btn" disabled={loading}>
              {loading ? "Signing In..." : "Sign In →"}
            </button>
          </form>

          {error && <p className="error">{error}</p>}

          <a href="#" className="forgot">
            Forgot Password?
          </a>

          <div className="secure-note">
            Secure access for authorized healthcare staff.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
