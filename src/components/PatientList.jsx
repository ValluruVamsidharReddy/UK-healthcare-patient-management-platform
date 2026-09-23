import { useEffect, useState } from "react";
import API from "../services/api";
import "./PatientList.css";

function PatientList({ setLoggedIn }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [message, setMessage] = useState("");

  useEffect(() => {
    API.get("/api/admin/dashboard")
      .then((res) => setMessage(res.data))
      .catch(() => setMessage("Unable to load dashboard"));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  const appointments = [
    {
      id: "APT001",
      patient: "John Smith",
      doctor: "Dr. Wilson",
      time: "10:00 AM",
      status: "Scheduled",
    },
    {
      id: "APT002",
      patient: "Emma Brown",
      doctor: "Dr. Adams",
      time: "11:30 AM",
      status: "Completed",
    },
    {
      id: "APT003",
      patient: "Oliver Jones",
      doctor: "Dr. Clark",
      time: "2:00 PM",
      status: "Scheduled",
    },
  ];

  return (
    <div className="dashboard-page">
      <header className="topbar">
        <div className="logo">UK HealthCare</div>

        <div className="title">Patient Management Platform</div>

        <div className="top-right">
          <div className="user">
            <strong>Admin User</strong>
            <span>Administrator</span>
          </div>

          <button className="signout" onClick={logout}>
            Sign Out
          </button>
        </div>
      </header>

      <main className="container">
        <div className="header-row">
          <div>
            <h1>Admin Dashboard</h1>
            <p>Manage patients, appointments and hospital statistics.</p>
          </div>

          <div className="tabs">
            <button
              className={activeTab === "overview" ? "active" : ""}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>

            <button
              className={activeTab === "appointments" ? "active" : ""}
              onClick={() => setActiveTab("appointments")}
            >
              Appointments
            </button>
          </div>
        </div>

        {activeTab === "overview" && (
          <>
            <div className="stats-grid">
              <div className="card blue">
                <p>Total Doctors</p>
                <h2>5</h2>
              </div>

              <div className="card green">
                <p>Today's Appointments</p>
                <h2>3</h2>
              </div>

              <div className="card purple">
                <p>Upcoming Patients</p>
                <h2>24</h2>
              </div>

              <div className="card lightblue">
                <p>Departments</p>
                <h2>5</h2>
              </div>
            </div>

            <div className="status-grid">
              <div className="status-card">
                <h3>Scheduled</h3>
                <h2>30</h2>
              </div>

              <div className="status-card">
                <h3>Completed</h3>
                <h2 className="success">17</h2>
              </div>

              <div className="status-card">
                <h3>Cancelled</h3>
                <h2 className="danger">3</h2>
              </div>
            </div>

            <div className="api-status">
              <strong>Backend Status:</strong> {message}
            </div>
          </>
        )}

        {activeTab === "appointments" && (
          <div className="table-card">
            <h2>Patient Appointments</h2>

            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Patient</th>
                  <th>Doctor</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {appointments.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.patient}</td>
                    <td>{item.doctor}</td>
                    <td>{item.time}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}

export default PatientList;
