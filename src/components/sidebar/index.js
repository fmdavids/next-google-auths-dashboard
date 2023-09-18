"use client";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbBrandProducthunt } from "react-icons/tb";
import { PiUsersFourLight } from "react-icons/pi";
import { useContext } from "react";
import { GlobalContext } from "@/app/context";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <LuLayoutDashboard size={25} />,
  },
  {
    id: "products",
    label: "Products",
    path: "/products",
    icon: <TbBrandProducthunt size={25} />,
  },
  {
    id: "visitor",
    label: "Visitors",
    path: "/visitors",
    icon: <PiUsersFourLight size={25} />,
  },
];

export default function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useContext(GlobalContext);
  const pathName = usePathname();
  const router = useRouter()

  const handleNavigation = (getMenuItem) =>{
    router.push(getMenuItem.path)
  }
  return (
    <aside
      className={`absolute left-0 top-0 z-9999 flex h-screen w-7.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear lg:static lg:translate-x-0
  ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href={"/"} className="text-[40px] text-white">
          {" "}
          Analytics
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div className="">
            <ul className="mb-6 flex flex-col gap-1.5">
              {menuItems.map((menuItem) => (
                <li key={menuItem.id}>
                  <span
                  onClick={()=> handleNavigation(menuItem)}
                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark cursor-pointer
                ${pathName.includes(menuItem.id) && "bg-gray-600"}`}
                  >
                    {menuItem.icon}
                    {menuItem.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
}
