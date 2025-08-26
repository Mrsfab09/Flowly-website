"use client";

import { MenuIcon, ChartNoAxesCombined } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Navbar5 = () => {
  const features = [
    {
      icon: ChartNoAxesCombined,
      title: "Dashboard",
      description: "Overview of your activity",
      href: "#",
    },
    {
      icon: ChartNoAxesCombined,
      title: "Analytics",
      description: "Track your performance",
      href: "#",
    },
    {
      icon: ChartNoAxesCombined,
      title: "Settings",
      description: "Configure your preferences",
      href: "#",
    },
    {
      icon: ChartNoAxesCombined,
      title: "Integrations",
      description: "Connect with other tools",
      href: "#",
    },
    {
      icon: ChartNoAxesCombined,
      title: "Storage",
      description: "Manage your files",
      href: "#",
    },
    {
      icon: ChartNoAxesCombined,
      title: "Support",
      description: "Get help when needed",
      href: "#",
    },
  ];

  return (
    <section className="bg-background/90 fixed top-0 left-0 z-50 flex w-full justify-center px-3 backdrop-blur-md">
      <div className="container py-4">
        <nav className="flex items-center justify-between">
          <a href="https://www.shadcnblocks.com" className="flex items-center gap-4">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
              className="max-h-8"
              alt="Shadcn UI Navbar"
            />
            <span className="text-xl font-semibold tracking-wide">Flowly</span>
          </a>
          <NavigationMenu className="ml-30 hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 p-3">
                    {features.map((feature, index) => (
                      <NavigationMenuLink
                        href={feature.href}
                        key={index}
                        className="hover:bg-muted/70 rounded-md p-3 transition-colors"
                      >
                        <div key={feature.title}>
                          <p className="text-foreground mb-1 flex gap-2 font-semibold">
                            <feature.icon className="h-20 w-20" />
                            {feature.title}
                          </p>
                          <p className="text-muted-foreground text-sm">{feature.description}</p>
                        </div>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
                  Products
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
                  Resources
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="outline">Sign in</Button>
            <Button className="bg-amber-600">Start for free</Button>
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <a href="https://www.shadcnblocks.com" className="flex items-center gap-2">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                      className="max-h-8"
                      alt="Shadcn UI Navbar"
                    />
                    <span className="text-xl font-semibold tracking-wide">Flowly</span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <Accordion type="single" collapsible className="mt-4 mb-2">
                  <AccordionItem value="solutions" className="border-none">
                    <AccordionTrigger className="text-base hover:no-underline">
                      Features
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid md:grid-cols-2">
                        {features.map((feature, index) => (
                          <a
                            href={feature.href}
                            key={index}
                            className="hover:bg-muted/70 rounded-md p-3 transition-colors"
                          >
                            <div key={feature.title}>
                              <p className="text-foreground mb-1 font-semibold">{feature.title}</p>
                              <p className="text-muted-foreground text-sm">{feature.description}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="flex flex-col gap-6">
                  <a href="#" className="font-medium">
                    Templates
                  </a>
                  <a href="#" className="font-medium">
                    Blog
                  </a>
                  <a href="#" className="font-medium">
                    Pricing
                  </a>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  <Button variant="outline">Sign in</Button>
                  <Button className="bg-amber-600">Start for free</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export { Navbar5 };
