import { ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "@/components/ui/button";

const Hero12 = () => {
  return (
    <section className="relative mt-20 overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
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
            Build / Launch / Grow With <span className="text-amber-600">Flowly</span>
          </h1>

          {/* Opis */}
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base sm:text-lg lg:text-xl">
            Flowly helps teams create, manage, and scale projects faster — with simplicity, clarity,
            and flow.
          </p>

          {/* CTA */}
          <div className="mt-8 mb-20 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
            <Button className="w-full bg-amber-600 shadow-sm transition-shadow hover:shadow sm:w-auto">
              Get Started
            </Button>
            <Button variant="outline" className="group w-full sm:w-auto">
              Learn more{" "}
              <ExternalLink className="ml-2 h-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero12 };
