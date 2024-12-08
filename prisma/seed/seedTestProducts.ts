import { PrismaClient } from "@prisma/client";
import productGroups from "../data/test-products.json";

const db = new PrismaClient();

const seedTestProducts = async () => {
  productGroups.forEach(
    async (group) =>
      await db.productGroup.create({
        data: {
          name: group.group,
          category: group.category,
          products: { createMany: { data: group.products } }
        }
      })
  );
};

seedTestProducts()
  .catch((e) => {
    console.error("🚫 Error while seeding: ", e.stack);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
