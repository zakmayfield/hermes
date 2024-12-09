import fs from "fs";
import products from "./productsWithSize_1.json";

// All Spice Maple Syrup does not have a code number indicating size
// Should be a condition to grab description size after initial transofrm
const targetCats = [
  "singles",
  "blends",
  "tea",
  "mojito",
  "ciders",
  "lemonades",
  "limonades",
  "nut milks",
  "organic",
  "purees",
  "smoothies",
  "syrups",
  "vegetables",
  "mocktail"
];

const sizes = new Map();
sizes.set("1", "1L");
sizes.set("2", "2L");
sizes.set("4", "4L");
sizes.set("20", "20L");
sizes.set("355", "355ml");
sizes.set("500", "500ml");

function getSizeDataFromProductCode() {
  return products.map((group) => {
    return {
      ...group,
      products: group.products.map((product) => {
        if (targetCats.includes(product.category)) {
          const code = product.code;
          let size: string | null = null;

          sizes.forEach((v, k) => (code.includes(k) ? (size = v) : size === null));

          return {
            ...product,
            size
          };
        }

        return product;
      })
    };
  });
}

const wordSizes = new Map();
wordSizes.set("1 liter", "1L");
wordSizes.set("1 litre", "1L");
wordSizes.set("1 liters", "1L");
wordSizes.set("1 litres", "1L");

wordSizes.set("2 liter", "2L");
wordSizes.set("2 litre", "2L");
wordSizes.set("2 liters", "2L");
wordSizes.set("2 litres", "2L");

wordSizes.set("4 liter", "4L");
wordSizes.set("4 litre", "4L");
wordSizes.set("4 liters", "4L");
wordSizes.set("4 litres", "4L");

wordSizes.set("20 liter", "20L");
wordSizes.set("20 litre", "20L");
wordSizes.set("20 liters", "20L");
wordSizes.set("20 litres", "20L");

wordSizes.set("20 liter", "20L");
wordSizes.set("20 litre", "20L");
wordSizes.set("20 liters", "20L");
wordSizes.set("20 litres", "20L");

wordSizes.set("355ml", "355ml");
wordSizes.set("355 ml", "355ml");

wordSizes.set("500ml", "500ml");
wordSizes.set("500 ml", "500ml");

function handleNullSizesFromDescription() {
  const data = getSizeDataFromProductCode();

  return data.map((g) => {
    return {
      ...g,
      products: g.products.map((p: any) => {
        if (p.size === null) {
          let size: string | null = null;
          wordSizes.forEach((v, k) =>
            p.description.toLowerCase().includes(k) ? (size = v) : null
          );

          return {
            ...p,
            size
          };
        }

        return p;
      })
    };
  });
}

function nullifyProductSizesWithNoLiters() {
  const data = handleNullSizesFromDescription();

  return data.map((g) => {
    return {
      ...g,
      products: g.products.map((p) => {
        if (!p.size) {
          return {
            ...p,
            size: null
          };
        }
        return p;
      })
    };
  });
}

function runFormat() {
  const data = nullifyProductSizesWithNoLiters();
  return data;
}

function writeFinalData(data: any) {
  fs.writeFileSync(
    "prisma/data/2024-products/productsWithSize_2.json",
    JSON.stringify(data, null, 2)
  );
}

writeFinalData(runFormat());
