import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

type status_type = "turned_off" | "turning_on" | "turning_off" | "turned_on"

interface SystemStore {
  status: status_type;
  setStatus: (status: status_type) => void;
}

const useSystemStore = create<SystemStore>()(
  persist(
    (set) => ({
      status: "turned_off",
      setStatus: (status) => set({ status }),
    }),
    {
      name: 'system-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useSystemStore