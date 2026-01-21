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
        <SheetTitle className="text-[14px] mr-7">Cerrar</SheetTitle>
      </SheetHeader>
      <nav className="flex flex-col gap-4 py-2 px-4 mr-6 overflow-y-auto max-h-[calc(100vh-100px)]">
        <a className="font-medium text-sm hover:underline text-[20px]" href="#">
          Modelos
        </a>
        <a className="font-medium text-sm hover:underline text-[20px]" href="#">
          Servicios y Accesorios
        </a>
        <a className="font-medium text-sm hover:underline text-[20px]" href="#">
          Financiación
        </a>
        <a className="font-medium text-sm hover:underline text-[20px]" href="#">
          Reviews y Comunidad
        </a>
        <hr />
        <a className="font-medium text-sm hover:underline text-[20px]" href="#">
          Toyota Mobility Service
        </a>
        <a className="font-medium text-sm hover:underline text-[20px]" href="#">
          Toyota Gazoo Racing
        </a>
        <a className="font-medium text-sm hover:underline text-[20px]" href="#">
          Toyota Híbridos
        </a>
        <hr />
        <a className="font-medium text-sm hover:underline text-[20px]" href="#">
          Concesionarios
        </a>
        <a className="font-medium text-sm hover:underline text-[20px]" href="#">
          Test Drive
        </a>
        <a className="font-medium text-sm hover:underline text-[20px]" href="#">
          Contacto
        </a>
        <hr />
        <a className="font-medium text-sm hover:underline text-[20px]" href="#">
          Actividades
        </a>
        <a className="font-medium text-sm hover:underline text-[20px]" href="#">
          Servicios al Cliente
        </a>
        <a className="font-medium text-sm hover:underline text-[20px]" href="#">
          Ventas Especiales
        </a>
        <a className="font-medium text-sm hover:underline text-[20px]" href="#">
          Innovación
        </a>
        <a className="font-medium text-sm hover:underline text-[20px]" href="#">
          Prensa
        </a>
        <a className="font-medium text-sm hover:underline text-[20px]" href="#">
          Acerca de...
        </a>
      </nav>
    </SheetContent>
  </Sheet>
)

export default MenuToggle
