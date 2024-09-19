import React from 'react';
import Image from "next/image";
import { DeleteButton, DownloadImage, EditButton } from "./button";
import type { upload } from "@prisma/client";
import { Heart, MessageCircle } from 'lucide-react';

const Card = ({ data }: { data: upload }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <Image
          src={data.image}
          alt={data.title}
          width={300}
          height={400}
          layout="responsive"
          objectFit="cover"
          className="rounded-t-lg"
        />
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <DownloadImage id={data.image} />
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-lg font-semibold text-gray-800 truncate mb-2">
          {data.title}
        </h1>
        <div className="flex items-center justify-between text-gray-600 mb-3">
          <div className="flex items-center space-x-2">
            <Heart size={18} />
            <span>142</span>
          </div>
          <div className="flex items-center space-x-2">
            <MessageCircle size={18} />
            <span>23</span>
          </div>
        </div>
        <div className="flex items-center justify-between space-x-2">
          <EditButton id={data.id} />
          <DeleteButton id={data.id} />
        </div>
      </div>
    </div>
  );
};

export default Card;