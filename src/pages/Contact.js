import React, { useState } from "react";
import { FaUser, FaEnvelope, FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import "./../styles/Contact.css"; // Make sure the path is correct

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${formData.name}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact">
      <center>
        <div className="contact-header">
          {/* Image added */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaTOacYkFvwv6pJG8FAgrzu81-gMnukq_U8w&s" // Replace with the image URL you want to use
            alt="Contact"
            className="contact-image"
          />
          <h2 className="contact-title">Contact Me</h2>
        </div>
        <div className="contact-box">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <FaUser />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <FaEnvelope />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="form-control"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
          <div className="social-links">
            <h3>Connect with me:</h3>
            <div>
              <a href="https://github.com/Harinichith" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
            </div>
            <div>
              <a href="https://instagram.com/harini" target="_blank" rel="noopener noreferrer">
                <FaInstagram /> Instagram
              </a>
            </div>
            <div>
              <a href="https://facebook.com/harini" target="_blank" rel="noopener noreferrer">
                <FaFacebook /> Facebook
              </a>
            </div>
            <div>
              <a href="https://linkedin.com/in/harini" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Contact;
