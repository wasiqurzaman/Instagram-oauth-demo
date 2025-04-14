import { create } from "zustand";

type UIStore = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  isDarkmode: boolean;
  toggleDarkmode: () => void;
};

export const useUIStore = create<UIStore>(set => ({
  isSidebarOpen: true,
  toggleSidebar: () => set(s => ({ isSidebarOpen: !s.isSidebarOpen })),
  isDarkmode: localStorage.getItem("theme") === "dark",
  toggleDarkmode: () =>
    set(s => {
      const newMode = !s.isDarkmode;
      document.documentElement.classList.toggle("dark", newMode);
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return { isDarkmode: newMode };
    }),
}));
