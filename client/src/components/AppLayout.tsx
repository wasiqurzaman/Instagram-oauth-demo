import { Outlet } from "react-router";
import SideNavbar from "./SideNavbar";

export default function AppLayout() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 dark:bg-zinc-950 transition-colors">
      <div className="h-screen sticky top-0 left-0">
        <SideNavbar />
      </div>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}
