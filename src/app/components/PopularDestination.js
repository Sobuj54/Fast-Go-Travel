"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import showToast from "@/utils/showToast";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";

export default function PopularDestination() {
  const destinations = [
    {
      image:
        "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?_gl=1*fl0yus*_ga*MTEzMzc3MjUyLjE3NTQ0MDI0OTA.*_ga_8JE65Q40S6*czE3NTU2MTY3NzUkbzIkZzEkdDE3NTU2MTY5MDMkajQkbDAkaDA.",
      title: "Eiffel Tower Tour",
      location: "Paris, France",
      rating: 4.8,
    },
    {
      image:
        "https://images.pexels.com/photos/18848563/pexels-photo-18848563.jpeg?_gl=1*1v7gytj*_ga*MTEzMzc3MjUyLjE3NTQ0MDI0OTA.*_ga_8JE65Q40S6*czE3NTU2MTY3NzUkbzIkZzEkdDE3NTU2MTY4NDgkajU5JGwwJGgw",
      title: "Shinjuku Night Walk",
      location: "Tokyo, Japan",
      rating: 4.7,
    },
    {
      image:
        "https://images.pexels.com/photos/12640541/pexels-photo-12640541.jpeg?_gl=1*rv39ax*_ga*MTEzMzc3MjUyLjE3NTQ0MDI0OTA.*_ga_8JE65Q40S6*czE3NTU2MTY3NzUkbzIkZzEkdDE3NTU2MTY5NTAkajI1JGwwJGgw",
      title: "Statue of Liberty Cruise",
      location: "New York, USA",
      rating: 4.6,
    },
    {
      image:
        "https://images.pexels.com/photos/815880/pexels-photo-815880.jpeg?_gl=1*nb50l2*_ga*MTEzMzc3MjUyLjE3NTQ0MDI0OTA.*_ga_8JE65Q40S6*czE3NTU2MTY3NzUkbzIkZzEkdDE3NTU2MTY5NzgkajU5JGwwJGgw",
      title: "Desert Safari Adventure",
      location: "Dubai, UAE",
      rating: 4.9,
    },
    {
      image:
        "https://images.pexels.com/photos/4445240/pexels-photo-4445240.jpeg?_gl=1*e2lc40*_ga*MTEzMzc3MjUyLjE3NTQ0MDI0OTA.*_ga_8JE65Q40S6*czE3NTU2MTg5NjkkbzMkZzEkdDE3NTU2MTg5NzckajUyJGwwJGgw",
      title: "Great Wall Hiking",
      location: "Beijing, China",
      rating: 4.8,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto mt-20 mb-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
        Popular Destination
      </h1>
      <Carousel
        className="mt-10 lg:mt-14"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="">
          {destinations.map((item) => (
            <CarouselItem
              key={item.title}
              className="basis-1/1 md:basis-1/2 lg:basis-1/3 py-5"
            >
              <div>
                <Card>
                  <CardContent className="py-7">
                    <div className="relative w-full h-[289px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <h2 className="text-lg md:text-2xl font-semibold mt-3">
                      {item.title}
                    </h2>
                    <div className="flex items-center justify-between mt-2">
                      <p className="flex items-center gap-1">
                        <MapPin size={15} />
                        <span>{item.location}</span>
                      </p>
                      <Button variant="blue" onClick={showToast}>
                        <Star />
                        {item.rating}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
