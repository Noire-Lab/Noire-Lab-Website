import { create } from "zustand";

type AppStore = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const useAppStore = create<AppStore>()((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));
