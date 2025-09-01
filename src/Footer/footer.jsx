import { useState, useEffect } from "react";

const footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerSections = [
    {
      title: "Customer Services",
      links: [
        "Contact us",
        "FAQs",
        "Returns and refunds",
        "Personal Shopping",
        "Gift cards",
        "Gift packaging",
      ],
    },
    {
      title: "Online Shopping",
      links: [
        "Delivery",
        "Click & Collect",
        "ShopEasy +",
        "Tracking your order",
        "Online Brand Directory",
      ],
    },
    {
      title: "Our Stores",
      links: [
        "London",
        "Birmingham",
        "Manchester Trafford",
        "Manchester Exchange",
      ],
    },
    {
      title: "In Store",
      links: ["A-Z store services", "Restaurants", "Services", "Events"],
    },
    {
      title: "About Us",
      links: [
        "Inspiration",
        "About ShopEasy",
        "Careers",
        "Suppliers",
        "Press area",
        "Our policies and statements",
      ],
    },
    {
      title: "Seasonal",
      links: ["Sale", "Hampers", "Weddings"],
    },
  ];

  const bottomLinks = [
    "Modern slavery statement",
    "Accessibility",
    "Terms & conditions",
    "Privacy & cookie policies",
  ];

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 👈 this is the key for smooth scroll
    });
  };
  return (
    <>
      <footer className="bg-gray-100 border-t border-gray-200">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-semibold text-gray-900 text-sm">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-700 text-sm hover:text-gray-900 transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-600 text-sm">
                © ShopEasy
              </div>

              {/* Bottom Links */}
              <div className="flex flex-wrap items-center space-x-6">
                {bottomLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors duration-200"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <button
            onClick={scrollToTop}
            className="bg-yellow-400 hover:bg-yellow-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            ↑
          </button>
        </div>
      )}
    </>
  );
};

export default footer;
