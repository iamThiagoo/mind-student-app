"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImSpinner2 } from "react-icons/im";
import { useTranslations } from "next-intl";

export function LoginForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const t = useTranslations("login");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-5", className)} {...props}>
      <h2 className="text-center font-bold text-2xl">{t("title")}</h2>
      <p className="text-medium text-sm mt-0 text-center text-gray-700">
        {t("description")}
      </p>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="email@exemplo.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              { t("password") }
            </Label>
            <Input
              id="password"
              placeholder={t("password")}
              type="password"
              autoCapitalize="none"
              autoComplete="current-password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button className="py-5 border" disabled={isLoading}>
            {isLoading && <ImSpinner2 className="mr-2 h-4 w-4 animate-spin" />}
            { t("signIn") }
          </Button>
        </div>
      </form>
    </div>
  );
}
