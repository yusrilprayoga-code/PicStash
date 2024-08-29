"use server";
import { z } from "zod";
import { put } from "@vercel/blob";
import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const UploadSchema = z.object({
  title: z.string().min(1),
  image: z
    .instanceof(File)
    .refine((file) => file.size < 5000000, {
      message: "File size must be less than 5MB",
    })
    .refine((file) => file.size > 0, {
      message: "File size must be greater than 0",
    })
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "File must be an image",
    }),
});

export const uploadImage = async (prevState: unknown, formdata: FormData) => {
  const validateFields = UploadSchema.safeParse(
    Object.fromEntries(formdata.entries())
  );

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const { title, image } = validateFields.data;
  const {url} = await put(image.name, image, {
    access: "public",
    multipart: true,
  });

  try {
    await prisma.upload.create({
      data: {
        title,
        image: url,
      },
    })
  } catch (error) {
      throw new Error("Failed to upload image");
  }

  revalidatePath("/");

  redirect("/");

};
