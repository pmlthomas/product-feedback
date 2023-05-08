-- CreateTable
CREATE TABLE `ReplyReply` (
    `id` VARCHAR(191) NOT NULL,
    `replyText` TEXT NOT NULL,
    `replyId` VARCHAR(191) NOT NULL,
    `authorId` VARCHAR(191) NOT NULL,
    `repliedToId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ReplyReply` ADD CONSTRAINT `ReplyReply_replyId_fkey` FOREIGN KEY (`replyId`) REFERENCES `Reply`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReplyReply` ADD CONSTRAINT `ReplyReply_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReplyReply` ADD CONSTRAINT `ReplyReply_repliedToId_fkey` FOREIGN KEY (`repliedToId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
