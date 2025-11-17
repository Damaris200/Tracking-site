import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 transition-colors duration-300 dark:bg-slate-900 dark:text-white">
      <Header />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
