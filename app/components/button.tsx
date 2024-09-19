"use client";

import { useFormStatus } from "react-dom";
import { clsx } from "clsx";
import Link from "next/link";
import { deleteImage, downloadImage } from "../lib/actions";
import { Edit, Trash2, Download } from 'lucide-react';

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  return (
    <button
      className={clsx(
        "bg-blue-500 text-white w-full font-medium py-2.5 px-6 text-sm rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-md",
        {
          "opacity-50 cursor-not-allowed": pending,
        }
      )}
      type="submit"
      disabled={pending}
    >
      {label === "upload" ? (
        <>{pending ? "Uploading..." : "Upload"}</>
      ) : (
        <>{pending ? "Updating..." : "Update"}</>
      )}
    </button>
  );
};

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`edit/${id}`}
      className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300"
    >
      <Edit size={16} className="mr-1" />
      Edit
    </Link>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  const deleteImageWithId = deleteImage.bind(null, id);
  
  const handleDelete = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const confirmed = window.confirm("Are you sure you want to delete this image?");
    if (confirmed) {
      await deleteImageWithId();
    }
    
    window.location.reload();
  };
  
  return (
    <form onSubmit={handleDelete} className="inline-block">
      <DeleteBtn />
    </form>
  );
};

const DeleteBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-red-500 rounded-full hover:bg-red-600 transition-colors duration-300"
    >
      <Trash2 size={16} className="mr-1" />
      {pending ? "Deleting..." : "Delete"}
    </button>
  );
};

export const DownloadImage = ({ id }: { id: string }) => {
  const downloadImageWithId = downloadImage.bind(null, id);

  const handleDownload = async (event: React.FormEvent) => {
    event.preventDefault();
    await downloadImageWithId();
  };

  return (
    <form onSubmit={handleDownload} className="inline-block">
      <button
        className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-green-700 bg-green-100 rounded-full hover:bg-green-200 transition-colors duration-300"
        type="submit"
      >
        <Download size={16} className="mr-1" />
        Download
      </button>
    </form>
  );
};