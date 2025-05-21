import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface XPState {
  xp: number;
  maxXP: number;
  addXP: (amount: number) => void;
  resetXP: () => void;
}

export const useXPStore = create<XPState>()(
  persist(
    (set) => ({
      xp: 0,
      maxXP: 500,
      addXP: (amount) => set((state) => ({
        xp: Math.min(state.xp + amount, state.maxXP)
      })),
      resetXP: () => set({ xp: 0 })
    }),
    {
      name: 'xp-storage'
    }
  )
);