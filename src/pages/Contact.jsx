import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import toast from "react-hot-toast";
import PageTitle from "../components/PageTitle";
import Breadcrumb from "../components/Breadcrumb";
import { sendContactMessageApi } from "../api/contactApi";
import "../css/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response =
        await sendContactMessageApi(formData);

      toast.success(response.message);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {

      console.log(error);

      toast.error(
        error.response?.data?.message ||
        "Failed to send message"
      );

    }
  }

  return (
    <>
      <PageTitle title="Contact" />

      <Breadcrumb current="Contact" />

      <div className="contact-page">

        <section className="contact-hero">

          <h1>Contact Us</h1>

          <p>
            We'd love to hear from you. Get in touch with us anytime.
          </p>

        </section>

        <section className="contact-container">

          <div className="contact-info">

            <h2>Get In Touch</h2>

            <p>
              Have questions about our furniture or need assistance?
              Our team is always ready to help.
            </p>

            <div className="info-item">
              <MapPin />
              <div>
                <h4>Address</h4>
                <p>Pune, Maharashtra, India</p>
              </div>
            </div>

            <div className="info-item">
              <Phone />
              <div>
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="info-item">
              <Mail />
              <div>
                <h4>Email</h4>
                <p>support@furnihome.com</p>
              </div>
            </div>

            <div className="info-item">
              <Clock />
              <div>
                <h4>Business Hours</h4>
                <p>Mon - Sat : 9:00 AM - 7:00 PM</p>
              </div>
            </div>

          </div>

          <div className="contact-form">

            <h2>Send Message</h2>

            <form onSubmit={handleSubmit}>

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

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit">
                Send Message
              </button>

            </form>

          </div>

        </section>

      </div>
    </>
  );
}

export default Contact;