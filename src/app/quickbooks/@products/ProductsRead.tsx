import { getAllProducts } from "@/utils/database/quickbooks/queries";
import { useQuery } from "@tanstack/react-query";

type QbProduct = {
  Name: string;
  Description: string;
  Active: boolean;
  FullyQualifiedName: string;
  Taxable: boolean;
  SalesTaxIncluded: boolean;
  UnitPrice: number;
  Type: string;
  IncomeAccountRef: {
    value: string;
    name: string;
  };
  PurchaseTaxIncluded: boolean;
  PurchaseCost: number;
  TrackQtyOnHand: boolean;
  domain: string;
  sparse: boolean;
  Id: string;
  SyncToken: string;
  MetaData: {
    CreateTime: string;
    LastUpdatedTime: string;
  };
};

export const ReadProducts = () => {
  const { data } = useQuery({
    queryKey: ["quickbooks", "products"],
    queryFn: async () => await getAllProducts()
  });

  return (
    <div>
      {data &&
        data.length > 0 &&
        data.map((product: QbProduct) => <div key={product.Id}>{product.Name}</div>)}
    </div>
  );
};
