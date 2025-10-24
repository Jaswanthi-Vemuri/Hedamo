import { ReactNode, useState } from "react";
import Link from "next/link";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center px-4 py-3 md:px-6 md:py-4 bg-blue-900 shadow text-white border-b relative">
        <div
          className="font-bold text-lg md:text-2xl mr-4 md:mr-8 tracking-wide cursor-pointer transition-colors duration-200 z-50 relative"
          tabIndex={0}
          onMouseEnter={() => setSidebarOpen(true)}
          onMouseLeave={() => setSidebarOpen(false)}
        >
          Hedamo
          <div
            className={`absolute left-0 top-full min-w-[180px] bg-white shadow-xl border rounded transition-transform duration-300
              ${sidebarOpen ? "translate-x-0 opacity-100" : "-translate-x-32 opacity-0 pointer-events-none"}
            `}
            onMouseEnter={() => setSidebarOpen(true)}
            onMouseLeave={() => setSidebarOpen(false)}
          >
            <nav className="flex flex-col p-2 gap-2">
              <Link href="/" className="block px-3 py-2 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded transition">
                Dashboard
              </Link>
              <Link href="#" className="block px-3 py-2 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded transition">
                Products
              </Link>
              <Link href="#" className="block px-3 py-2 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded transition">
                Add Product
              </Link>
            </nav>
          </div>
        </div>
        <span className="hidden md:inline h-7 w-px bg-blue-200 mx-4" />
        <div className="text-base md:text-xl font-semibold z-10">
          Product Transparency Dashboard
        </div>
      </header>
      <main className="p-2 md:p-6">{children}</main>
    </div>
  );
}
