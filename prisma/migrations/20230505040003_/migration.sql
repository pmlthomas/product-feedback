/*
  Warnings:

  - Added the required column `repliedToId` to the `Reply` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reply` ADD COLUMN `repliedToId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Reply` ADD CONSTRAINT `Reply_repliedToId_fkey` FOREIGN KEY (`repliedToId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
