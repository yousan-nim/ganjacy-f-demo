import React from "react";

const footers = [
  {
    heading: "Explore",
    items: [
      { name: "Home", link: "/" },
      { name: "Order", link: "/order" },
      { name: "Strain Finder", link: "/strain-finder" },
      { name: "Buzz", link: "/buzz" },
      { name: "Dispensaries", link: "/dispensaries" },
      { name: "Health & Culture", link: "/health-culture" },
    ],
  },
  {
    heading: "Products",
    items: [
      { name: "Cannabis Buds", link: "/products/buds" },
      { name: "Edibles", link: "/products/edibles" },
      { name: "Filter Tips", link: "/products/filter-tips" },
      { name: "Rolling Papers", link: "/products/rolling-papers" },
      { name: "Tinctures/Oils", link: "/products/tinctures-oils" },
    ],
  },
  {
    heading: "Business",
    items: [
      { name: "Dispensaries in Thailand", link: "/business/dispensaries" },
      { name: "Add Your Business", link: "/business/add" },
      { name: "Pricing", link: "/business/pricing" },
    ],
  },
  {
    heading: "Support",
    items: [
      { name: "Contact", link: "/contact" },
      { name: "FAQ", link: "/faq" },
      { name: "Privacy Policy", link: "/privacy-policy" },
      { name: "Terms of Service", link: "/terms-of-service" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-screen min-h-[30vh] bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {footers.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              {section.heading}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.link}
                    className="text-gray-600 hover:text-green-700 transition duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} Ganjacy. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
