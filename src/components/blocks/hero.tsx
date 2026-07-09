import Image from "next/image";

import { Button } from "@/components/ui/button";

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

      </div>

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
