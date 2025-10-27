import "../styles/landingPage.css";
import { useNavigate } from "react-router-dom";
import waveImg from "../assets/wave.svg";

export default function LandingPage() {
    
    const navigate = useNavigate();
    function handleNavigation(e) {
        const wasClicked = e.target.innerText;
        
        if(wasClicked === "Login"){
            navigate("/login");
        } else if (wasClicked === "Get Started"){
            navigate("/signUp");
        }
    }
  return (
    <>
        <nav className="landingPage-nav">
            <div className="nav-logo">
                <h1>tickHandler</h1>
            </div>
            <div className="nav-buttons">
                <button onClick={handleNavigation} type="button">
                    Login
                </button>
                <button onClick={handleNavigation} type="button">
                    Get Started
                </button>
            </div>
        </nav>

        <section id="hero">
            <div className="hero-container">
                <h1>Manage tickets effortlessly anytime,anywhere</h1>
                <p>
                    Streamline your ticket management process with our intuitive platform designed for efficiency and ease of use.
                    managment process made efficient
                </p>
                <div className="hero-button">
                    <button onClick={handleNavigation} type="button">
                        Get Started
                    </button>
                    <button onClick={handleNavigation} type="button">
                        Login
                    </button>
                </div>
                <span>Secure. Fast. Built for you.</span>
            </div>
            <img src={waveImg} alt="" />
        </section>
        <section id="features">
            <div className="feature-intro">
                <h1>Features</h1>
                <p>Explore the powerful features that make ticket management a breeze.</p>
           </div>
            <div className="feature-cards">
                <div className="feature-card">
                    <h2>Create tickets</h2>
                    <p>Description of feature one.</p>
                </div>
                <div className="feature-card">
                    <h2>Edit Tickets</h2>
                    <p>Description of feature two.</p>
                </div>
                <div className="feature-card">
                    <h2>View Tickets</h2>
                    <p>Description of feature three.</p>
                </div>
                <div className="feature-card">
                    <h2>Delete Tickets</h2>
                    <p>Description of feature three.</p>
                </div>
            </div>
        </section>
        <footer>
            <p>&copy; 2024 tickHandler. All rights reserved.</p>
        </footer>
    </>
  )
}