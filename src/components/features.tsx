import { Blocks, ChartPie, Database, MessageCircle, Settings2, Zap } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Dashboard at a Glance",
    description: "Stay on top of your activity with a clean, intuitive overview.",
  },
  {
    icon: ChartPie,
    title: "Powerful Analytics",
    description: "Track performance in real-time and make data-driven decisions.",
  },
  {
    icon: Settings2,
    title: "Customizable Settings",
    description: "Configure Flowly to work exactly the way you need.",
  },
  {
    icon: Blocks,
    title: "Easy Integrations",
    description: "Connect with your favorite tools in just a few clicks.",
  },
  {
    icon: Database,
    title: "Smart Storage",
    description: "Organize files and projects with zero hassle.",
  },
  {
    icon: MessageCircle,
    title: "Dedicated Support",
    description: "Get help whenever you need it, from onboarding to scaling.",
  },
];

const Features = () => {
  return (
    <div id="features" className="xs:py-20 w-full px-6 py-12">
      <h2 className="xs:text-4xl text-center text-3xl font-bold tracking-tight sm:text-5xl">
        Why Choose Flowly?
      </h2>
      <div className="mx-auto mt-10 grid w-full max-w-screen-lg gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-background flex flex-col rounded-xl border px-5 py-6"
          >
            <div className="bg-muted mb-3 flex h-10 w-10 items-center justify-center rounded-full">
              <feature.icon className="h-6 w-6" />
            </div>
            <span className="text-lg font-semibold">{feature.title}</span>
            <p className="text-foreground/80 mt-1 text-[15px]">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
