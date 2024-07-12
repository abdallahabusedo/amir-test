import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute z-30 w-full">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="mr-4 shrink-0">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image
                src="/images/logo.png"
                alt="Technohive"
                width={60}
                height={40}
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex flex-wrap items-center justify-end grow">
              {/* <li>
                <Link
                  href="/#about"
                  className="flex items-center px-4 py-3 font-medium text-purple-600 transition duration-150 ease-in-out hover:text-gray-200"
                >
                  Who we are?
                </Link>
              </li> */}
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
              {/* <li>
                <Link
                  href="/signin"
                  className="flex items-center px-4 py-3 font-medium text-purple-600 transition duration-150 ease-in-out hover:text-gray-200"
                >
                  Sign in
                </Link>
              </li> */}
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

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
