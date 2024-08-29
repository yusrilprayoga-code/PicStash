import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-screen-lg mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Brand and Social Links */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <p className="text-sm">&copy; 2024 PicStash. All rights reserved.</p>
          <div className="flex space-x-4">
            {/* Optional social media icons */}
            <Link href="https://www.facebook.com" target="_blank">
              <FaFacebook className="hover:text-white" />
            </Link>
            <Link href="https://www.twitter.com" target="_blank">
              <FaTwitter className="hover:text-white" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              <FaInstagram className="hover:text-white" />
            </Link>
          </div>
        </div>

        {/* Right Section: Footer Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/" className="hover:text-white text-sm">
            Home
          </Link>
          <Link href="/about" className="hover:text-white text-sm">
            About
          </Link>
          <Link href="/contact" className="hover:text-white text-sm">
            Contact
          </Link>
          <Link href="/terms" className="hover:text-white text-sm">
            Terms
          </Link>
          <Link href="/privacy" className="hover:text-white text-sm">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
