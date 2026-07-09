import Image from "next/image";

import {
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Executive cyber risk",
    description:
      "Board-ready guidance across cybersecurity, privacy, resilience, and controls.",
    icon: CircleDot,
  },
  {
    title: "Digital transformations",
    description:
      "Modernize cloud, identity, data, and technology programs with measured risk.",
    icon: Blend,
  },
  {
    title: "Crisis readiness",
    description:
      "Prepare leaders, operating teams, and response partners before pressure hits.",
    icon: Diamond,
  },
  {
    title: "Growth confidence",
    description:
      "Align strategic growth, diligence, and governance with institutional trust.",
    icon: ChartNoAxesColumn,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1 lg:mx-auto lg:max-w-2xl text-center">
          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl xl:whitespace-nowrap">
            #1 Security Detection Tool
          </h1>

          <p className="text-muted-foreground text-1xl mt-5 md:text-3xl">
            Executive advisory for cybersecurity sophistication, strategic
            growth, and institutional trust.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:flex-nowrap">
            <Button asChild>
              <a href="/contact" target="_self">Join Wait List</a>
            </Button>
          </div>
        </div>

        {/* Right side - Features */}
        {/* <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>

      {/* <div className="mt-10 lg:container">
        <div className="w-full overflow-hidden rounded-3xl bg-white/10 dark:bg-white/10 shadow-lg">
          <div className="relative aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/kd33UVZhnAA"
              title="Google Data Center Security: 6 Layers Deep"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div> */}


      <div className="mt-12 max-lg:ml-6 max-lg:h-[550px] max-lg:overflow-hidden md:mt-20 lg:container lg:mt-24">
        <div className="relative h-[793px] w-full">
          <Image
            src="/hero.webp"
            alt="hero"
            fill
            className="rounded-2xl object-cover object-left-top shadow-lg max-lg:rounded-tr-none"
          />
        </div>
      </div> 
    </section>
  );
};
