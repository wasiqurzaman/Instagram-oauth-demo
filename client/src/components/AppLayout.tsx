import { Outlet } from "react-router";
import SideNavbar from "./SideNavbar";

export default function AppLayout() {
  return (
    <div className="flex  bg-gray-100 dark:bg-zinc-950 transition-colors">
      <div className="h-screen sticky top-0 z-30">
        <SideNavbar />
      </div>
      <main className="flex-1 min-h-screen overflow-y-auto max-h-screen p-4">
        <Outlet />
      </main>
    </div>
  );
}
