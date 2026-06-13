<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import { useState } from "react";
>>>>>>> e4d02891bace3424a69b515ab45922a9ef54a184
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { MenuIcon } from "lucide-react";

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/accounts": "Social Accounts",
<<<<<<< HEAD
  "/scheduler": "Post Scheduler", // ✅ match Sidebar path
=======
  "/schedule": "Post scheduler",
>>>>>>> e4d02891bace3424a69b515ab45922a9ef54a184
  "/ai-composer": "AI Composer",
};

const Layout = () => {
  const location = useLocation();
<<<<<<< HEAD
=======

>>>>>>> e4d02891bace3424a69b515ab45922a9ef54a184
  const title = pageTitles[location.pathname] || "SocialAi";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

<<<<<<< HEAD
  // Close sidebar on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

=======
>>>>>>> e4d02891bace3424a69b515ab45922a9ef54a184
  return (
    <div className="flex h-screen bg-slate-50">
      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <Sidebar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />

      <div className="flex-1 flex flex-col overflow-hidden">
<<<<<<< HEAD
        {/* Top bar */}
=======
        {/*Top bar */}
>>>>>>> e4d02891bace3424a69b515ab45922a9ef54a184
        <header className="h-16 bg-white border-b border-slate-200 flex items-center px-4 md:px-8 gap-4">
          <button
            className="md:hidden p-2 -ml-2 text-slate-500"
            onClick={() => setIsMobileMenuOpen(true)}
<<<<<<< HEAD
            aria-label="Open menu"
          >
            <MenuIcon className="w-6 h-6" />
=======
          >
            <MenuIcon className="size-6" />
>>>>>>> e4d02891bace3424a69b515ab45922a9ef54a184
          </button>
          <div>
            <h1 className="text-slate-900">{title}</h1>
            <p className="text-sm text-slate-400 hidden sm:block">
<<<<<<< HEAD
=======
              {" "}
>>>>>>> e4d02891bace3424a69b515ab45922a9ef54a184
              Manage and automate your social presence
            </p>
          </div>
        </header>
<<<<<<< HEAD

=======
>>>>>>> e4d02891bace3424a69b515ab45922a9ef54a184
        <main className="flex-1 overflow-auto p-4 sm:p-6 md:p-8 xl:p-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
<<<<<<< HEAD

=======
>>>>>>> e4d02891bace3424a69b515ab45922a9ef54a184
export default Layout;
