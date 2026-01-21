import MenuTab from "./ui/MenuTab";
import MenuToggle from "./ui/MenuToggle";
import Image from "next/image";
export function Navbar() {
    return (
        <header className="w-full px-4 py-5 mb-5 flex justify-between border-b">
            <div className="flex items-center justify-between gap-5">
                <Image src="/Logo.svg" alt="EGO Logo" width={38} height={40} />
                <MenuTab />
            </div>
            <MenuToggle />
        </header>
    )
}

export default Navbar;