import { PrismaClient } from "@prisma/client";
import products from "../data/test-products.json";

const db = new PrismaClient();

const productsSeed = async () => {
  products.forEach(
    async (product) =>
      await db.product.create({
        data: {
          name: product.name,
          category: product.category,
          units: { createMany: { data: product.units } }
        }
      })
  );
};

productsSeed()
  .catch((e) => {
    console.error("🚫 Error while seeding: ", e.stack);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
