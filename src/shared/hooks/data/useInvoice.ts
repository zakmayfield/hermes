import { createInvoice } from "@/data/qb/invoice";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "../ui";

export const useInvoice = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const invoiceQuery = useQuery({
    staleTime: Infinity,
    queryKey: ["invoices"]
  });

  const createInvoiceMutation = useMutation({
    mutationFn: createInvoice,
    onError(error) {
      toast(error.message, "error");
    },
    onSuccess() {
      toast("Successfully created invoice");
    }
  });

  return { invoiceQuery, createInvoiceMutation };
};
