"use client";

import { useState } from "react";

import Link from "next/link";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Risk Review",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    description: "Initial advisory review",
    features: [
      "Executive cyber risk intake",
      "Governance readiness scan",
      "Priority advisory areas",
      "Security posture summary",
    ],
  },
  {
    name: "Growth Advisory",
    monthlyPrice: "$18",
    yearlyPrice: "$216",
    features: [
      "All risk review features",
      "Digital transformation guidance",
      "Cloud, identity, and data review",
      "Compliance and privacy alignment",
      "Executive reporting",
      "Implementation roadmap",
    ],
  },
  {
    name: "Institutional Trust",
    monthlyPrice: "",
    yearlyPrice: "",
    features: [
      "All growth advisory features",
      "Crisis readiness planning",
      "Board-ready risk guidance",
      "Diligence and governance support",
      "Institutional trust program",
    ],
  },
];

export const Pricing = ({ className }: { className?: string }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Advisory
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
            Choose the advisory depth that matches your cybersecurity,
            governance, compliance, strategic growth, or enterprise risk needs.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-5 text-start md:mt-12 md:grid-cols-3 lg:mt-20">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`${
                plan.name === "Growth Advisory"
                  ? "outline-primary origin-top outline-4"
                  : ""
              }`}
            >
              <CardContent className="flex flex-col gap-7 px-6 py-5">
                <div className="space-y-2">
                  <h3 className="text-foreground font-semibold">{plan.name}</h3>
                  <div className="space-y-1">
                    <div className="text-muted-foreground text-lg font-medium">
                      {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}{" "}
                      {plan.name !== "Risk Review" && (
                        <span className="text-muted-foreground">
                          per user/
                          {isAnnual ? "year" : "month"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {plan.name !== "Risk Review" ? (
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={isAnnual}
                      onCheckedChange={() => setIsAnnual(!isAnnual)}
                      aria-label="Toggle annual billing"
                    />
                    <span className="text-sm font-medium">Annual advisory</span>
                  </div>
                ) : (
                  <span className="text-muted-foreground text-sm">
                    {plan.description}
                  </span>
                )}

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-muted-foreground flex items-center gap-1.5"
                    >
                      <Check className="size-5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-fit"
                  variant={
                    plan.name === "Growth Advisory" ? "default" : "outline"
                  }
                  asChild
                >
                  <Link href="/contact">Request access</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
