"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (successMessage || errorMessage) {
      timeoutId = setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 3000);
    }

    return () => clearTimeout(timeoutId);
  }, [successMessage, errorMessage]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await axios.post("/api/contacts", formData);

      if (response.status === 200) {
        setSuccessMessage("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setErrorMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <form name="contact-form" onSubmit={handleSubmit}>
        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3 mt-2">
            <label
              htmlFor="firstName"
              className="block text-base font-semibold leading-6 text-base-content"
            >
              First name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-accent-content bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="sm:col-span-3 mt-2">
            <label
              htmlFor="lastName"
              className="block text-base font-semibold leading-6 text-base-content"
            >
              Last name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="family-name"
                placeholder="Last name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-accent-content bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="sm:col-span-2 mt-2">
          <label
            htmlFor="email"
            className="block text-base font-semibold leading-6 text-base-content"
          >
            Email
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="contact@mail.com"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-accent-content bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="sm:col-span-2 mt-2">
          <label
            htmlFor="subject"
            className="block text-base font-semibold leading-6 text-base-content"
          >
            Subject
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="subject"
              id="subject"
              autoComplete="subject"
              placeholder="Write your subject"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-accent-content bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="sm:col-span-2 mt-2">
          <label
            htmlFor="message"
            className="block text-base font-semibold leading-6 text-base-content"
          >
            Message
          </label>
          <div className="mt-1">
            <textarea
              name="message"
              id="message"
              rows={4}
              placeholder="Write your message"
              className="resize-none block w-full rounded-md border-0 px-3.5 py-2 text-base text-accent-content bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="sm:col-span-2 flex justify-center mt-5">
          <button
            type="submit"
            className="mt-2 btn h-[1rem] w-[10rem] btn-warning text-warning-content hover:text-primary-content hover:bg-primary border-0 ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-300"
            disabled={isSubmitting}
          >
            <span className="text-base">
              {isSubmitting ? "Sending..." : "Send Message"}
            </span>
          </button>
        </div>
      </form>
      {successMessage && (
        <div className="toast toast-end">
          <div className="alert alert-success">
            <div>
              <span>{successMessage}</span>
            </div>
          </div>
        </div>
      )}
      {errorMessage && (
        <div className="toast toast-end">
          <div className="alert alert-error">
            <div>
              <span>{errorMessage}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactForm;
