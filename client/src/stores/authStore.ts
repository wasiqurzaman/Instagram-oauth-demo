import { create } from "zustand";
import axios from "axios";
import { persist } from "zustand/middleware";

type user = {
  id: string;
};

type AuthStore = {
  user: user | null;
  isAuthenticated: boolean;
  setUser: (userId: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    set => ({
      user: null,
      isAuthenticated: false,
      setUser: async userId => {
        set({ user: { id: userId }, isAuthenticated: true });
      },

      logout: async () => {
        await axios.post(
          "http://localhost:3000/api/auth/logout",
          {},
          { withCredentials: true }
        );
        set({ user: null, isAuthenticated: false });
      },
    }),
    { name: "auth-storage" }
  )
);
