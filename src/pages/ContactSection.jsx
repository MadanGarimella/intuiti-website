import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setErrorMsg("");

    try {
      const response = await fetch("https://intuiti-backend.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      

      if (response.ok) {
        setSuccess("Enquiry sent successfully. We'll contact you soon.");
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        setErrorMsg(data.message || "Something went wrong.");
      }
    } catch (error) {
      setErrorMsg("Server not responding. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen px-6 md:px-20 py-32 bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-amber-400/10 to-transparent blur-3xl opacity-40" />

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none bg-[url('/noise.png')]" />

      {/* Large Background Text */}
      <h2 className="absolute top-20 left-1/2 -translate-x-1/2 text-[120px] md:text-[200px] font-extrabold text-transparent stroke-text-white opacity-10 pointer-events-none">
        CONTACT
      </h2>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <p className="uppercase tracking-widest text-sm text-gray-400 mb-4">
              Contact
            </p>
            <h3 className="text-4xl font-bold mb-6">Get in touch</h3>
            <p className="text-gray-400 max-w-md">
              Ready to transform your brand with structured performance
              marketing? Let’s build something scalable.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 flex gap-4">
              <Mail className="text-orange-400" />
              <div>
                <p>Email Us</p>
                <p className="text-gray-400 text-sm">
                  contact@intuiticorporates.com
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 flex gap-4">
              <Phone className="text-orange-400" />
              <div>
                <p>Call Us</p>
                <p className="text-gray-400 text-sm">+91 6305953316</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 flex gap-4">
              <MapPin className="text-orange-400" />
              <div>
                <p>Location</p>
                <p className="text-gray-400 text-sm">Hyderabad, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-400 transition"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-400 transition"
            />

            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-400 transition"
            />

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-400 transition resize-none"
            />

            {success && (
              <p className="text-green-400 text-sm">{success}</p>
            )}

            {errorMsg && (
              <p className="text-red-400 text-sm">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;