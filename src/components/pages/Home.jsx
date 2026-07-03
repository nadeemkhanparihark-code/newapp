import React from "react";

const menProducts = [
  {
    id: 1,
    name: "Royal Blue Sherwani",
    price: "₹12,999",
    image: "https://images.pexels.com/photos/8347499/pexels-photo-8347499.jpeg?auto=compress&w=400&h=500&fit=crop",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Classic Black Tuxedo",
    price: "₹18,499",
    image: "https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&w=400&h=500&fit=crop",
    badge: "New Arrival",
  },
  {
    id: 3,
    name: "Maroon Nehru Jacket",
    price: "₹4,999",
    image: "https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&w=400&h=500&fit=crop",
    badge: "Trending",
  },
  {
    id: 4,
    name: "Ivory Silk Kurta Set",
    price: "₹6,499",
    image: "https://images.pexels.com/photos/8347501/pexels-photo-8347501.jpeg?auto=compress&w=400&h=500&fit=crop",
    badge: "Classic",
  },
  {
    id: 5,
    name: "Navy Jodhpuri Suit",
    price: "₹14,999",
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&w=400&h=500&fit=crop",
    badge: "Premium",
  },
  {
    id: 6,
    name: "Gold Embroidered Blazer",
    price: "₹9,999",
    image: "https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&w=400&h=500&fit=crop",
    badge: "Exclusive",
  },
  {
    id: 7,
    name: "Beige Linen Shirt",
    price: "₹2,499",
    image: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&w=400&h=500&fit=crop",
    badge: "Sale",
  },
  {
    id: 8,
    name: "Charcoal Formal Suit",
    price: "₹16,999",
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&w=400&h=500&fit=crop",
    badge: "Popular",
  },
];

const womenProducts = [
  {
    id: 1,
    name: "Red Bridal Lehenga",
    price: "₹45,999",
    image: "https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&w=400&h=500&fit=crop",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Pastel Pink Anarkali",
    price: "₹8,999",
    image: "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&w=400&h=500&fit=crop",
    badge: "Trending",
  },
  {
    id: 3,
    name: "Teal Silk Saree",
    price: "₹12,499",
    image: "https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&w=400&h=500&fit=crop",
    badge: "New Arrival",
  },
  {
    id: 4,
    name: "Emerald Sharara Set",
    price: "₹7,999",
    image: "https://images.pexels.com/photos/8838890/pexels-photo-8838890.jpeg?auto=compress&w=400&h=500&fit=crop",
    badge: "Elegant",
  },
  {
    id: 5,
    name: "Ivory Palazzo Suit",
    price: "₹5,499",
    image: "https://images.pexels.com/photos/6712374/pexels-photo-6712374.jpeg?auto=compress&w=400&h=500&fit=crop",
    badge: "Premium",
  },
  {
    id: 6,
    name: "Magenta Gown",
    price: "₹15,999",
    image: "https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&w=400&h=500&fit=crop",
    badge: "Exclusive",
  },
  {
    id: 7,
    name: "Peach Organza Dupatta",
    price: "₹1,999",
    image: "https://images.pexels.com/photos/6712375/pexels-photo-6712375.jpeg?auto=compress&w=400&h=500&fit=crop",
    badge: "Sale",
  },
  {
    id: 8,
    name: "Navy Embroidered Kurti",
    price: "₹3,499",
    image: "https://images.pexels.com/photos/6712373/pexels-photo-6712373.jpeg?auto=compress&w=400&h=500&fit=crop",
    badge: "Popular",
  },
];

export default function Home() {
  return (
    <section className="py-8 sm:py-12 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-2 py-0.5 rounded-sm">
            Men's Collection
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-heading">
            Celebration Wear for Men
          </h2>
          <p className="mt-2 text-sm sm:text-base text-body max-w-2xl mx-auto">
            Discover our premium collection of Sherwanis, Tuxedos, Nehru Jackets,
            Jodhpuri Suits, Blazers and more — crafted for your special moments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {menProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto mt-12 sm:mt-16">
        <div className="text-center mb-8">
          <span className="inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-2 py-0.5 rounded-sm">
            Women's Collection
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-heading">
            Celebration Wear for Women
          </h2>
          <p className="mt-2 text-sm sm:text-base text-body max-w-2xl mx-auto">
            Explore stunning Lehengas, Anarkalis, Sarees, Sharara Sets and Gowns —
            designed to make every occasion unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {womenProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <div className="bg-neutral-primary border border-default rounded-base shadow-xs overflow-hidden transition-shadow hover:shadow-md flex flex-col h-full">
      <a href="#" className="block overflow-hidden">
        <img
          className="w-full h-48 sm:h-56 object-cover transition-transform hover:scale-105"
          src={product.image}
          alt={product.name}
        />
      </a>
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <span
          className={`inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-sm mb-2 w-fit ${
            product.badge === "Sale"
              ? "bg-red-100 text-red-700 border border-red-200"
              : product.badge === "Premium"
              ? "bg-amber-100 text-amber-700 border border-amber-200"
              : "bg-brand-softer border border-brand-subtle text-fg-brand-strong"
          }`}
        >
          {product.badge}
        </span>
        <a href="#">
          <h5 className="text-base sm:text-lg font-semibold text-heading line-clamp-1">
            {product.name}
          </h5>
        </a>
        <p className="mt-1 text-lg sm:text-xl font-bold text-fg-brand-strong">
          {product.price}
        </p>
        <button className="mt-auto pt-3 w-full inline-flex items-center justify-center text-white bg-brand border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium rounded-base text-sm px-4 py-2.5 focus:outline-none transition-colors">
          Add to Cart
          <svg
            className="w-4 h-4 ms-2"
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
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}