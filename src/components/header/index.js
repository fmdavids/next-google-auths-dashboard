"use client";

import { GlobalContext } from "@/app/context";
import { signIn, signOut, useSession } from "next-auth/react";
import { useContext } from "react";

export default function Header() {
  const { sidebarOpen, setSidebarOpen } = useContext(GlobalContext);
const {status} = useSession()

console.log(status)

  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow">
      <div className="flex flex-grow gap-2 justify-end py-4 px-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button className="inline-flex items-center justify-center bg-black px-6 py-2 text-lg text-white font-medium tracking-wide uppercase">
            {sidebarOpen ? "Hide sidebar" : "Show Sidebar"}
          </button>
        </div>
        <button onClick={()=> status === 'authenticated' ? signOut() : signIn('google')} className="inline-flex items-center justify-center bg-black px-6 py-2 text-lg text-white font-medium tracking-wide uppercase">
          {
            status === 'authenticated' ? 'Logout' : 'Login'
          }
        </button>
      </div>
    </header>
  );
}
