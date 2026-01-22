"use client";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation'

const tabs: string[] = [
    "Modelos",
    "Ficha de Modelo",
]

export const MenuTab = () => {
    const pathname = usePathname()

    const activeTab = pathname === '/' ? "Modelos" : "Ficha de Modelo"

    return (
        <nav className="gap-5 flex-wrap hidden md:flex">
            <ul className="flex">
                {tabs.map((tab) => (
                    <li
                        key={tab}
                        // onClick={() => setActiveTab(tab)}
                        className={`transition-colors duration-200 hover:bg-white p-5 ${activeTab === tab ? "text-[#EB0A1E] border-b-2 border-[#EB0A1E]" : ""}`}
                    >
                        <a href={tab === "Modelos" ? "/" : ""}>
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default MenuTab;