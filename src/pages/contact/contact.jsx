import "./contact.css";

function Contact() {
  return (
    <div className="contact-page">

      <section className="contact-hero">
        <h1>Contact Us</h1>
       
      </section>

      <section className="contact-form">
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

    </div>
  );
}

export default Contact;
