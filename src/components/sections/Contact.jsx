import { useState } from "react";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon
import emailjs from "emailjs-com"; // Import EmailJS

import user_info from "../../data/user_info.js";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const serviceId = "service_sfzwg9m"; // Replace with your EmailJS service ID
    const templateId = "template_hjua1s5"; // Replace with your EmailJS template ID
    const publicKey = "6rStmGEfTP4qhQOLR"; // Replace with your EmailJS publicKey
  
    emailjs
      .send(serviceId, templateId, formData, publicKey) // Use publicKey instead of userId
      .then(() => {
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" });
  
        // Set a timeout to hide the success message
        setTimeout(() => {
          setIsSent(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("EmailJS error:", error); // Log the error for debugging
        setError("Failed to send message. Please try again later.");
      });
  
    e.target.reset();
  };
  
  return (
    <section
      id="contact"
      className="mt-16 pt-12 px-6 lg:px-24 flex flex-col lg:flex-row"
    >
      {/* =========== LEFT SECTION =========== */}
      <div className="lg:w-[60%]">
        <h4 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100">
          <span className="text-red-800 dark:text-red-500">Contact Me</span>
        </h4>

        <p className="mt-8 leading-7 text-base text-zinc-600 dark:text-zinc-300 font-light">
          {user_info.contact.description}
        </p>

        <div className="mt-12">
          <a
            href={user_info.socials.linkedin}
            className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
          >
            <FaLinkedin className="self-center text-lg text-red-800 dark:text-red-500" />
            <span className="self-center">Follow on Linkedin</span>
          </a>

          <a
            href={user_info.socials.github}
            className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
          >
            <FaGithub className="self-center text-lg text-red-800 dark:text-red-500" />
            <span className="self-center">Follow on GitHub</span>
          </a>

          <a
            href={user_info.socials.instagram}
            className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
          >
            <FaInstagram className="self-center text-lg text-red-800 dark:text-red-500" />
            <span className="self-center">Follow on Instagram</span>
          </a>

          <a
            href={user_info.socials.twitter}
            className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
          >
            <FaSquareXTwitter className="self-center text-lg text-red-800 dark:text-red-500" />
            <span className="self-center">Follow on X</span>
          </a>
        </div>

        <hr className="mt-6 w-72 border dark:border-zinc-800" />

        <a
          href={`mailto:${user_info.main.email}`}
          className="flex mt-6 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 gap-4 hover:text-zinc-700 transition-all duration-300"
        >
          <MdEmail className="self-center text-lg text-red-800 dark:text-red-500" />
          <span>{user_info.main.email}</span>
        </a>
      </div>

      {/* =========== RIGHT SECTION - CONTACT FORM =========== */}
      <div className="lg:w-[35%] mt-24 lg:mt-8 lg:ml-12 bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-lg">
        <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
          Send a Message
        </h4>

        {isSent && (
          <p className="text-green-500 mb-4">Message sent successfully!</p>
        )}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-zinc-900 dark:text-zinc-100 text-sm mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-zinc-100 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-red-800 dark:focus:ring-red-500 transition-all duration-300"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-zinc-900 dark:text-zinc-100 text-sm mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-zinc-100 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-red-800 dark:focus:ring-red-500 transition-all duration-300"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-zinc-900 dark:text-zinc-100 text-sm mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-zinc-100 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-red-800 dark:focus:ring-red-500 transition-all duration-300"
              rows="2"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-800 text-white py-2 rounded-md hover:bg-red-700 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
