import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { BorderBeam } from "@/components/ui/border-beam";

export default function Pricing() {
  const t = useTranslations("homepage");

  return (
    <div className="container px-4 md:px-0 xl:px-20">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          {t("pricing.title")}
        </h2>
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {t("pricing.description")}
        </p>
      </div>
      <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="flex flex-col transition-all hover:shadow-lg dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-lg">{t("pricing.plans.freemium.title")}</CardTitle>
            <CardDescription>{t("pricing.plans.freemium.description")}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="text-left">
              <span className="text-5xl font-bold">{t("pricing.plans.freemium.price")}</span>
              <span className="text-muted-foreground">{t("pricing.plans.freemium.price_note")}</span>
            </div>
            <ul className="mt-6 space-y-3">
              {[
                "Basic study analysis",
                "Limited book library access",
                "Create up to 50 flashcards",
                "100MB file storage",
              ].map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full py-6 text-base">{t("pricing.plans.freemium.button")}</Button>
          </CardFooter>
        </Card>
        <Card className="flex flex-col transition-all hover:shadow-lg relative dark:bg-gray-800">
          <BorderBeam />
          <CardHeader>
            <CardTitle className="text-lg flex items-center justify-between">
              {t("pricing.plans.token_based.title")}
              <Badge variant="secondary" className="ml-2">
                {t("pricing.plans.token_based.badge")}
              </Badge>
            </CardTitle>
            <CardDescription>{t("pricing.plans.token_based.description")}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="text-left">
              <span className="text-5xl font-bold">{t("pricing.plans.token_based.price")}</span>
              <span className="text-muted-foreground">{t("pricing.plans.token_based.price_note")}</span>
            </div>
            <ul className="mt-6 space-y-3">
              {[
                "All Freemium features",
                "Advanced study analysis (5 tokens)",
                "Full book library access (2 tokens/book)",
                "PDF summarization (10 tokens/PDF)",
                "1GB file storage",
              ].map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full py-6 text-base" variant="outline">
              {t("pricing.plans.token_based.button")}
            </Button>
          </CardFooter>
        </Card>
        <Card className="flex flex-col transition-all hover:shadow-lg relative overflow-hidden dark:bg-gray-800">
          {/* <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full transform rotate-12">
            {t("pricing.plans.subscription.badge")}
          </div> */}
          <CardHeader>
            <CardTitle className="text-lg">{t("pricing.plans.subscription.title")}</CardTitle>
            <CardDescription>{t("pricing.plans.subscription.description")}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="text-left">
              <span className="text-5xl font-bold">{t("pricing.plans.subscription.price")}</span>
              <span className="text-muted-foreground">{t("pricing.plans.subscription.price_note")}</span>
            </div>
            <ul className="mt-6 space-y-3">
              {[
                "All Token-based features",
                "Unlimited study analysis",
                "Unlimited flashcards",
                "Advanced calendar with sync",
                "Multi-task timer",
                "10GB file storage",
                "Priority support",
              ].map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full py-6 text-base bg-primary text-primary-foreground hover:bg-primary/90">
              {t("pricing.plans.subscription.button")}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
