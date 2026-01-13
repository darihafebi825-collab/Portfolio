import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
// import { Instagram, Github, MessageCircle, Linkedin, Twitter } from "lucide-react";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    const serviceID = "service_stzkywj";
    const templateID = "template_ocw8v3b";
    const publicKey = "2Wv7wNoI-2cp1B0Ui";

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(
        (response) => {
          console.log("✅ SUCCESS!", response.status, response.text);
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("❌ FAILED...", error);
          alert("❌ Failed to send message. Please check console for details.");
        }
      );
  };

  return (
    <div className="contact-wrapper">
      <h2>Contact Me</h2>
      <div className="contact-grid">
        {/* Left: Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Right Info Box */}
        <div className="contact-box">
          <div className="box-header">
            <h2>Get in Touch </h2><h4>@ darihafebi825@gmail.com</h4>
          </div>
          <p>
            I would love to hear from you! Please fill out the form.
            If you would like me to work on your projects, feel free to get in touch.
            I will be available immediately.
          </p>
           {/* <div className="icons-wrapper">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <Instagram className="icon" />
      </a>

      <a href="#" target="_blank" rel="noopener noreferrer">
        <Github className="icon" />
      </a>

      <a href="#" target="_blank" rel="noopener noreferrer">
        <MessageCircle className="icon" />
      </a>

      <a href="#" target="_blank" rel="noopener noreferrer">
        <Linkedin className="icon" />
      </a>

      <a href="#" target="_blank" rel="noopener noreferrer">
        <Twitter className="icon" />
      </a>
    </div> */}

        </div>
      </div>
    </div>
  );
};

export default Contact;

