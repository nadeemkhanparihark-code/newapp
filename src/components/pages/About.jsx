import React from "react";
import { Link } from "react-router-dom";

const stats = [
  { value: "10K+", label: "Happy customers" },
  { value: "500+", label: "Unique designs" },
  { value: "25+", label: "Cities served" },
  { value: "4.9/5", label: "Average rating" },
];

const values = [
  {
    title: "Authentic designs",
    description:
      "Every piece is rooted in rich Indian heritage and reimagined for the modern celebration.",
    path: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
  },
  {
    title: "Premium quality",
    description:
      "Hand-finished tailoring and carefully sourced fabrics that look stunning and last for years.",
    path: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z",
  },
  {
    title: "Customer first",
    description:
      "From sizing help to easy returns, our team goes the extra mile so you shop with total confidence.",
    path: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
  },
];

const team = [
  { name: "Aarav Mehta", role: "Founder & Creative Director", initials: "AM" },
  { name: "Priya Sharma", role: "Head of Design", initials: "PS" },
  { name: "Rohan Kapoor", role: "Operations Lead", initials: "RK" },
  { name: "Neha Verma", role: "Customer Happiness", initials: "NV" },
];

export default function About() {
  return (
    <section className="py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-2 py-0.5 rounded-sm">
              Our story
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-heading">
              Celebrating tradition, tailored for today
            </h2>
            <p className="mt-4 text-body">
              Fashion Hub began with a simple belief: every celebration
              deserves outfits that feel as special as the moment itself. What
              started as a small family tailoring studio has grown into a
              destination for premium Indian ethnic and celebration wear.
            </p>
            <p className="mt-3 text-body">
              From hand-finished sherwanis to contemporary fusion pieces, we
              blend timeless craftsmanship with modern design so you always look
              and feel your best.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-base bg-brand px-5 py-2.5 text-sm font-medium text-white shadow-xs border border-transparent hover:bg-brand-strong focus:outline-none focus:ring-4 focus:ring-brand-medium"
              >
                Explore our services
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-base bg-neutral-primary px-5 py-2.5 text-sm font-medium text-heading shadow-xs border border-default hover:bg-neutral-secondary-soft focus:outline-none focus:ring-4 focus:ring-neutral-tertiary"
              >
                Get in touch
              </Link>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80"
              alt="Fashion Hub celebration wear collection"
              className="w-full max-h-[420px] object-cover rounded-base border border-default shadow-xs"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-neutral-primary-soft border border-default rounded-base shadow-xs p-6 text-center"
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-fg-brand-strong">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-body">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-heading">What we stand for</h2>
          <p className="mt-3 text-body">
            The values that shape every stitch, every design and every order we
            deliver.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-neutral-primary-soft border border-default rounded-base shadow-xs p-6"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-base bg-brand-softer text-fg-brand-strong">
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d={value.path}
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-heading">
                {value.title}
              </h3>
              <p className="text-body">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-heading">Meet the team</h2>
          <p className="mt-3 text-body">
            The passionate people behind your favourite celebration looks.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-neutral-primary-soft border border-default rounded-base shadow-xs p-6 text-center"
            >
              <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-brand text-white text-lg font-semibold">
                {member.initials}
              </div>
              <h3 className="mt-4 text-base font-semibold text-heading">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-body">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}