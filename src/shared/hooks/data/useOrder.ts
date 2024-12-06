import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "../ui";
import {
  getOrdersFromAuthenticatedUser,
  createOrder,
  getUserOrders
} from "@/data/database/order";
import { Order, OrderItem } from "@prisma/client";

export const useOrder = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const authUserOrdersQuery = useQuery({
    staleTime: Infinity,
    queryKey: ["orders", "authenticated_user"],
    queryFn: async () =>
      await getOrdersFromAuthenticatedUser<(Order & { items: OrderItem[] })[]>({
        include: { items: true }
      })
  });

  const getUserOrdersQuery = useQuery({
    staleTime: Infinity,
    queryKey: ["orders", "cm4bl4b450000l9pac1lvxa0x"],
    queryFn: async () =>
      await getUserOrders<(Order & { items: OrderItem[] })[]>({
        where: { userId: "cm4bl4b450000l9pac1lvxa0x" },
        include: { items: true }
      })
  });

  const createOrderMutation = useMutation({
    mutationFn: createOrder,
    onError(error) {
      toast(error.message, "error");
      queryClient.invalidateQueries({ queryKey: ["orders", "authenticated_user"] });
    },
    onSuccess(data) {
      toast(`Successfully created order`);

      queryClient.setQueryData<(Order & { items: OrderItem[] })[]>(
        ["orders", "authenticated_user"],
        (oldData) => {
          return oldData ? [data, ...oldData] : oldData;
        }
      );
    }
  });

  return { getUserOrdersQuery, authUserOrdersQuery, createOrderMutation };
};
