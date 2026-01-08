"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    website: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus({
        type: "error",
        message: "Please fix the errors in the form",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      setSubmitStatus({
        type: "success",
        message:
          "Thank you for your inquiry! We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        website: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Sorry, something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Image */}
            <div className="hidden lg:block">
              <img
                src="https://ext.same-assets.com/3350946252/1490680025.png"
                alt="Contact Us"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Form */}
            <div className="p-8 md:p-12">
              <p className="text-sm text-gray-600 mb-6">
                <strong>
                  Please kindly send your inquiry to Sales@tuergarment.com, we
                  will get back to you in 24 hours
                </strong>
              </p>

              {submitStatus.type && (
                <div
                  className={`mb-6 p-4 rounded animate-fade-in ${
                    submitStatus.type === "success"
                      ? "bg-green-100 text-green-800 border border-green-300"
                      : "bg-red-100 text-red-800 border border-red-300"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First"
                        className={`w-full px-4 py-2 border rounded focus:outline-none focus:border-[#FF6B35] transition-colors ${
                          errors.firstName ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      <span className="text-xs text-gray-500 mt-1 block">
                        First
                      </span>
                      {errors.firstName && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.firstName}
                        </span>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last"
                        className={`w-full px-4 py-2 border rounded focus:outline-none focus:border-[#FF6B35] transition-colors ${
                          errors.lastName ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      <span className="text-xs text-gray-500 mt-1 block">
                        Last
                      </span>
                      {errors.lastName && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.lastName}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Phone/Whatsapp */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone/Whatsapp# <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="country code + phone number"
                    className={`w-full px-4 py-2 border rounded focus:outline-none focus:border-[#FF6B35] transition-colors ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Please provide your WhatsApp number if possible so we can
                    communicate with you directly.
                  </p>
                  {errors.phone && (
                    <span className="text-xs text-red-500 mt-1 block">
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded focus:outline-none focus:border-[#FF6B35] transition-colors ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500 mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Website */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#FF6B35] transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-2 border rounded focus:outline-none focus:border-[#FF6B35] transition-colors ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-500 mt-1 block">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-[#FF6B35] hover:bg-[#ff8555] text-white font-semibold py-3 px-6 rounded transition-all ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.02]"
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Submit!"}
                  </button>
                </div>

                <p className="text-xs text-gray-500">
                  This site is protected by reCAPTCHA and the Google Privacy
                  Policy and Terms of Service apply.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
