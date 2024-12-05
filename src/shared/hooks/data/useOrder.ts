import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "../ui";
import { getOrders, createOrder } from "@/data/database/order";
import { Order, OrderItem } from "@prisma/client";

export const useOrder = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const ordersQuery = useQuery({
    staleTime: Infinity,
    queryKey: ["orders"],
    queryFn: async () =>
      await getOrders<(Order & { items: OrderItem[] })[]>({ include: { items: true } })
  });

  const createOrderMutation = useMutation({
    mutationFn: createOrder,
    onError(error) {
      toast(error.message, "error");
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onSuccess(data) {
      toast(`Successfully created order`);

      queryClient.setQueryData<(Order & { items: OrderItem[] })[]>(
        ["orders"],
        (oldData) => {
          return oldData ? [data, ...oldData] : oldData;
        }
      );
    }
  });

  return { ordersQuery, createOrderMutation };
};
