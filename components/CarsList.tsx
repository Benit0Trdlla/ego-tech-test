'use client';

import { useMemo, useState } from 'react';
import Link from "next/link";
import OrderBy from '@/components/OrderBy';
import FilterBy from './FilterBy';
import { Button } from "@/components/ui/button";
import { getCars } from '@/app/data/getCars';
import useSWR from 'swr';

type Car = {
    id: number;
    name: string;
    segment: string;
    year: number;
    price: number;
    thumbnail: string;
    photo: string;
};

// type SortOption = "" | "asc" | "desc" | "new" | "old";
// type FilterOption = "" | "Autos" | "Pickups y Comerciales" | "SUVs y Crossovers";

const FILTER_RULES: { [key: string]: string[] | undefined } = {
    "Autos": ["Sedan", "Hatchback"],
    "Pickups y Comerciales": ["Pickups y Comerciales"],
    "SUVs y Crossovers": ["SUVs"],
};

export default function CarsList() {
    const { data: cars, error, isLoading } = useSWR<Car[]>("cars", getCars);
    const [sortBy, setSortBy] = useState<string>("");
    const [filterBy, setFilterBy] = useState<string>("");

    const filteredAndSortedCars = useMemo(() => {
        if (!cars) return [];

        let filtered = [...cars];

        if (filterBy !== "Todos") {
            filtered = filtered.filter(car => {
                // Obtiene los segmentos válidos para el filtro actual
                const validSegments = FILTER_RULES[filterBy];

                // Si hay regla, verifica si el auto está incluido. Si no, true 
                return validSegments ? validSegments.includes(car.segment) : true;
            });
        }

        switch (sortBy) {
            case "desc":
                filtered.sort((a, b) => a.price - b.price);
                break;
            case "asc":
                filtered.sort((a, b) => b.price - a.price);
                break;
            case "new":
                filtered.sort((a, b) => b.year - a.year);
                break;
            case "old":
                filtered.sort((a, b) => a.year - b.year);
                break;
            default:
                break;
        }

        return filtered;
    }, [sortBy, filterBy, cars]);

    if (isLoading) return <div className="text-center py-10">Cargando autos...</div>;
    if (error) return <div className="text-center py-10">Error al cargar los autos.</div>;
    if (!cars || cars.length === 0) return <div className="text-center py-10">No hay autos disponibles.</div>;

    return (
        <>
            <div className="py-5 border-b-2 flex items-center justify-between gap-4">
                <FilterBy value={filterBy} onValueChange={setFilterBy} />
                <OrderBy value={sortBy} onValueChange={setSortBy} /> 
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-5 py-3">
                {filteredAndSortedCars.map((car) => (
                    <Link href="#" key={car.id} className="group relative flex flex-col cursor-pointer">
                        <h3 className="text-center text-[28px]/[30px] font-bold mt-3 group-hover:text-[#EB0A1E]">{car.name}</h3>

                        <div className="flex gap-3 justify-center text-sm text-muted-foreground mt-2">
                            <span>{car.year}</span> |
                            <span>${car.price.toLocaleString()}</span>
                        </div>

                        <div className="overflow-hidden rounded-md mt-4">
                            <img
                                src={car.photo || car.thumbnail}
                                alt={car.name}
                                className="w-full h-40 md:h-55 object-cover"
                            />
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-4 from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
                            <div className="relative w-full flex items-center justify-center top-10">
                                <Button className="w-50 rounded-full px-5 cursor-pointer">Ver Modelo</Button>
                            </div>
                        </div>
                    </Link>
                ))}
            </ul>
        </>
    )
}
