import { DashedLine } from "@/components/dashed-line";

const stats = [
  {
    value: "$150M",
    label: "Risk programs advised",
  },
  {
    value: "20K",
    label: "Security domains",
  },
  {
    value: "1.3B",
    label: "Governance reviews",
  },
  {
    value: "1.5K",
    label: "Crisis exercises",
  },
];

export function AboutHero() {
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Executive advisory for cybersecurity sophistication
          </h1>

          <p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
            ASKNEXUM builds institutional trust through security, governance,
            resilience, and strategic growth guidance.
          </p>

          <p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
            We connect security posture, governance, operating model, and
            executive decision-making so risk supports the business strategy
            instead of slowing it down.
            <br />
            <br />
            Engagements are built around clear priorities, defensible
            recommendations, and practical implementation paths for leadership
            teams.
          </p>
        </div>

        <div
          className={`relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:pt-0 lg:pl-10`}
        >
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <div className="font-display text-4xl tracking-wide md:text-5xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
