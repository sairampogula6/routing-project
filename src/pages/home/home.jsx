import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to My Website</h1>
        <p>
          We build modern, responsive, and user-friendly web applications
          using the latest technologies.
        </p>
        <button>Get Started</button>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          We are a passionate team focused on creating high-quality web
          solutions. Our goal is to help businesses grow digitally with
          reliable and scalable applications.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>

        <div className="services">
          <div className="card">
            <h3>Web Development</h3>
            <p>
              Building responsive and fast websites using modern frameworks
              like React.
            </p>
          </div>

          <div className="card">
            <h3>UI/UX Design</h3>
            <p>
              Designing clean and intuitive interfaces that improve user
              experience.
            </p>
          </div>

          <div className="card">
            <h3>Maintenance</h3>
            <p>
              Providing continuous support, updates, and performance
              optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-section">
        <h2>Let’s Work Together</h2>
        <p>Have a project in mind? We’d love to hear from you.</p>
        <Link to="/contact"><button>Contact Us</button></Link>
      </section>

    </div>
  );
}

export default Home;
