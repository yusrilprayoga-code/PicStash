"use client"
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
  const router = useRouter();


  const handleSignOut = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAlertOpen(false);
    await router.push("/api/auth/signout");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          PicStash
        </Link>

        <div className="flex space-x-4 justify-center items-center">
          <Link href="/create" className="text-gray-600 hover:text-gray-900">
            Upload
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Gallery
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
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
                <AlertDialogTitle>
                  Are you sure you want to sign out?
                </AlertDialogTitle>
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
    </nav>
  );
};

export default Navbar;
