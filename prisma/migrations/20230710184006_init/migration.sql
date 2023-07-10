-- CreateTable
CREATE TABLE "NoticeAdvanced" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "NoticeAdvanced_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NoticeBasic" (
    "id" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "NoticeBasic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GraduatesYear" (
    "year" INTEGER NOT NULL,
    "graduates" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "GraduatesYear_year_key" ON "GraduatesYear"("year");
