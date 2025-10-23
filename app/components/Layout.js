// components/Layout.js
import { Fragment } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r hidden md:block">
        {/* Sidebar navigation, collapsible sections */}
        <div className="p-6 font-bold text-lg">Hedamo</div>
        <nav>
          <Link href="/" className="block px-6 py-2 hover:bg-gray-100">Dashboard</Link>
          <a href="/products" className="block px-6 py-2 hover:bg-gray-100">Products</a>
          <a href="/add-product" className="block px-6 py-2 hover:bg-gray-100">Add Product</a>
        </nav>
      </aside>
      <main className="flex-1 flex flex-col">
        <header className="flex items-center justify-between p-4 bg-white border-b">
          <div className="md:hidden">
            <Bars3Icon className="h-6 w-6" />
            {/* Implement toggle logic */}
          </div>
          <div className="font-semibold">Product Transparency Dashboard</div>
        </header>
        <section className="p-4 flex-1 overflow-auto">{children}</section>
      </main>
    </div>
  );
}
