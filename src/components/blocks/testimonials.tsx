import Image from "next/image";

import { ArrowRight } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const items = [
  
  // {
  //   quote:
  //     "The advisory process turned security, privacy, and resilience into a practical operating plan.",
  //   author: "Jonas Kotara",
  //   role: "Technology Leader",
  //   company: "Mercury Finance",
  //   image: "/testimonials/jonas-kotara.webp",
  // },
  // {
  //   quote:
  //     "We entered diligence with stronger governance evidence and more confidence.",
  //   author: "Kevin Yam",
  //   role: "Founder",
  //   company: "Mercury Finance",
  //   image: "/testimonials/kevin-yam.webp",
  // },
  // {
  //   quote:
  //     "Their crisis readiness work helped our teams understand roles before pressure hit.",
  //   author: "Kundo Marta",
  //   role: "Operations Lead",
  //   company: "Mercury Finance",
  //   image: "/testimonials/kundo-marta.webp",
  // },
  // {
  //   quote:
  //     "ASKNEXUM gave our leadership team clear language for cyber risk and growth decisions.",
  //   author: "Amy Chase",
  //   role: "Chief Risk Officer",
  //   company: "Mercury Finance",
  //   image: "/testimonials/amy-chase.webp",
  // },
  // {
  //   quote:
  //     "The advisory process turned security, privacy, and resilience into a practical operating plan.",
  //   author: "Jonas Kotara",
  //   role: "Technology Leader",
  //   company: "Mercury Finance",
  //   image: "/testimonials/jonas-kotara.webp",
  // },
  {
  quote:
    "The official launch of ASKNEXUM, a platform built to help organizations make clearer cybersecurity decisions.",
  author: "Launch Day",
  role: "Product Announcement",
  company: "ASKNEXUM",
  image: "/askNexum/1.jpg",
},
{
  quote:
    "From governance insights to executive-ready risk reporting, we're excited to bring practical cyber intelligence to organizations worldwide.",
  author: "What's New",
  role: "Platform Highlights",
  company: "ASKNEXUM",
  image: "/askNexum/2.jpg",
},
{
  quote:
    "We're committed to continuously expanding ASKNEXUM with new capabilities, expert guidance, and customer-driven innovation.",
  author: "Looking Ahead",
  role: "Our Vision",
  company: "ASKNEXUM",
  image: "/askNexum/3.jpg",
},
{
  quote:
    "We look forward to partnering with customers and the security community to shape the future of cyber resilience.",
  author: "Next Chapter",
  role: "Our Commitment",
  company: "ASKNEXUM",
  image: "/askNexum/4.jpg",
},
];

export const Testimonials = ({
  className,
  dashedLineClassName,
}: {
  className?: string;
  dashedLineClassName?: string;
}) => {
  return (
    <>
      <section className={cn("overflow-hidden py-28 lg:py-32", className)}>
        <div className="container">
          <div className="space-y-4">
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
              The Nexum Story
            </h2>
            <p className="text-muted-foreground max-w-md leading-snug">
              ASKNEXUM connects security posture, governance, operating model,
              and executive decision-making so risk supports business strategy.
            </p>
            <Button variant="outline" className="shadow-md">
              Read advisory stories <ArrowRight className="size-4" />
            </Button>
          </div>

          <div className="relative mt-8 -mr-[max(3rem,calc((100vw-80rem)/2+3rem))] md:mt-12 lg:mt-20">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="">
                {items.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="xl:basis-1/3.5 grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%] 2xl:basis-[24%]"
                  >
                    <Card className="bg-muted h-full overflow-hidden border-none">
                      <CardContent className="flex h-full flex-col p-0">
                        <div className="relative h-[288px] lg:h-[328px]">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between gap-10 p-6">
                          <blockquote className="font-display text-lg leading-none! font-medium md:text-xl lg:text-2xl">
                            {testimonial.quote}
                          </blockquote>
                          <div className="space-y-0.5">
                            <div className="text-dark font-semibold">
                              {testimonial.author}, {testimonial.role}
                            </div>
                            <div className="text-muted-foreground text-sm">
                              {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-8 flex gap-3">
                <CarouselPrevious className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
                <CarouselNext className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <DashedLine
        orientation="horizontal"
        className={cn("mx-auto max-w-[80%]", dashedLineClassName)}
      />
    </>
  );
};
