import "./About.css";

function About() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          We are dedicated to building reliable, scalable, and user-friendly
          web applications.
        </p>
      </section>

      <section className="about-content">
        <h2>Our Mission</h2>
        <p>
          Our mission is to help businesses and individuals grow by delivering
          high-quality digital solutions using modern technologies.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔ Modern & responsive designs</li>
          <li>✔ Clean and maintainable code</li>
          <li>✔ Performance-focused development</li>
          <li>✔ Continuous support & improvement</li>
        </ul>
      </section>

    </div>
  );
}

export default About;
