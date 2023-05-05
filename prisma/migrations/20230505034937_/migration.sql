/*
  Warnings:

  - You are about to drop the column `userRepliedToId` on the `reply` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `reply` DROP FOREIGN KEY `Reply_userRepliedToId_fkey`;

-- AlterTable
ALTER TABLE `reply` DROP COLUMN `userRepliedToId`;
