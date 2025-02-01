import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { DialogProps } from "@/components/@types/dialog";
import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FiGithub } from "react-icons/fi";
import { useTranslations } from "next-intl";
import { ImSpinner2 } from "react-icons/im";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Label } from "@/components/ui/label";

export function LoginDialog({
  isOpen,
  onOpenChange,
  onChildEvent,
}: DialogProps) {
  const t = useTranslations("login");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] pb-8">
        <DialogTitle></DialogTitle>
        <div className="grid gap-5">
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
                  {t("password")}
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
                {isLoading && (
                  <ImSpinner2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {t("signIn")}
              </Button>
            </div>
          </form>
        </div>

        <Button
          variant={"ghost"}
          onClick={() => onChildEvent && onChildEvent("register")}
          className="py-5 border border-gray-300"
        >
          {t("signUp")}
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              {t("orContinueWith")}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Button variant="outline" type="button">
            <FaGoogle className="mr-2 h-4 w-4" />
            Google
          </Button>
          <Button variant="outline" type="button">
            <FiGithub className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
