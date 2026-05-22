import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { product } from '@prisma/client';

export interface CartItem {
  product: product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.product.id === product.id);
          if (existingItem) {
            return {
              items: state.items.map(item => 
                item.product.id === product.id 
                  ? { ...item, quantity: Math.min(item.quantity + quantity, product.stockCount) } 
                  : item
              )
            };
          }
          return { items: [...state.items, { product, quantity }] };
        });
      },
      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        }));
      },
      updateQuantity: (productId, quantity) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
          ),
        }));
      },
      clearCart: () => {
        set({ items: [] });
      },
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      getTotalPrice: () => {
        return get().items.reduce((total, item) => {
          // Prisma decimal needs to be handled, but since it's serialized to JSON, it might be a string
          const price = typeof item.product.price === 'string' ? parseFloat(item.product.price) : Number(item.product.price);
          return total + (price * item.quantity);
        }, 0);
      },
    }),
    {
      name: 'bazar-cart-storage',
    }
  )
);
