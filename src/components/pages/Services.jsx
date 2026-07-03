import React from 'react'

const services = [
  {
    title: "Custom Tailoring",
    description:
      "Bespoke stitching and made-to-measure fits crafted by master tailors so every outfit sits perfectly.",
    path: "M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l10.962 6.33a2.165 2.165 0 011.083 1.838c.005.352.054.696.14 1.025m-2.5-3.32a3 3 0 105.196 3 3 3 0 00-5.196-3z",
  },
  {
    title: "Personal Styling",
    description:
      "One-on-one styling sessions with our fashion experts to curate the perfect celebration-ready look.",
    path: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z",
  },
  {
    title: "Fast & Free Shipping",
    description:
      "Complimentary doorstep delivery across India with real-time tracking on every order you place.",
    path: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
  },
  {
    title: "Easy 30-Day Returns",
    description:
      "Changed your mind? Enjoy hassle-free returns and exchanges within 30 days, no questions asked.",
    path: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
  },
  {
    title: "Secure Payments",
    description:
      "Shop with confidence using encrypted checkout supporting UPI, cards, net banking and wallets.",
    path: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
  {
    title: "24/7 Customer Support",
    description:
      "Our friendly team is available round the clock to help with orders, sizing and styling advice.",
    path: "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z",
  },
];

const Services = () => {
  return (
    <section className="py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-2 py-0.5 rounded-sm">
            What we offer
          </span>
          <h2 className="mt-4 text-4xl font-bold text-heading">Our Services</h2>
          <p className="mt-3 text-body">
            From custom tailoring to doorstep delivery, Fashion Hub brings
            you a complete celebration-wear experience built around
            craftsmanship, comfort and care.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-neutral-primary-soft border border-default rounded-base shadow-xs p-6 transition-shadow hover:shadow-md"
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
                    d={service.path}
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-heading">
                {service.title}
              </h3>
              <p className="text-body">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services