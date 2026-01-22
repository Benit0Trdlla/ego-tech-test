"use client"
import { Fragment } from "react"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectSeparator
} from "@/components/ui/select"

const categories: string[] = [
    "Todos",
    "Autos",
    "Pickups y Comerciales",
    "SUVs y Crossovers"
]

interface FilterByProps {
    value: string;
    onValueChange: (value: string) => void;
}

export function FilterBy({ value, onValueChange }: FilterByProps) {
    const handleClick = (category: string) => {
        onValueChange(category)
    }
    return (
        <>
            <div className="hidden md:flex gap-3 items-center">
                <p className="text-[14px] font-semibold">
                    Filtrar por:
                </p>
                <div className="flex gap-2 flex-wrap">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            onClick={() => handleClick(category)}
                            variant={value === category ? "secondary" : "ghost"}
                            className="px-4 py-2"
                        >
                            {category}
                        </Button>
                    ))}
                </div>
            </div>
            <div className="md:hidden">
                <Select value={value} onValueChange={onValueChange}>
                    <SelectTrigger className="max-w-40 font-bold border-transparent">
                        <SelectValue placeholder="Filtrar por:" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {categories.map((category) => (
                                <Fragment key={category}>
                                    <SelectItem value={category}>
                                        <small>
                                            {category}
                                        </small>
                                    </SelectItem>
                                    <SelectSeparator />
                                </Fragment>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </>
    )
}

export default FilterBy