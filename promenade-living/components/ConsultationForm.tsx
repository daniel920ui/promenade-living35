"use client";

import { FormEvent, useState } from "react";

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const values = Object.fromEntries(form.entries()) as Record<string, string>;
    const nextErrors: Record<string, string> = {};

    if (!values.fullName || String(values.fullName).trim().length < 2) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!values.phone || String(values.phone).trim().length < 8) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!values.email || !/\S+@\S+\.\S+/.test(String(values.email))) {
      nextErrors.email = "Please provide a valid email address.";
    }

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <form id="consultation" onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-xs font-medium uppercase tracking-[0.18em] text-[#f3e9dc]">
            Full Name *
          </label>
          <input id="fullName" name="fullName" className="w-full rounded-2xl border border-[#4f4136] bg-[#110f0f]/50 px-4 py-3 text-sm text-[#f6efe9] outline-none ring-0 placeholder:text-[#d7c5b0] focus:border-[#b99265]" placeholder="Your name" />
          {errors.fullName && <p className="text-xs text-[#f6b59d]">{errors.fullName}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-xs font-medium uppercase tracking-[0.18em] text-[#f3e9dc]">
            Phone Number *
          </label>
          <input id="phone" name="phone" className="w-full rounded-2xl border border-[#4f4136] bg-[#110f0f]/50 px-4 py-3 text-sm text-[#f6efe9] outline-none focus:border-[#b99265]" placeholder="+91 00000 00000" />
          {errors.phone && <p className="text-xs text-[#f6b59d]">{errors.phone}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-medium uppercase tracking-[0.18em] text-[#f3e9dc]">
            Email *
          </label>
          <input id="email" type="email" name="email" className="w-full rounded-2xl border border-[#4f4136] bg-[#110f0f]/50 px-4 py-3 text-sm text-[#f6efe9] outline-none focus:border-[#b99265]" placeholder="you@example.com" />
          {errors.email && <p className="text-xs text-[#f6b59d]">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="city" className="text-xs font-medium uppercase tracking-[0.18em] text-[#f3e9dc]">
            City
          </label>
          <input id="city" name="city" className="w-full rounded-2xl border border-[#4f4136] bg-[#110f0f]/50 px-4 py-3 text-sm text-[#f6efe9] outline-none focus:border-[#b99265]" placeholder="Your city" />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label htmlFor="requirement" className="text-xs font-medium uppercase tracking-[0.18em] text-[#f3e9dc]">
            Requirement
          </label>
          <select id="requirement" name="requirement" className="w-full rounded-2xl border border-[#4f4136] bg-[#110f0f]/50 px-4 py-3 text-sm text-[#f6efe9] outline-none focus:border-[#b99265]">
            <option value="Wardrobe">Wardrobe</option>
            <option value="Kitchen">Kitchen</option>
            <option value="False Ceiling">False Ceiling</option>
            <option value="Exterior">Exterior</option>
            <option value="Complete Interior">Complete Interior</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="budget" className="text-xs font-medium uppercase tracking-[0.18em] text-[#f3e9dc]">
            Estimated Price Range
          </label>
          <select id="budget" name="budget" className="w-full rounded-2xl border border-[#4f4136] bg-[#110f0f]/50 px-4 py-3 text-sm text-[#f6efe9] outline-none focus:border-[#b99265]">
            <option value="Below ₹5 Lakhs">Below ₹5 Lakhs</option>
            <option value="₹5–10 Lakhs">₹5–10 Lakhs</option>
            <option value="₹10–20 Lakhs">₹10–20 Lakhs</option>
            <option value="₹20–30 Lakhs">₹20–30 Lakhs</option>
            <option value="₹30 Lakhs+">₹30 Lakhs+</option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="date" className="text-xs font-medium uppercase tracking-[0.18em] text-[#f3e9dc]">
            Preferred Date
          </label>
          <input id="date" type="date" name="date" className="w-full rounded-2xl border border-[#4f4136] bg-[#110f0f]/50 px-4 py-3 text-sm text-[#f6efe9] outline-none focus:border-[#b99265]" />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label htmlFor="message" className="text-xs font-medium uppercase tracking-[0.18em] text-[#f3e9dc]">
            Message
          </label>
          <textarea id="message" name="message" rows={4} className="w-full rounded-2xl border border-[#4f4136] bg-[#110f0f]/50 px-4 py-3 text-sm text-[#f6efe9] outline-none focus:border-[#b99265]" placeholder="Tell us a little about your project" />
        </div>
      </div>

      <button type="submit" className="inline-flex items-center justify-center rounded-full bg-[#dcb77a] px-6 py-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#1f1a17] transition hover:bg-[#dfc287]">
        Book My Consultation →
      </button>

      {submitted && (
        <p className="rounded-2xl border border-[#7fc9a1] bg-[#123123] px-4 py-3 text-sm text-[#edf9f0]">
          Thank you. Your consultation request has been received. Our team will contact you shortly.
        </p>
      )}
    </form>
  );
}
