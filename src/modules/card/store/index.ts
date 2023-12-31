import { create } from 'zustand';
import { persist } from 'zustand/middleware'

interface CardState {
  closed: boolean
  setClosed: (value: boolean) => void
}

export const useCardStore = create(
  persist<CardState>(
    (set) => ({
      closed: false,
      setClosed: (value) => set({ closed: value }),
    }),
    {
      name: 'card-storage',
    },
  ),
)