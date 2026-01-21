import OrderBy from "@/components/OrderBy";
import FilterBy from "@/components/FilterBy";
import CarsList from "@/components/CarsList";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="container mx-auto px-3 md:px-0">
      <h1 className="text-[50px]/[57px] font-bold py-5">Descubrí todos los modelos</h1>
      <div className="py-5 border-b-2 flex items-center justify-between gap-4">
        <FilterBy />
        <OrderBy />
      </div>
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <CarsList />
      </Suspense>
    </div>
  );
}
