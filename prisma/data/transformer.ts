import * as fs from "fs";
import default_products from "./default-product-list.json";
import products from "./product-list.json";
import categories from "./categories.json";
import blends from "./productNames/blends.json";
import singles from "./productNames/singles.json";

type Product = {
  name: string;
  category: string;
  units: { size: string; price: number; code: string }[];
};

const writeFileErrorCallback = (err: any) => {
  if (err) {
    console.error("Failed to write file", err);
  } else {
    console.info("File succesfully written");
  }
};

const writeDataToFile = (data: any, fileName: string) => {
  const jsonString = JSON.stringify(data, null, 2);

  fs.writeFile(fileName, jsonString, writeFileErrorCallback);
};

const transformProducts = (data: Product[]) => {
  const result = data.map((product) => {
    return {
      ...product,
      name: product.name.split("-").join(" "),
      category: product.category.toLocaleLowerCase()
    };
  });

  writeDataToFile(result, "prisma/data/product-list.json");
};
// transformProducts(default_products)

const writeCategories = (data: Product[]) => {
  const categorySet = new Set();
  data.forEach((product) => categorySet.add(product.category));
  const uniqueCategories = Array.from(categorySet);

  writeDataToFile(uniqueCategories, "prisma/data/categories.json");
};
// writeCategories(products)

const writeProductNames = (data: Product[], cat: string) => {
  const productNames = data
    .filter((product) => product.category === cat)
    .map((product) => product.name);

  writeDataToFile(productNames, `prisma/data/productNames/${cat}.json`);
};

const writeProductNamesFromCategories = (data: Product[], categories: string[]) => {
  categories.forEach((cat) => writeProductNames(data, cat));
};
// writeProductNamesFromCategories(products, categories);

const getRandomProduct = () => {
  const randomIndex = Math.floor(Math.random() * blends.length + 1);
  const product = products.filter((product) => product.name === blends[randomIndex]);

  return JSON.stringify(product, null, 2);
};
// console.log(getRandomProduct());

const generateRandomBlend = (numberOfIngredients: number) => {
  let count = 0;
  let randomIndex;

  const randomBlendSet = new Set();

  while (count < numberOfIngredients) {
    randomIndex = Math.floor(Math.random() * singles.length + 1);
    const single = singles[randomIndex];

    if (!randomBlendSet.has(single)) {
      randomBlendSet.add(single);
      count++;
    }
  }

  return randomBlendSet;
};
// console.log(generateRandomBlend(5));

const checkForDupes = () => {
  const productSet = new Set();
  const dupes: Product[] = [];

  products.forEach((product) => {
    if (productSet.has(product.name)) {
      dupes.push(product);
    }

    productSet.add(product.name);
  });

  console.log(dupes.length);
};
checkForDupes();
