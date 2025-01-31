"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImSpinner2 } from "react-icons/im";
import { useTranslations } from "next-intl";

export function RegisterForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const t = useTranslations();

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-5", className)} {...props}>
      <h2 className="text-center font-bold text-2xl">{t("signUp.title")}</h2>
      <p className="text-medium text-sm mt-0 text-center text-gray-700">
        {t("signUp.description")}
      </p>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
        <div className="grid gap-1">
            <Label className="sr-only" htmlFor="fullname">
              {t("signUp.fullName")}
            </Label>
            <Input
              id="fullname"
              placeholder={t("signUp.fullName")}
              type="text"
              autoCapitalize="none"
              autoComplete="fullname"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              {t("signUp.password")}
            </Label>
            <Input
              id="password"
              placeholder={t("signUp.password")}
              type="password"
              autoCapitalize="none"
              autoComplete="current-password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button className="py-5 border" disabled={isLoading}>
            {isLoading && <ImSpinner2 className="mr-2 h-4 w-4 animate-spin" />}
            {t('signUp.createAccount')}
          </Button>
        </div>
      </form>
    </div>
  );
}
