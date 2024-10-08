import Link from "next/link";
import { getImages } from "../lib/data";
import ImageSearch from "./image-search";
import { HeroSection } from "./hero-section";
import Navbar from "./navbar";
import Footer from "./footer";
import PriceList from "./pricelist";

export default async function Dashboard() {
  const images = await getImages();

  return (
    <div>
        <Navbar />
      <section className="h-[60vh]
        bg-cover bg-center bg-no-repeat flex items-center justify-center text-white
      ">
        <HeroSection />
      </section>
        <PriceList />

      <section className="max-w-screen-lg mx-auto py-14 mt-20">
        <div className="flex items-end justify-between mb-8">
          <h1 className="text-4xl font-bold">PicStash</h1>
          <Link
            href="/create"
            className="py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          >
            New Image
          </Link>
        </div>
        <div className="mt-5">
          <p className="text-gray-600">
            Browse through the latest images uploaded by our users.
          </p>
        </div>
        <ImageSearch images={images} />
      </section>

      <Footer />
    </div>
  );
}
