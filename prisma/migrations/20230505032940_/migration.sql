/*
  Warnings:

  - Added the required column `authorId` to the `Reply` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userRepliedToId` to the `Reply` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reply` ADD COLUMN `authorId` VARCHAR(191) NOT NULL,
    ADD COLUMN `userRepliedToId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Reply` ADD CONSTRAINT `Reply_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reply` ADD CONSTRAINT `Reply_userRepliedToId_fkey` FOREIGN KEY (`userRepliedToId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
