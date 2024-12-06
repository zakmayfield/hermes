import { createInvoice } from "@/data/qb/services/invoice";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useInvoice = () => {
  const invoiceQuery = useQuery({
    staleTime: Infinity,
    queryKey: ["invoices"]
  });

  const createInvoiceMutation = useMutation({ mutationFn: createInvoice });

  return { invoiceQuery, createInvoiceMutation };
};
