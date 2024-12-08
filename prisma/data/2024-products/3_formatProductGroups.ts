import fs from "fs";
import products from "./products.json";

type Product = {
  name: string;
  code: string;
  description: string;
  category: string;
  price: number;
};

function createProductGroups() {
  /*
    Goal:
     create new object with product groups that contain the same name

    Example Data:
      [
        {
          "name": "Blue Mule Mocktail",
          ...
        },
        {
          "name": "Blue Mule Mocktail",
          ...
        },
        {
          "name": "Cuban Chase Mocktail",
          ...
        },
      ]

    Target Data:
    [
      {
        group: "Blue Mule Mocktail"
        products: [
          { ... },
          { ... }
        ]
      },
      {
        group: "Cuban Chase Mocktail"
        products: [
          { ... },
          { ... }
        ]
      }
    ]

    Flow:
      - Create a new `Set`
        - This will automatically ensure that there are no duplicate group names
      - Map over data and check if `p.name` is a key within the set
        - if not, create a new set key and add the product to the value which will be an array of products
        - if so, add the product to the value array
  */
  const result: { group: string; products: Product[] }[] = [];
  const resultMap = new Map();

  products.forEach((p) => {
    if (!resultMap.has(p.name)) {
      resultMap.set(p.name, [p]);
    } else {
      resultMap.set(p.name, [...resultMap.get(p.name), p]);
    }
  });

  resultMap.forEach((v, k: string) => {
    result.push({ group: k, products: v });
  });

  return result;
}

function fixXbyXDescriptions() {
  const data = createProductGroups();

  return data.map((g) => {
    return {
      ...g,
      products: g.products.map((p) => {
        const description = p.description
          .split(" ")
          .map((w) => (w === "4x1" || w === "4x2" ? `${w}L` : w))
          .join(" ");

        return {
          ...p,
          description
        };
      })
    };
  });
}

function checkForDupeGroupNames() {
  // alphabatize group name, then check for dupes
  const data = fixXbyXDescriptions();
  const alphabatizedGroups = data.map((g) => ({
    ...g,
    group: g.group.split(" ").sort().join(" ")
  }));

  const nameSet = new Set();
  const dupeSet = new Set<string>();

  alphabatizedGroups.forEach((g) => {
    if (nameSet.has(g.group)) {
      dupeSet.add(g.group);
    } else {
      nameSet.add(g.group);
    }
  });

  const combinedGroups = new Map();

  dupeSet.forEach((k: string) => {
    alphabatizedGroups.forEach((g) => {
      if (g.group === k) {
        if (!combinedGroups.has(g.group)) {
          combinedGroups.set(g.group, g.products);
          return;
        }

        const value = combinedGroups.get(g.group);
        combinedGroups.set(g.group, [...value, ...g.products]);
        return;
      }

      if (!combinedGroups.has(g.group)) {
        combinedGroups.set(g.group, g.products);
      }
    });
  });

  const result: { group: string; products: Product[] }[] = [];

  combinedGroups.forEach((v, k) => {
    result.push({ group: v[0].name, products: v });
  });

  return result;
}

checkForDupeGroupNames();

function runFormat() {
  const data = checkForDupeGroupNames();
  return data;
}

function writeFinalData(data: any) {
  fs.writeFileSync(
    "prisma/data/2024-products/product-groups.json",
    JSON.stringify(data, null, 2)
  );
}

writeFinalData(runFormat());
