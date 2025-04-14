import { NavLink, useNavigate } from "react-router";
import { FaUser } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineDynamicFeed } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { useAuthStore } from "../stores/authStore";
import { useUIStore } from "../stores/uiStore";
import { IoMenu } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { FaX } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

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

export default function SideNavbar() {
  const navigate = useNavigate();
  const { logout } = useAuthStore();
  const { isSidebarOpen, toggleSidebar, isDarkmode, toggleDarkmode } =
    useUIStore();

  // const handleLogout = () => {
  //   logout();
  //   navigate("/");
  // };

  return (
    <>
      {/* mobile */}

      <div className="md:hidden bg-white dark:bg-zinc-900 flex justify-between items-center px-4 py-3 z-20">
        <button onClick={toggleSidebar}>
          <IoMenu size={24} className="text-zinc-800 dark:text-white" />
        </button>
        <span className="text-purple-600 font-semibold">Instagram Viewer</span>
        <button onClick={toggleDarkmode}>
          {isDarkmode ? (
            <IoSunnyOutline size={24} className="text-yellow-100" />
          ) : (
            <IoMoonOutline
              size={24}
              className="text-zinc-800 dark:text-white"
            />
          )}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-screen z-30 md:static bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white shadow-md transform transition-transform ${
          isSidebarOpen
            ? "translate-x-0 w-56"
            : "-translate-x-full md:translate-x-0 md:w-20"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-zinc-300 dark:border-zinc-700">
          <span
            className={`text-xl font-bold text-purple-500 ${
              isSidebarOpen ? "block" : "hidden md:hidden"
            }`}
          >
            Instagram Viewer
          </span>
          <div className="md:hidden">
            <button onClick={toggleSidebar}>
              <FaX size={24} />
            </button>
          </div>
        </div>

        {/* nav items */}
        <nav className="flex-1 px-3 py-4 space-y-2">
          {navItems.map(item => (
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 text-lg font-medium rounded-lg ${
                  isActive
                    ? "bg-gray-200 dark:bg-zinc-800 text-gray-900 dark:text-gray-100 font-bold"
                    : "text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-700"
                }`
              }
            >
              {item.icon}
              {isSidebarOpen && <span>{item.name}</span>}
            </NavLink>
          ))}
        </nav>

        {/* logout and toggle darkmode button */}
        <div className="p-3 border-t border-zinc-200 dark:border-zinc-700 space-y-2">
          <button
            onClick={toggleDarkmode}
            className="w-full flex items-center gap-3 px-3 py-2 text-base rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700"
          >
            {isDarkmode ? (
              <IoSunnyOutline size={24} />
            ) : (
              <IoMoonOutline size={24} />
            )}
            {isSidebarOpen && (
              <span className="text-lg font-medium">
                {isDarkmode ? "Light Mode" : "Dark Mode"}
              </span>
            )}
          </button>

          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-lg font-semibold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30"
          >
            <MdLogout size={24} />
            {isSidebarOpen && <span>Logout</span>}
          </button>

          <button
            onClick={toggleSidebar}
            className="hidden md:flex items-center justify-left w-full px-4  text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-white"
          >
            {isSidebarOpen ? (
              <FaArrowLeft size={24} />
            ) : (
              <FaArrowRight size={24} />
            )}
            {isSidebarOpen && (
              <span className="text-lg font-medium ml-2">Collapse</span>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
