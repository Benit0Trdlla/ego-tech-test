export type CarCarouselItem = {
  name?: string;
  title: string;
  description?: string;
  content: string;
  image: string;
};

export type Car = {
    id: number;
    name: string;
    segment: string;
    year: number;
    price: number;
    thumbnail: string;
    photo: string;
};
