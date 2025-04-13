import { Outlet } from "react-router";
import SideNavbar from "./SideNavbar";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen">
      <SideNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
