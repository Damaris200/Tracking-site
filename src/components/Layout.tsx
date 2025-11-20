// Layout: Page scaffold with header, main content, and footer
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      <main className="w-full bg-white dark:bg-slate-900">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
