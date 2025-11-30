-- CreateEnum
CREATE TYPE "DogSize" AS ENUM ('TINY', 'SMALL', 'MEDIUM', 'LARGE', 'GIANT', 'UNKNOWN');

-- CreateEnum
CREATE TYPE "DogGender" AS ENUM ('MALE', 'FEMALE');

-- CreateTable
CREATE TABLE "dogs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "dog_size" "DogSize" NOT NULL DEFAULT 'UNKNOWN',
    "age" INTEGER NOT NULL,
    "gender" "DogGender" NOT NULL,
    "owner_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "dogs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "dogs" ADD CONSTRAINT "dogs_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "owners"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
