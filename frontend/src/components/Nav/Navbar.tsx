import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Previous Boards", href: "/boards" },
  ];

  // load theme preference on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // toggle dark mode
  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <nav className="bg-customWhite dark:bg-darkNav text-customBlack dark:text-darkText shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <h1 className="text-xl font-bold">RetroSpectacle</h1>

        <div className="flex items-center space-x-6">
          {/* Desktop menu */}
       <div className="hidden min-[768px]:flex items-center space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-md text-customBlack dark:text-textWhite hover:bg-customNavDark hover:text-textWhite dark:hover:bg-active transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded hover:bg-customNavDark dark:hover:bg-cardLight focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              // sun icon for light mode
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m15.66 7.66l-.71-.71M4.05 4.05l-.71-.71M12 7a5 5 0 100 10 5 5 0 000-10z"
                />
              </svg>
            ) : (
              // moon icon for dark mode
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
              </svg>
            )}
          </button>

          {/* mobile button */}
          <button
            className="min-[768px]:hidden p-2 rounded hover:bg-customNavDark dark:hover:bg-cardLight focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <div className="bg-customNav dark:bg-darkNav border-t border-customWhiteDarker dark:border-cardLight">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-2 text-textWhite dark:text-darkText hover:bg-hover dark:hover:bg-active transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}