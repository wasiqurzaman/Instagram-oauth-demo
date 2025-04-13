import { NavLink } from "react-router";
import { FaUser } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineDynamicFeed } from "react-icons/md";
import { MdLogout } from "react-icons/md";

export default function SideNavbar() {
  const navItems = [
    {
      name: "Dashboard",
      icon: <MdSpaceDashboard />,
      to: "/dashboard",
    },
    {
      name: "Profile",
      icon: <FaUser />,
      to: "/profile",
    },
    {
      name: "Feed",
      icon: <MdOutlineDynamicFeed />,
      to: "/feed",
    },
  ];

  return (
    <div className="h-screen w-56 bg-white shadow-lg hidden md:flex flex-col">
      <div className="text-xl font-bold text-purple-600 p-6 border-b border-gray-200">
        Instagram Viewer
      </div>
      <nav>
        {navItems.map(item => (
          <NavLink
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-lg font-medium rounded-lg ${
                isActive
                  ? "bg-gray-200 text-gray-900 font-bold"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
      <div className="py-4">
        <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-lg font-semibold text-red-600 hover:bg-red-50">
          <MdLogout size={24} />
          Logout
        </button>
      </div>
    </div>
  );
}
