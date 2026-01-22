import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselSizes({ carouselData }: any) {
    return (
        <div className="w-full p-6 flex justify-center">
            <Carousel
                className="w-80 md:max-w-5xl md:w-full"
                opts={{
                    align: "start",
                    containScroll: "trimSnaps",
                    slidesToScroll: 1,
                }}
            >
                <CarouselContent>
                    {/* {carouselData.map((item, index) => (
                        <CarouselItem key={index}>
                            <div>
                                <div>
                                    <Card>
                                        <CardContent className="flex flex-col items-center justify-center gap-4">
                                            <Image
                                                src={item.image}
                                                width={268}
                                                height={146}
                                                alt="Modelo"
                                                quality={90}
                                                className="rounded-lg shadow-lg object-cover"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                            <div className="ml-0 md:ml-10 text-balance">
                                                <CardTitle>
                                                    <h4 className="font-semibold  text-[20px]">{item.title}</h4>
                                                </CardTitle>
                                                <CardDescription>
                                                    <p className="text-[16px]/[27px] py-5">{item.content}</p>
                                                </CardDescription>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </CarouselItem>
                    ))} */}
                    {carouselData.map((item, index) => (
                        <CarouselItem className="md:basis-1/4 basis-1/1" key={index}>
                            <div className="p-1">
                                <Card>
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
                                        <div className="mt-5  text-balance">
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
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div >
    )
}