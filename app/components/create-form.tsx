"use client";

import React from "react";
import { uploadImage } from "../lib/actions";
import { useFormState } from "react-dom";
import ButtonValidate from "./button";

const CreateForm = () => {
  const [state, formAction] = useFormState(uploadImage, null);

  return (
    <form action={formAction}>
      <div className="mb-4 pt-2">
        <label htmlFor="title" className="text-sm font-semibold text-gray-600">
          Title
        </label>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.title}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <input
          type="file"
          name="image"
          className="file:py-2 file:px-4 file:mr-4 file:rounded-lg file:border-none file:bg-gray-200 hover:file:bg-gray-300 file:cursor-pointer border border-gray-400 w-full rounded-lg"
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.image}</p>
        </div>
      </div>
      <div className="mb-4 pt-4">
        <ButtonValidate />
      </div>
    </form>
  );
};

export default CreateForm;
