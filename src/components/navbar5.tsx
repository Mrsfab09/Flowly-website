"use client";

import { MenuIcon, BookOpen, Compass, History } from "lucide-react";

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
  const resources = [
    {
      icon: BookOpen,
      title: "Blog",
      description: "Overview of your activity",
      href: "/",
    },
    {
      icon: Compass,
      title: "Guides",
      description: "Track your performance",
      href: "/",
    },
    {
      icon: History,
      title: "Changelog",
      description: "Configure your preferences",
      href: "/",
    },
  ];

  return (
    <section className="bg-background/90 fixed top-0 left-0 z-50 flex w-full justify-center px-3 backdrop-blur-md">
      <div className="container py-4">
        <nav className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-4">
            <img src="/flowly-logo.svg" className="max-h-8" alt="Shadcn UI Navbar" />
            <span className="text-xl font-semibold tracking-wide">Flowly</span>
          </a>
          <NavigationMenu className="ml-30 hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="#features" className={navigationMenuTriggerStyle()}>
                  Features
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                  Templates
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#pricing" className={navigationMenuTriggerStyle()}>
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex min-w-[240px] flex-col justify-center p-3">
                    {resources.map((resources, index) => (
                      <NavigationMenuLink
                        href={resources.href}
                        key={index}
                        className="hover:bg-muted/70 rounded-md p-3 transition-colors"
                      >
                        <p className="text-foreground mb-1 flex items-center gap-2 font-semibold">
                          <resources.icon className="h-20 w-20" />
                          {resources.title}
                        </p>
                        <p className="text-muted-foreground text-sm">{resources.description}</p>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#community" className={navigationMenuTriggerStyle()}>
                  Community
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
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
                  <a href="/" className="flex items-center gap-2">
                    <img src="./flowly-logo.svg" className="max-h-6" alt="Flwoly logo" />
                    <span className="text-xl font-semibold tracking-wide">Flowly</span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <Accordion type="single" collapsible className="mt-4 mb-2">
                  <AccordionItem value="solutions" className="border-none">
                    <AccordionTrigger className="text-base hover:no-underline">
                      Resources
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid md:grid-cols-2">
                        {resources.map((resource) => (
                          <a
                            href={resource.href}
                            className="hover:bg-muted/70 rounded-md p-3 transition-colors"
                          >
                            <div>
                              <p className="text-foreground mb-1 font-semibold">{resource.title}</p>
                              <p className="text-muted-foreground text-sm">
                                {resource.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="flex flex-col gap-6">
                  <a href="/" className="font-medium">
                    Features
                  </a>
                  <a href="/" className="font-medium">
                    Templates
                  </a>
                  <a href="/" className="font-medium">
                    Pricing
                  </a>
                  <a href="/" className="font-medium">
                    Community
                  </a>
                  <a href="/" className="font-medium">
                    Contact
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
