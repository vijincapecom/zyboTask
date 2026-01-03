import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface OrderProduct {
  name: string;
  image: string;
  size?: string;
  price: number;
  mrp?: number;
}

interface OrderState {
  order: any | null;
  setOrder: (order: any) => void;
  clearOrder: () => void;
}


export const useOrderStore = create(
  persist<OrderState>(
    (set) => ({
      order: null,
      setOrder: (order) => set({ order }),
      clearOrder: () => set({ order: null }),
    }),
    {
      name: 'order-storage',
    }
  )
);
