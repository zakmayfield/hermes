import fs from "fs";
import productGroups from "./product-groups.json";

function normalizeGroupNames() {
  return productGroups.map((g) => {
    const bannedWords = ["juice"];
    const groupName = g.group
      .toLowerCase()
      .split(" ")
      .filter((w) => !bannedWords.includes(w))
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

    return {
      ...g,
      group: groupName,
      category: g.products[0].category
    };
  });
}

function runFormat() {
  const data = normalizeGroupNames();
  return data;
}

function writeFinalData(data: any) {
  fs.writeFileSync("prisma/data/transformedProducts.json", JSON.stringify(data, null, 2));
}

writeFinalData(runFormat());
