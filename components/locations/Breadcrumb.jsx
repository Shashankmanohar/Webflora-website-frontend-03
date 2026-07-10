import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center space-x-2 text-xs font-mono text-gray-500 uppercase tracking-widest py-6 px-4 max-w-7xl mx-auto w-full">
      <Link href="/" className="hover:text-orange-500 transition-colors flex items-center gap-1">
        <Icon icon="solar:home-linear" className="text-sm" />
        Home
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Icon icon="solar:alt-arrow-right-linear" className="text-gray-700 text-[10px]" />
          {item.href ? (
            <Link href={item.href} className="hover:text-orange-500 transition-colors">
              {item.name}
            </Link>
          ) : (
            <span className="text-gray-300 font-medium">{item.name}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
