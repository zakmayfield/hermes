import fs from "fs";
import pl from "./product-list.json";

function uppercaseFirstLetter() {
  return pl.map((p) => ({
    ...p,
    name: p.name
      .toLowerCase()
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ")
  }));
}

function createDisplayNameFromDescription() {
  const data = uppercaseFirstLetter();

  return data.map((p) => {
    const desc = p.description.toLowerCase();
    const descArr = desc.split(" ");

    const bannedWords = [
      "1",
      "2",
      "4",
      "4l",
      "1l",
      "2l",
      "20",
      "20l",
      "500",
      "500ml",
      "355",
      "355ml",
      "255ml",
      "255",
      "ml",
      "litres",
      "liters",
      "litre",
      "liter",
      "grams",
      "1kg",
      "100",
      "50",
      "case",
      "4x1",
      "4x2",
      "4x2l"
    ];

    const filteredDesc = descArr.filter((word) => {
      if (!bannedWords.includes(word)) {
        return word;
      }
    });

    let cappedWords = filteredDesc.map((w) => w.charAt(0).toUpperCase() + w.slice(1));

    if (cappedWords[0] === "Of") {
      cappedWords.shift();
    }

    const displayName = cappedWords.join(" ");

    return {
      ...p,
      displayName
    };
  });
}

function replaceNameWithDisplayName() {
  const data = createDisplayNameFromDescription();

  return data.map((p) => ({
    name: p.displayName,
    code: p.code,
    description: p.description,
    category: p.category,
    price: p.price
  }));
}

function runFormat() {
  const data = replaceNameWithDisplayName();
  return data;
}

function writeFinalData(data: any) {
  fs.writeFileSync(
    "prisma/data/2024-products/products.json",
    JSON.stringify(data, null, 2)
  );
}

writeFinalData(runFormat());
