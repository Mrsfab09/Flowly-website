import { ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "@/components/ui/button";

const Hero12 = () => {
  return (
    <section className="relative mt-12 overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      {/* Tło */}
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center">
        <img
          alt="background"
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
          className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-80"
        />
      </div>

      {/* Treść */}
      <div className="relative z-10 container">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Logo */}
          <div className="bg-background/30 rounded-xl p-4 shadow-sm backdrop-blur-sm">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
              alt="logo"
              className="h-14 sm:h-16"
            />
          </div>

          {/* Nagłówek */}
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-pretty sm:text-4xl lg:text-5xl">
            Build your next project with <span className="text-amber-600">Blocks</span>
          </h1>

          {/* Opis */}
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base sm:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat
            omnis! Porro facilis quo animi consequatur. Explicabo.
          </p>

          {/* CTA */}
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
            <Button className="w-full bg-amber-600 shadow-sm transition-shadow hover:shadow sm:w-auto">
              Get Started
            </Button>
            <Button variant="outline" className="group w-full sm:w-auto">
              Learn more{" "}
              <ExternalLink className="ml-2 h-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>

          {/* Logotypy */}
          <div className="mt-16 flex flex-col items-center gap-5">
            <p className="text-muted-foreground font-medium">Built with open-source technologies</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                "shadcn-ui-icon.svg",
                "typescript-icon.svg",
                "react-icon.svg",
                "tailwind-icon.svg",
              ].map((logo, idx) => (
                <a
                  key={idx}
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group flex aspect-square h-12 items-center justify-center p-0"
                  )}
                >
                  <img
                    src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/${logo}`}
                    alt={logo}
                    className="h-6 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero12 };
