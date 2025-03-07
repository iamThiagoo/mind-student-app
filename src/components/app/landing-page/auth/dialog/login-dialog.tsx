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
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function LoginDialog({
  isOpen,
  onOpenChange,
  onChildEvent,
}: DialogProps) {

  const t = useTranslations();
  const { toast } = useToast();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const supabase = await createClient()
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (!!error) throw error
      router.push("/workspace");
    } catch (error: any) {
      if (error.code = "invalid_credentials") {
        toast({
          variant: "destructive",
          title: t("errors.invalidEmailOrPassword"),
          description: t("errors.pleaseTryAgain"),
        })
      } else {
        toast({
          variant: "destructive",
          title: t("errors.somethingWentWrong"),
          description: t("errors.pleaseTryAgain"),
        })
      }
    } finally {
      setIsLoading(false);
      return;
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] pb-8">
        <DialogTitle></DialogTitle>
        <div className="grid gap-5">
          <h2 className="text-center font-bold text-2xl">{t("login.title")}</h2>
          <p className="text-medium text-sm mt-0 text-center text-gray-700">
            {t("login.description")}
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
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-1">
                <Label className="sr-only" htmlFor="password">
                  {t("login.password")}
                </Label>
                <Input
                  id="password"
                  placeholder={t("login.password")}
                  type="password"
                  autoCapitalize="none"
                  autoComplete="current-password"
                  autoCorrect="off"
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <Button className="py-5 border" disabled={isLoading}>
                {isLoading && (
                  <ImSpinner2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {t("login.signIn")}
              </Button>
            </div>
          </form>
        </div>

        <Button
          variant={"ghost"}
          onClick={() => onChildEvent && onChildEvent("register")}
          className="py-5 border border-gray-300"
        >
          {t("login.signUp")}
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              {t("login.orContinueWith")}
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
