"use client";

import { getProductFromCode } from "@/utils/qb/queries";

export const ExampleFeature = ({
  unit
}: {
  unit: {
    size: string;
    price: number;
    code: string;
  };
}) => {
  const handleGetProductFromCode = async () =>
    await getProductFromCode(unit.code.split(":")[1]);
  return <button onClick={handleGetProductFromCode}>Get Product</button>;
};
