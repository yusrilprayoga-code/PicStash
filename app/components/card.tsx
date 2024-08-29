import Image from "next/image";
import { DeleteButton, EditButton } from "./button";
import type { upload } from "@prisma/client";

const Card = ({ data }: { data: upload }) => {
  return (
    <div className="
        max-w-sm
        bg-white
        rounded-md
        shadow
        overflow-hidden
        flex flex-col
        transition-transform
        transform
        hover:scale-105
        duration-300
        ease-in-out
    ">
      <div className="relative aspect-video">
        <Image
          src={data.image}
          alt={data.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-t-md object-cover"
        />
      </div>
      <div className="p-5">
        <h1 className="text-xl font-bold text-gray-00 truncate">
          {data.title}
        </h1>
      </div>
      <div className="flex items-center justify-between">
        <EditButton id={data.id} />
        <DeleteButton id={data.id} />
      </div>
    </div>
  );
};

export default Card;