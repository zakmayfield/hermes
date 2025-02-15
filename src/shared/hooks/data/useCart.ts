"use client";

import {
  createCartItem,
  deleteAllCartItems,
  deleteCartItem,
  getCart,
  upsertCartItem
} from "@/data/database/cart";
import { Cart, CartItem, Product } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "../ui";

export const useCartQuery = () => {
  const cartQuery = useQuery({
    staleTime: Infinity,
    queryKey: ["cart"],
    queryFn: async () =>
      await getCart<Cart & { items: (CartItem & { product: Product })[] }>({
        select: {
          items: {
            select: {
              cartId: true,
              cartItemId: true,
              createdAt: true,
              productId: true,
              quantity: true,
              product: true
            }
          }
        }
      })
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
      toast(`Added to cart: (${data.quantity})`);
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    }
  });

  const upsertCartItemMutation = useMutation({
    mutationFn: upsertCartItem,
    onError(error) {
      toast(error.message, "error");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onSuccess() {
      toast(`Updated cart item`);
      queryClient.invalidateQueries({ queryKey: ["cart"] });
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
          ? {
              ...oldData,
              items: oldData.items.filter((i) => i.productId !== data.productId)
            }
          : oldData;
      });
    }
  });

  const deleteAllCartItemsMutation = useMutation({
    mutationFn: deleteAllCartItems,
    onError(error) {
      toast(error.message, "error");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    }
  });

  return {
    createCartItemMutation,
    upsertCartItemMutation,
    deleteCartItemMutation,
    deleteAllCartItemsMutation
  };
};
