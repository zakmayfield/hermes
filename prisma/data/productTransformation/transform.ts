import fs from "fs";
import products from "../productTransformation/2024-products/productsWithSize_2.json";

function transofrmData() {
  return products.map((g) => ({
    name: g.group,
    category: g.category,
    products: g.products
  }));
}

function runFormat() {
  const data = transofrmData();
  return data;
}

function writeFinalData(data: any) {
  fs.writeFileSync("prisma/data/products.json", JSON.stringify(data, null, 2));
}

writeFinalData(runFormat());
