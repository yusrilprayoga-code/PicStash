"use client";
import { useState } from "react";
import Card from "./card";

const ImageSearch = ({ images }: {images:any}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredImages = images.filter((image: { title: string; }) =>
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
      <div className="grid md:grid-cols-3 gap-5 mt-10">
        {filteredImages.map((image: { id: string; title: string; image: string; createdAt: Date; updatedAt: Date; }) => (
          <Card key={image.id} data={image} />
        ))}
      </div>
    </div>
  );
};

export default ImageSearch;
