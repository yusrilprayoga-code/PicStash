import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          PicStash
        </Link>
        
        <div className="flex space-x-4">
          <Link href="/create" className="text-gray-600 hover:text-gray-900">
            Upload
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Gallery
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
