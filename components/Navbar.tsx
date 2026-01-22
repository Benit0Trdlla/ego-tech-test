import MenuTab from "./ui/MenuTab";
import MenuToggle from "./ui/MenuToggle";
import Image from "next/image";
export function Navbar() {
    return (
        <header className="w-full px-4 pt-5 mb-5 flex items-center justify-between border-b">
            <div className="flex items-center justify-between gap-5">
                <Image src="/Logo.svg" alt="EGO Logo" width={38} height={40} className="ml-5"/>
                <div className="ml-10">
                    <MenuTab />
                </div>
            </div>
            <MenuToggle />
        </header>
    )
}

export default Navbar;