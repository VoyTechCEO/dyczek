/*
  Warnings:

  - The primary key for the `GraduatesYear` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `GraduatesYear` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_GraduatesYear" (
    "year" INTEGER NOT NULL,
    "graduates" TEXT NOT NULL
);
INSERT INTO "new_GraduatesYear" ("graduates", "year") SELECT "graduates", "year" FROM "GraduatesYear";
DROP TABLE "GraduatesYear";
ALTER TABLE "new_GraduatesYear" RENAME TO "GraduatesYear";
CREATE UNIQUE INDEX "GraduatesYear_year_key" ON "GraduatesYear"("year");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
