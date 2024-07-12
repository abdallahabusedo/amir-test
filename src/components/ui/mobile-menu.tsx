"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 text-gray-300 transition duration-150 ease-in-out fill-current hover:text-gray-200"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute left-0 z-20 w-full px-4 overflow-hidden transition-all duration-300 ease-in-out top-full sm:px-6"
        style={
          mobileNavOpen
            ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0.8 }
        }
      >
        <ul className="px-4 py-2 bg-gray-800">
          <li>
            <Link
              href="/#our-services"
              className="flex items-center px-4 py-3 font-medium text-purple-600 transition duration-150 ease-in-out hover:text-gray-200"
            >
              Our Services
            </Link>
          </li>
          <li>
            <Link
              href="/#flow"
              className="flex items-center px-4 py-3 font-medium text-purple-600 transition duration-150 ease-in-out hover:text-gray-200"
            >
              How we work?
            </Link>
          </li>
          <li>
            <Link
              href="/#testimonials"
              className="flex items-center px-4 py-3 font-medium text-purple-600 transition duration-150 ease-in-out hover:text-gray-200"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              href="/#contact-us"
              className="ml-3 text-white bg-purple-600 btn-sm hover:bg-purple-700"
            >
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
