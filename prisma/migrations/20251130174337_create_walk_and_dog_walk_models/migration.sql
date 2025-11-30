-- CreateEnum
CREATE TYPE "WalkStatus" AS ENUM ('REQUESTED', 'ACCEPTED', 'WALK_STARTED', 'WALK_FINISHED', 'CANCELLED_BY_WALKER', 'CANCELLED_BY_OWNER');

-- CreateTable
CREATE TABLE "walks" (
    "id" TEXT NOT NULL,
    "duration" INTEGER NOT NULL DEFAULT 0,
    "status" "WalkStatus" NOT NULL DEFAULT 'REQUESTED',
    "start_lat" DOUBLE PRECISION NOT NULL,
    "start_long" DOUBLE PRECISION NOT NULL,
    "end_lat" DOUBLE PRECISION NOT NULL,
    "end_long" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "cancelled_at" TIMESTAMP(3),
    "walker_id" TEXT NOT NULL,

    CONSTRAINT "walks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dog_walks" (
    "id" TEXT NOT NULL,
    "dog_id" TEXT NOT NULL,
    "walk_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dog_walks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "dog_walks_dog_id_walk_id_key" ON "dog_walks"("dog_id", "walk_id");

-- AddForeignKey
ALTER TABLE "walks" ADD CONSTRAINT "walks_walker_id_fkey" FOREIGN KEY ("walker_id") REFERENCES "walkers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dog_walks" ADD CONSTRAINT "dog_walks_dog_id_fkey" FOREIGN KEY ("dog_id") REFERENCES "dogs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dog_walks" ADD CONSTRAINT "dog_walks_walk_id_fkey" FOREIGN KEY ("walk_id") REFERENCES "walks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
