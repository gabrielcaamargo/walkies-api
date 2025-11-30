-- CreateTable
CREATE TABLE "owners" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "default_address_line_1" TEXT NOT NULL,
    "default_address_line_2" TEXT NOT NULL,
    "default_zip_code" TEXT NOT NULL,
    "default_city" TEXT NOT NULL,
    "default_state" TEXT NOT NULL,
    "default_country" TEXT NOT NULL,
    "default_latitude" DOUBLE PRECISION NOT NULL,
    "default_longitude" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "owners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "walkers" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "total_walks" INTEGER NOT NULL DEFAULT 0,
    "service_radius" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "base_price_per_walk" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "is_price_negotiable" BOOLEAN NOT NULL DEFAULT false,
    "balance" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "walkers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "owners_user_id_key" ON "owners"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "walkers_user_id_key" ON "walkers"("user_id");

-- AddForeignKey
ALTER TABLE "owners" ADD CONSTRAINT "owners_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "walkers" ADD CONSTRAINT "walkers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
