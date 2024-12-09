import fs from "fs";
import cpl from "./complete-product-list-2024.json";
import cats from "../../categories.json";

function filterCompleteProductList() {
  return cpl.filter((p) => {
    for (const cat of cats) {
      if (p.Product.toLowerCase().includes(cat)) {
        return p;
      }
    }
  });
}

function adjustProperties() {
  const data = filterCompleteProductList();

  return data.map((p) => ({
    product: p.Product,
    description: p.Description,
    code: p.Product,
    price: p.Price
  }));
}

function nullifyPriceIfEmpty() {
  const data = adjustProperties();

  return data.map((p) =>
    p.price === "" || typeof p.price !== "number" ? { ...p, price: null } : p
  );
}

function addCategoryFromName() {
  const data = nullifyPriceIfEmpty();

  return data.map((p) => ({
    ...p,
    category: p.product.split(":")[0]
  }));
}

function removeIfNoPrice() {
  const data = addCategoryFromName();

  return data.filter((p) => Number(p.price) > 1);
}

function removeNumbersFromName() {
  const data = removeIfNoPrice();

  return data.map((p) => ({
    ...p,
    name: p.product
      .split(":")[1]
      .split("-")
      .filter((str) => !/^\d+$/.test(str))
      .join(" ")
  }));
}

function finalizeFormatting() {
  const data = removeNumbersFromName();

  return data.map((p) => ({
    name: p.name,
    code: p.code,
    description: p.description.split("-").join(" ").replace(/\s+/g, " "),
    category: p.category.includes("-")
      ? p.category.split("-")[1].toLowerCase()
      : p.category.toLowerCase(),
    price: p.price
  }));
}

function handleAnomolies() {
  const data = finalizeFormatting();

  return data.map((p) => {
    if (
      p.name.includes("355ML") ||
      p.name.includes("500ML") ||
      p.name.includes("1L") ||
      p.name.includes("2L")
    ) {
      const nameArray = p.name.split(" ");
      nameArray.pop();

      return {
        ...p,
        name: nameArray.join(" ")
      };
    }

    return {
      ...p
    };
  });
}

function runFormat() {
  return handleAnomolies();
}

function writeFinalData(data: any) {
  fs.writeFileSync(
    "prisma/data/2024-products/product-list.json",
    JSON.stringify(data, null, 2)
  );
}

writeFinalData(runFormat());
