import React from 'react'

const plans = [
  {
    name: "Essential",
    description: "For first-time shoppers exploring our collection.",
    price: "0",
    period: "free forever",
    featured: false,
    cta: "Get started",
    features: [
      "Access to full catalogue",
      "Standard shipping",
      "30-day returns",
      "Email support",
    ],
  },
  {
    name: "Premium",
    description: "For regulars who love staying festive-ready.",
    price: "999",
    period: "per year",
    featured: true,
    cta: "Go Premium",
    features: [
      "Everything in Essential",
      "Free express shipping",
      "Early access to new arrivals",
      "1 free styling session / month",
      "Priority support",
    ],
  },
  {
    name: "Luxe",
    description: "For connoisseurs who want the white-glove treatment.",
    price: "2,499",
    period: "per year",
    featured: false,
    cta: "Go Luxe",
    features: [
      "Everything in Premium",
      "Unlimited custom tailoring",
      "Dedicated personal stylist",
      "Doorstep fitting & alterations",
      "Exclusive members-only events",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-2 py-0.5 rounded-sm">
            Membership plans
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-heading">
            Pricing made simple
          </h2>
          <p className="mt-3 text-body">
            Choose a plan that matches your style. Upgrade, downgrade or cancel
            anytime &mdash; no hidden charges.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-neutral-primary-soft rounded-base shadow-xs p-6 sm:p-8 ${
                plan.featured
                  ? "border-2 border-brand md:-translate-y-2"
                  : "border border-default"
              }`}
            >
              {plan.featured && (
                <span className="absolute top-0 right-6 -translate-y-1/2 inline-flex items-center bg-brand text-white text-xs font-medium px-3 py-1 rounded-base shadow-xs">
                  Most popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-heading">{plan.name}</h3>
              <p className="mt-1 text-sm text-body">{plan.description}</p>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-2xl font-semibold text-heading">&#8377;</span>
                <span className="text-5xl font-extrabold tracking-tight text-heading">
                  {plan.price}
                </span>
                <span className="text-sm text-body">/ {plan.period}</span>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <svg
                      className="w-5 h-5 shrink-0 text-fg-brand-strong"
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
                    <span className="text-body">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-base px-5 py-2.5 text-sm font-medium shadow-xs focus:outline-none focus:ring-4 ${
                  plan.featured
                    ? "text-white bg-brand border border-transparent hover:bg-brand-strong focus:ring-brand-medium"
                    : "text-heading bg-neutral-primary border border-default hover:bg-neutral-secondary-soft focus:ring-neutral-tertiary"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing