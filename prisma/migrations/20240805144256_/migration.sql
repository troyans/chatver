-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT;

-- CreateTable
CREATE TABLE "NotionAccount" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" TEXT,
    "userNotion_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT NOT NULL,
    "workspace_name" TEXT,
    "workspace_id" TEXT,
    "template_id" TEXT,
    "email_notion" TEXT,

    CONSTRAINT "NotionAccount_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "NotionAccount" ADD CONSTRAINT "NotionAccount_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
