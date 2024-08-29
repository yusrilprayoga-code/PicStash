import Link from "next/link";
import { getImages } from "./lib/data";
import Card from "./components/card";
import ImageSearch from "./components/image-search";

export default async function Home() {

  const images = await getImages();

  return (
    <div className="max-w-screen-lg mx-auto py-14">
      <div className="flex items-end justify-between">
        <h1 className="text-4xl font-bold">
          PicStash
        </h1>
        <Link href="/create" className="py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"> New Image</Link>
      </div>
      <div className="mt-5">
        <p className="text-gray-600">Browse through the latest images uploaded by our users.</p>
      </div>
      <ImageSearch images={images} />
    </div>
  );
}
