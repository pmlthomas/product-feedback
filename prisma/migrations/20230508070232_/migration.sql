/*
  Warnings:

  - You are about to drop the `replyreply` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `replyreply` DROP FOREIGN KEY `ReplyReply_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `replyreply` DROP FOREIGN KEY `ReplyReply_repliedToId_fkey`;

-- DropForeignKey
ALTER TABLE `replyreply` DROP FOREIGN KEY `ReplyReply_replyId_fkey`;

-- DropTable
DROP TABLE `replyreply`;
