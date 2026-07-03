import React, { useState } from 'react'

const contactInfo = [
  {
    label: "Email us",
    value: "support@fashionhub.com",
    icon: (
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    ),
  },
  {
    label: "Call us",
    value: "+91 98765 43210",
    icon: (
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    ),
  },
  {
    label: "Visit us",
    value: "123 Fashion Street, Bandra West, Mumbai 400050",
    icon: (
      <>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </>
    ),
  },
];

const inputClasses =
  "block w-full rounded-base border border-default bg-neutral-primary p-2.5 text-sm text-heading placeholder:text-body focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-medium";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-2 py-0.5 rounded-sm">
            Get in touch
          </span>
          <h2 className="mt-4 text-4xl font-bold text-heading">Contact us</h2>
          <p className="mt-3 text-body">
            Have a question about an order, sizing or styling? Send us a message
            and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 bg-neutral-primary-soft border border-default rounded-base shadow-xs p-5"
              >
                <div className="flex items-center justify-center w-11 h-11 shrink-0 rounded-base bg-brand-softer text-fg-brand-strong">
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-heading uppercase">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-body">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-neutral-primary-soft border border-default rounded-base shadow-xs p-6 sm:p-8"
          >
            {submitted && (
              <div className="mb-6 flex items-center gap-2 rounded-base border border-brand-subtle bg-brand-softer px-4 py-3 text-sm text-fg-brand-strong">
                <svg
                  className="w-5 h-5 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                Thanks for reaching out! We&apos;ll get back to you shortly.
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-heading"
                >
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className={inputClasses}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-heading"
                >
                  Your email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-heading"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={form.subject}
                onChange={handleChange}
                placeholder="How can we help you?"
                className={inputClasses}
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-heading"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className={inputClasses}
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center rounded-base bg-brand px-5 py-2.5 text-sm font-medium text-white shadow-xs border border-transparent hover:bg-brand-strong focus:outline-none focus:ring-4 focus:ring-brand-medium"
            >
              Send message
              <svg
                className="w-4 h-4 ms-1.5 -me-0.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact