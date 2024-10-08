"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const SERVICE_ID = "service_01q5zu8";

const TEMPLATE_ID = "template_4r92ld6";

const PUBLIC_KEY = "NZLAGENzmobIDTBSN";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleOnSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const form = e.currentTarget;

    try {
      setLoading(true);
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.currentTarget,
        PUBLIC_KEY
      );
      setLoading(false);
      toast.success("Email sent successfully!", { position: "bottom-right" });
      form.reset();
    } catch (error) {
      toast.error("Failed to send email!", { position: "bottom-right" });
      setLoading(false);
      console.log("error", error);
    }
  };
  return (
    <div className="flex flex-col rounded-xl border border-gray-300 p-4  sm:p-6 lg:p-8">
      <h2 className="mb-8 text-2xl font-semibold text-gray-900 ">
        Send us an email
      </h2>

      <form onSubmit={handleOnSubmit}>
        <div className="grid gap-4">
          <div>
            <label htmlFor="hs-full-name-1" className="sr-only">
              Full Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:border-gray-400 focus:ring-gray-400     -600"
              placeholder="Full name"
            />
          </div>

          <div>
            <label htmlFor="hs-email-contacts-1" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              required
              autoComplete="email"
              className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:border-gray-400 focus:ring-gray-400     -600"
              placeholder="Email"
            />
          </div>

          <div>
            <label htmlFor="hs-about-contacts-1" className="sr-only">
              Details
            </label>
            <textarea
              name="message"
              required
              minLength={5}
              rows={5}
              className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:border-gray-400 focus:ring-gray-400 "
              placeholder="Details"
            ></textarea>
          </div>
        </div>

        <div className="mt-4 grid">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg bg-green-600 px-4 py-3 text-sm font-medium text-gray-50 hover:bg-gray-300 focus:bg-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-600   -400"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
