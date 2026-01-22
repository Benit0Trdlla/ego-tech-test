import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectSeparator
} from "@/components/ui/select"
interface OrderByProps {
  value: string;
  onValueChange: (value: string) => void;
}

export function OrderBy({ value, onValueChange }: OrderByProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="max-w-40 font-bold border-transparent">
        <SelectValue placeholder="Ordenar por" defaultValue="Nada" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Nada">Nada</SelectItem>
          <SelectSeparator />
          <SelectItem value="desc">
            <span className="hidden md:flex gap-2">De <strong>menor</strong> a <strong>mayor</strong> precio</span>
            <span className="block md:hidden"><small>Precio: <strong>menor</strong> a <strong>mayor</strong></small></span>
          </SelectItem>
          <SelectSeparator />
          <SelectItem value="asc">
            <span className="hidden md:flex gap-2">De <strong>mayor</strong> a <strong>menor</strong> precio</span>
            <span className="block md:hidden"><small>Precio: <strong>mayor</strong> a <strong>menor</strong></small></span>
          </SelectItem>
          <SelectSeparator />
          <SelectItem value="new">Más <strong>nuevos</strong> primero</SelectItem>
          <SelectSeparator />
          <SelectItem value="old">Más <strong>viejos</strong> primero</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
export default OrderBy