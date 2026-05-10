import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import user_info from "../../data/user_info.js";

function Contact() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: user_info.socials.linkedin,
      icon: FaLinkedinIn,
      iconClass:
        "bg-[#0A66C2]/10 text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white dark:bg-[#0A66C2]/20 dark:text-[#7ab6f2]",
    },
    {
      name: "GitHub",
      href: user_info.socials.github,
      icon: FaGithub,
      iconClass:
        "bg-zinc-900/10 text-zinc-950 group-hover:bg-zinc-950 group-hover:text-white dark:bg-white/10 dark:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-950",
    },
    {
      name: "Instagram",
      href: user_info.socials.instagram,
      icon: FaInstagram,
      iconClass:
        "bg-pink-500/10 text-pink-600 group-hover:bg-gradient-to-br group-hover:from-[#f58529] group-hover:via-[#dd2a7b] group-hover:to-[#8134af] group-hover:text-white dark:bg-pink-400/15 dark:text-pink-300",
    },
    {
      name: "X",
      href: user_info.socials.twitter,
      icon: FaXTwitter,
      iconClass:
        "bg-black/10 text-black group-hover:bg-black group-hover:text-white dark:bg-white/10 dark:text-white dark:group-hover:bg-white dark:group-hover:text-black",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setIsSent(false);
    setIsSending(true);

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${user_info.main.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: "New message from portfolio contact form",
            _captcha: "false",
            _template: "table",
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send message.");
      }

      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    } catch (error) {
      console.error("Contact form error:", error);
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="mt-16 pt-12 px-6 lg:px-24 flex flex-col lg:flex-row"
    >
      <div className="lg:w-[60%]">
        <h4 className="fade-up text-5xl font-bold text-zinc-900 dark:text-zinc-100">
          <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">
            Let&apos;s Build Something Great
          </span>
        </h4>

        <p className="fade-up mt-8 leading-7 text-base text-zinc-600 dark:text-zinc-300 font-light lg:w-[90%]">
          {user_info.contact.description}
        </p>

        <div className="mt-12">
          <div className="flex flex-wrap gap-3">
            {socialLinks.map(({ name, href, icon: Icon, iconClass }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow on ${name}`}
                className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:text-zinc-950 hover:shadow-lg hover:shadow-sky-500/10 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300 dark:hover:border-sky-500/40 dark:hover:bg-zinc-900 dark:hover:text-white"
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full shadow-inner transition-all duration-300 ${iconClass}`}
                >
                  <Icon className="text-base" />
                </span>
                <span>{name}</span>
              </a>
            ))}
          </div>
        </div>

        <hr className="mt-8 w-72 border dark:border-zinc-800" />

        <a
          href={`mailto:${user_info.main.email}`}
          className="group mt-6 inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white/70 px-4 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:text-zinc-950 hover:shadow-lg hover:shadow-sky-500/10 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300 dark:hover:border-sky-500/40 dark:hover:bg-zinc-900 dark:hover:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-sky-100 text-indigo-700 shadow-inner transition-all duration-300 group-hover:from-indigo-500 group-hover:to-sky-400 group-hover:text-white dark:from-indigo-500/15 dark:to-sky-400/15 dark:text-sky-200">
            <MdEmail className="text-base" />
          </span>
          <span>{user_info.main.email}</span>
        </a>
      </div>

      <div className="fade-up lg:w-[35%] mt-24 lg:mt-8 lg:ml-12 bg-white/90 dark:bg-zinc-900/80 p-6 rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-700 backdrop-blur-sm">
        <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
          Send a Message
        </h4>

        {isSent && (
          <p className="text-green-500 mb-4" role="status" aria-live="polite">
            Message sent successfully!
          </p>
        )}
        {error && (
          <p className="text-red-500 mb-4" role="alert" aria-live="assertive">
            {error}
          </p>
        )}

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
            disabled={isSending}
            className="w-full bg-red-800 text-white py-2 rounded-md hover:bg-red-700 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
