import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectSeparator
} from "@/components/ui/select"

export function OrderBy() {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-36 font-bold border-transparent">
        <SelectValue placeholder="Ordenar por" defaultValue="Nada" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Nada">Nada</SelectItem>
          <SelectSeparator />
          <SelectItem value="desc">De Menor a Mayor</SelectItem>
          <SelectSeparator />
          <SelectItem value="asc">De Mayor a Menor</SelectItem>
          <SelectSeparator />
          <SelectItem value="new">Más nuevos primero</SelectItem>
          <SelectSeparator />
          <SelectItem value="old">Más viejos primero</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
export default OrderBy