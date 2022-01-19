-- CreateTable
CREATE TABLE "Urls" (
    "id" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "shortURL" TEXT NOT NULL,
    "originURL" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Urls_pkey" PRIMARY KEY ("id")
);
