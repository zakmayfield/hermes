"use client";

import {
  createCartItem,
  deleteCartItem,
  getCart,
  upsertCartItem
} from "@/data/database/cart";
import { Cart, CartItem } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "../ui";

export const useCartQuery = () => {
  const cartQuery = useQuery({
    staleTime: Infinity,
    queryKey: ["cart"],
    queryFn: async () =>
      await getCart<Cart & { items: CartItem[] }>({ include: { items: true } })
  });

  return cartQuery;
};

export const useCart = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const createCartItemMutation = useMutation({
    mutationFn: createCartItem,
    onError(error) {
      toast(error.message, "error");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onSuccess(data) {
      queryClient.setQueryData<Cart & { items: CartItem[] }>(["cart"], (oldData) => {
        return oldData ? { ...oldData, items: [data, ...oldData.items] } : oldData;
      });
    }
  });

  const upsertCartItemMutation = useMutation({
    mutationFn: upsertCartItem,
    onError(error) {
      toast(error.message, "error");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onSuccess(data) {
      toast(`Updated cart item`);
      queryClient.setQueryData<Cart & { items: CartItem[] }>(["cart"], (oldData) => {
        return oldData ? { ...oldData, items: [data, ...oldData.items] } : oldData;
      });
    }
  });

  const deleteCartItemMutation = useMutation({
    mutationFn: deleteCartItem,
    onError(error) {
      toast(error.message, "error");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onSuccess(data) {
      toast(`Removed cart item`);
      queryClient.setQueryData<Cart & { items: CartItem[] }>(["cart"], (oldData) => {
        return oldData
          ? { ...oldData, items: oldData.items.filter((i) => i.unitId !== data.unitId) }
          : oldData;
      });
    }
  });

  return {
    createCartItemMutation,
    upsertCartItemMutation,
    deleteCartItemMutation
  };
};
