"use client";
import { useState } from "react";
import Card from "./card";

const ImageSearch = ({ images }: { images: any }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredImages = images.filter((image: { title: string }) =>
    image.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="mt-5">
        <input
          type="text"
          placeholder="Search Image"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full py-3 px-4 bg-gray-100 rounded-md"
        />
      </div>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
        {filteredImages.map(
          (image: {
            id: string;
            title: string;
            image: string;
            createdAt: Date;
            updatedAt: Date;
          }) => (
            <div key={image.id} className="mb-4 break-inside-avoid">
              <Card data={image} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ImageSearch;
