import React from "react";
import "../css/Home.css";
import heroImage from "../images/bg6.jpg";
import { FaTasks, FaUsers, FaChartLine, FaShieldAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      {/* ===== Hero Section ===== */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Manage Your <span className="highlight">Tasks</span> <br /> With
            Ease & Efficiency
          </h1>
          <p>
            Streamline your workflow, collaborate with your team, and boost productivity —
            all in one powerful and secure platform designed for efficiency.
          </p>
        </div>

        {/* ---------------- ABOUT SECTION ---------------- */}
        <div className="about-section">

          <h2 className="about-title">About This Project</h2>

          <p className="about-desc">
            Task Management System ek modern web-based platform hai jo task assign,
            tracking aur reporting ko simple banata hai. Isme Admin tasks assign karta hai
            aur Employee unka status update karte hain. System productivity badhata hai aur
            workflow ko organize karta hai.
          </p>

          <div className="about-content">

            {/* ---- LEFT SECTION: YOUR IMAGE ---- */}
            <div className="about-left">
              <img
                src="/src/assets/jay.png"   // <-- apni image ka naam yaha add karo
                alt="Jay Deshmukh"
                className="creator-img"
              />
              <h3 className="creator-name">👨‍💻 Jay Deshmukh</h3>
              <p className="creator-desc">
                I am a passionate MERN Stack Developer who loves building
                clean, modern and functional web applications.
              </p>

              {/* Social Media */}
              <div className="social-links">
                <a href="https://github.com/jaydeshmukh078" target="_blank">GitHub</a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
                <a href="https://instagram.com/yourprofile" target="_blank">Instagram</a>
              </div>
            </div>

            {/* ---- RIGHT SECTION: DASHBOARD PREVIEW ---- */}
            <div className="about-right">
              <h3 className="dashboard-title">Dashboard Preview</h3>

              <img
                src="/src/assets/dashboard.png"   // <-- dashboard ka screenshot yaha add karo
                alt="Dashboard Preview"
                className="dashboard-img"
              />
            </div>

          </div>
        </div>


        <div className="hero-image">
          <img src={heroImage} alt="Dashboard Preview" />
        </div>
      </section>
    </div>
  );
};

export default Home;
