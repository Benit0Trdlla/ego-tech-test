import { getCars } from "@/app/data/getCars"
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Car = {
    id: number;
    name: string;
    segment: string;
    year: number;
    price: number;
    thumbnail: string;
    photo: string;
};

export default async function CarsList() {
    const cars: Car[] = await getCars();
    return (
        <>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-5 py-3">
                {cars.map((car) => (
                    <Link href={`/cars/${car.id}`} key={car.id} className="group relative flex flex-col cursor-pointer">
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
