"use client";
import { useState } from "react";

const tabs: string[] = [
    "Modelos",
    "Ficha de Modelo",
]

export const MenuTab = () => {
    const [activeTab, setActiveTab] = useState<string>("Modelos")

    return (
        <nav className="gap-5 flex-wrap hidden md:flex">
            <ul className="flex">
                {tabs.map((tab) => (
                    <li
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`transition-colors duration-200 hover:bg-white p-5 ${activeTab === tab ? "text-[#EB0A1E] border-b-2 border-[#EB0A1E]" : ""}`}
                    >
                        {tab}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default MenuTab;