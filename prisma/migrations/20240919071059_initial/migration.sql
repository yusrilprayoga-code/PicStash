/*
  Warnings:

  - You are about to drop the column `user_id` on the `upload` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "upload" DROP CONSTRAINT "upload_user_id_fkey";

-- AlterTable
ALTER TABLE "upload" DROP COLUMN "user_id";
