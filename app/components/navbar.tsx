"use client";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogFooter,
} from "../../components/ui/alert-dialog";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleSignOut = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAlertOpen(false);
    await router.push("/api/auth/signout");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          PicStash
        </Link>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-4">
          <Link href="/create" className="text-gray-600 hover:text-gray-900">
            Upload
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Gallery
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="md:hidden">
          <button
            className="text-gray-800 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
          >
            {/* Conditional rendering for Hamburger or Close icon */}
            {menuOpen ? (
              // Close Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Sign out button for Desktop */}
        <div className="hidden md:flex">
          <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
            <AlertDialogTrigger asChild>
              <button
                className="
                  text-black
                  focus:outline-none
                  focus:ring-2
                  focus:ring-red-600
                  focus:ring-opacity-50
                  rounded-md
                  px-4
                  py-2
                  bg-red-500
                "
                onClick={() => setIsAlertOpen(true)}
              >
                Sign out
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure you want to sign out?</AlertDialogTitle>
                <AlertDialogDescription>
                  You will be redirected to the sign-in page.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleSignOut}>
                  Sign out
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      {/* Mobile menu options - toggle visibility based on menuOpen state */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <Link href="/create" className="text-gray-600 hover:text-gray-900">
            Upload
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Gallery
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
          <div>
            <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
            <AlertDialogTrigger asChild>
              <button
                className="
                  text-black
                  mb-5
                  focus:outline-none
                  focus:ring-2
                  focus:ring-red-600
                  focus:ring-opacity-50
                  rounded-md
                  px-4
                  py-2
                  bg-red-500
                "
                onClick={() => setIsAlertOpen(true)}
              >
                Sign out
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure you want to sign out?</AlertDialogTitle>
                <AlertDialogDescription>
                  You will be redirected to the sign-in page.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleSignOut}>
                  Sign out
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
