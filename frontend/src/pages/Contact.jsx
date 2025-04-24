import React, { useState } from 'react';
import { assets } from '../assets/assets';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    // Using EmailJS to send the email
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (response) => {
          setSuccess('✅ Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (err) => {
          setError('❌ Oops! Something went wrong.');
          console.log(err);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text and Image on Left */}
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center md:text-left">
            Get in Touch
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Welcome to <span className="text-blue-600 font-bold">BlogWeb</span> — a space to share your thoughts with the world.
            We believe in the power of stories and words to connect people and inspire change.
            <br /><br />
            Whether you have a question, a suggestion, or just want to say hi — we'd love to hear from you!
          </p>
          <img
            src={assets.contact}
            alt="Contact illustration"
            className="rounded-lg shadow-md w-full max-w-md mx-auto md:mx-0"
          />
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Send Us a Message</h2>

          {/* Success/Error Message */}
          {success && (
            <div className="text-center mb-4 text-sm font-medium text-green-500">
              {success}
            </div>
          )}
          {error && (
            <div className="text-center mb-4 text-sm font-medium text-red-500">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
