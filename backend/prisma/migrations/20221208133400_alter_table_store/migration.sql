/*
  Warnings:

  - You are about to drop the column `adress` on the `store` table. All the data in the column will be lost.
  - Made the column `latitude` on table `store` required. This step will fail if there are existing NULL values in that column.
  - Made the column `longitude` on table `store` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "store" DROP COLUMN "adress",
ALTER COLUMN "latitude" SET NOT NULL,
ALTER COLUMN "longitude" SET NOT NULL;
