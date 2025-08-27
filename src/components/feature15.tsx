import { UserPlus, LayoutDashboard, Users, TrendingUp } from "lucide-react";

const feature = [
  {
    image: "/signup.svg",
    title: "Sign up in seconds",
    description:
      "Create your Flowly account in just a few clicks. No lengthy forms or complex setup—get started immediately and dive into your projects.",
    icon: <UserPlus className="size-6" />,
  },
  {
    image: "/workspace.svg",
    title: "Set up your workspace",
    description:
      "Invite your team, organize projects, and customize your workflow to match your unique needs. Everything you need in one centralized workspace.",
    icon: <LayoutDashboard className="size-6" />,
  },
  {
    image: "/collaboration.svg",
    title: "Collaborate & track",
    description:
      "Share files, manage tasks, and monitor progress seamlessly. Keep everyone on the same page and make collaboration effortless across your team.",
    icon: <Users className="size-6" />,
  },
  {
    image: "/scale.svg",
    title: "Scale effortlessly",
    description:
      "Flowly grows with your team. From small startups to large enterprises, enjoy a platform that adapts to your evolving needs without the growing pains.",
    icon: <TrendingUp className="size-6" />,
  },
];

const Feature15 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex w-full flex-col items-center">
          <div className="flex flex-col items-center space-y-4 text-center sm:space-y-6 md:max-w-3xl md:text-center">
            <p className="text-muted-foreground text-sm uppercase">How It Works</p>
            <h2 className="text-3xl font-bold md:text-5xl">Simplicity at Every Step</h2>

            <p className="text-muted-foreground md:max-w-2xl">
              Get started in minutes — Flowly makes it easy to set up, collaborate, and scale
              without the usual complexity.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-2">
          {feature.map((feature, idx) => (
            <div
              className="bg-accent flex flex-col justify-between rounded-lg p-6 md:min-h-[300px] md:p-8"
              key={idx}
            >
              <span className="bg-background flex size-11 items-center justify-center rounded-full">
                {feature.icon}
              </span>
              <img src={feature.image} alt={feature.title} className="mx-auto w-96" />
              <div>
                <h3 className="text-lg font-medium md:text-2xl">{feature.title}</h3>
                <p className="text-muted-foreground mt-2">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature15 };
