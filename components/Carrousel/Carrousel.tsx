"use client";
import { useState, useEffect } from "react"
import { type CarouselApi } from "@/components/ui/carousel"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import type { CarCarouselItem } from "@/app/Autos/Modelo/[slug]/page";
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselSizes({ carouselData }: any) {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (!api) return

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    const scrollTo = (index: number) => {
        api?.scrollTo(index)
    }
    return (
        <div className="w-full p-6 flex justify-center">
            <Carousel
                setApi={setApi}
                className="w-80 md:max-w-5xl md:w-full"
                opts={{
                    align: "start",
                    loop: true,
                    containScroll: "trimSnaps",
                    slidesToScroll: 1,
                }}
            >
                <CarouselContent>
                    {carouselData.map((item : CarCarouselItem, index : number) => (
                        <CarouselItem className="md:basis-1/3 basis-1/1" key={index}>
                            <div className="p-1">
                                <Card className="bg-[#F7F7F7]">
                                    <CardContent className="flex flex-col items-center justify-center">
                                        <Image
                                            src={item.image}
                                            width={268}
                                            height={146}
                                            alt="Modelo"
                                            quality={90}
                                            className="rounded-lg shadow-lg object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="mt-5 text-balance">
                                            <CardTitle>
                                                <h4 className="font-semibold text-[20px]">{item.title}</h4>
                                            </CardTitle>
                                            <CardDescription>
                                                <p className="text-[16px] mt-4">{item.content}</p>
                                            </CardDescription>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="hidden sm:flex justify-between w-full px-4 absolute top-1/2 transform -translate-y-1/2">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
                
                <div className="flex justify-center space-x-2 mt-4">
                    {Array.from({ length: count }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={`w-3 h-3 rounded-full transition-all ${index === current
                                ? "bg-[#4A4A4A]"
                                : "bg-[#C5C5C5] hover:bg-gray-400"
                                }`}
                            aria-label={`Ir al slide ${index + 1}`}
                        />
                    ))}
                </div>
            </Carousel>
        </div >
    )
}