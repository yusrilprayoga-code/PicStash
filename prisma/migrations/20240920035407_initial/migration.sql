/*
  Warnings:

  - You are about to drop the column `userId` on the `upload` table. All the data in the column will be lost.
  - You are about to drop the `comments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `likes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_uploadId_fkey";

-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_userId_fkey";

-- DropForeignKey
ALTER TABLE "likes" DROP CONSTRAINT "likes_uploadId_fkey";

-- DropForeignKey
ALTER TABLE "likes" DROP CONSTRAINT "likes_userId_fkey";

-- DropForeignKey
ALTER TABLE "upload" DROP CONSTRAINT "upload_userId_fkey";

-- AlterTable
ALTER TABLE "upload" DROP COLUMN "userId";

-- DropTable
DROP TABLE "comments";

-- DropTable
DROP TABLE "likes";
