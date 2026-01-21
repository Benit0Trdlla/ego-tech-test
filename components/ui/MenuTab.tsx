"use client";
import { Button } from "./button";
import { useState } from "react";

const tabs: string[] = [
    "Modelos",
    "Ficha de Modelo",
]

export const MenuTab = () => {
    const [activeTab, setActiveTab] = useState<string>("Modelos")

    return (
        <nav className="gap-5 flex-wrap hidden md:flex">
            {tabs.map((tab) => (
                <Button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    variant={activeTab === tab ? "secondary" : "ghost"}
                    className="p-5"
                >
                    {tab}
                </Button>
            ))}
        </nav>
    )
}

export default MenuTab;