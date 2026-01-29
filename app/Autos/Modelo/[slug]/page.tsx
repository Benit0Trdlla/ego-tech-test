import Image from "next/image"
import { getCar } from "@/app/data/getCar"
import CarouselSizes from "@/components/Carrousel/Carrousel";
import type { CarCarouselItem } from "@/types/car.types";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const car = await getCar({ id: Number(slug) });
  
  const cleanHTML = (html : string) => html.replace(/<[^>]*>/g, '');

  const features = car.model_features.map((item : CarCarouselItem) => ({
    title: item.name,
    content: item.description,
    image: item.image,
  }));

  const highlights = car.model_highlights.map((item : CarCarouselItem) => ({
    title: item.title,
    content: cleanHTML(item.content),
    image: item.image,
  }));

  const carouselItems = [...features, ...highlights];

  return (
    <>
      <div className="px-3 md:px-0">
        <section className="container mx-auto m-6 p-6">
          <div className="items-center justify-center grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-10 md:m-6 md:p-6">
            <Image
              src={car.photo || car.thumbnail}
              width={559}
              height={320}
              alt="Modelo"
              quality={90}
              priority
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div>
              <h4 className="font-semibold pb-3 text-[20px]">{car.name}</h4>
              <h3 className="text-[50px]/[57px] font-bold pb-5 text-balance">{car.title}</h3>
              <p className="text-[18px]/[21px] py-5">{cleanHTML(car.description)}</p>
            </div>
          </div>
        </section>
        <section className="bg-[#F7F7F7]">
          <CarouselSizes carouselData={carouselItems} />
        </section>
        <section className="container mx-auto m-6 p-6">
          <div className="items-center justify-center grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-10 md:m-6 md:p-6">
            <div className="ml-0 md:ml-10 order-2 md:order-1 text-balance">
              <h4 className="font-semibold pb-3 text-[20px]">{car.model_features[0].name}</h4>
              <p className="text-[16px]/[27px] py-5">{car.model_features[0].description}</p>
            </div>
            <Image
              className="order-1 md:order-2 rounded-lg shadow-lg object-cover"
              src={car.model_features[0].image}
              width={500}
              height={500}
              alt="Modelo"
              quality={90}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>
        <section className="container mx-auto m-6 p-6">
          <div className="items-center justify-center grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-10 md:m-6 md:p-6">
            <Image
              src={car.model_features[1].image}
              width={500}
              height={500}
              alt="Modelo"
              quality={90}
              className="rounded-lg shadow-lg object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="text-balance">
              <h4 className="font-semibold pb-3 text-[20px]">{car.model_features[1].name}</h4>
              <p className="text-[16px]/[27px] py-5">{car.model_features[1].description}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 