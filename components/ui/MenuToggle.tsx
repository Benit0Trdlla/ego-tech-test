import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export const title = "Mobile Menu Sheet"

const MenuToggle = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="ghost">Menú <Menu /></Button>
    </SheetTrigger>
    <SheetContent side="right">
      <SheetHeader>
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>
      <nav className="flex flex-col gap-4 p-4">
        <a className="font-medium text-sm hover:underline" href="#">
          Home
        </a>
        <a className="font-medium text-sm hover:underline" href="#">
          Products
        </a>
        <a className="font-medium text-sm hover:underline" href="#">
          About
        </a>
        <a className="font-medium text-sm hover:underline" href="#">
          Contact
        </a>
      </nav>
    </SheetContent>
  </Sheet>
)

export default MenuToggle
