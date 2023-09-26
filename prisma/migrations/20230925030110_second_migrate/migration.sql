-- CreateTable
CREATE TABLE "menu" (
    "menu_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "resturantId" INTEGER NOT NULL,
    "menu_name" TEXT NOT NULL,
    CONSTRAINT "menu_resturantId_fkey" FOREIGN KEY ("resturantId") REFERENCES "Resturant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
