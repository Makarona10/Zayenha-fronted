"use client";

import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactUsPage() {
  const [form, setForm] = useState({
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", form);
    alert("تم إرسال رسالتك بنجاح!");
    setForm({ email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-primary-50 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-4xl p-8 grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-primary-700 mb-6">اتصل بنا</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-primary-700 mb-1"
              >
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="example@email.com"
                className="border rounded-lg p-3 w-full focus:outline-primary-400 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-primary-700 mb-1"
              >
                رسالتك
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="أكتب رسالتك هنا..."
                className="border rounded-lg p-3 w-full focus:outline-primary-400"
              />
            </div>

            <button
              type="submit"
              className="bg-primary-400 hover:bg-primary-500 text-white w-full py-3 rounded-lg font-semibold transition-colors"
            >
              إرسال الرسالة
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-primary-100 rounded-xl p-6 flex flex-col justify-center items-center">
          <h3 className="text-xl font-semibold text-primary-800 mb-4">
            طرق التواصل الأخرى
          </h3>

          <div className="flex items-center gap-3 mb-4">
            <FaPhoneAlt className="text-primary-600 text-lg" />
            <span className="text-primary-800 text-sm" dir="ltr">
              +20 100 123 4567
            </span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <FaWhatsapp className="text-green-600 text-lg" />
            <a
              href="https://wa.me/201001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-800 hover:text-primary-600 text-sm transition-colors"
            >
              تواصل عبر واتساب
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-primary-600 text-lg" />
            <span className="text-primary-800 text-sm">
              support@example.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
