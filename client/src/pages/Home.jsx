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

        <div className="hero-image">
          <img src={heroImage} alt="Dashboard Preview" />
        </div>
      </section>
    </div>
  );
};

export default Home;
