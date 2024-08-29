"use server";
import { z } from "zod";
import { del, put } from "@vercel/blob";
import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getImageById } from "./data";

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

// const EditSchema = z.object({
//   title: z.string().min(1),
//   image: z
//     .instanceof(File)
//     .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
//       message: "Only images are allowed",
//     })
//     .refine((file) => file.size < 4000000, {
//       message: "Image must less than 4MB",
//     })
//     .optional(),
// });

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

// Update image
// export const updateImage = async (
//   id: string,
//   prevState: unknown,
//   formData: FormData
// ) => {
//   const validatedFields = EditSchema.safeParse(
//     Object.fromEntries(formData.entries())
//   );

//   if (!validatedFields.success) {
//     return {
//       error: validatedFields.error.flatten().fieldErrors,
//     };
//   }

//   const data = await getImageById(id);
//   if (!data) return { message: "No Data Found" };

//   const { title, image } = validatedFields.data;
//   let imagePath;
//   if (!image || image.size <= 0) {
//     imagePath = data.image;
//   } else {
//     await del(data.image);
//     const { url } = await put(image.name, image, {
//       access: "public",
//       multipart: true,
//     });
//     imagePath = url;
//   }

//   try {
//     await prisma.upload.update({
//       data: {
//         title,
//         image: imagePath,
//       },
//       where: { id },
//     });
//   } catch (error) {
//     return { message: "Failed to update data" };
//   }

//   revalidatePath("/");
//   redirect("/");
// };

// Delete Image
export const deleteImage = async (id: string) => {
  const data = await getImageById(id);
  if (!data) return { message: "No data found" };

  await del(data.image);
  try {
    await prisma.upload.delete({
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to delete data" };
  }

  revalidatePath("/");
};
