import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { DialogProps } from "@/components/@types/dialog";
import { useState } from "react";
import { PrivacyDialog } from "@/components/app/shared/terms-privacy/privacy-dialog";
import { TermsDialog } from "@/components/app/shared/terms-privacy/terms-dialog";
import { FaGoogle } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { useTranslations } from "next-intl";
import { ImSpinner2 } from "react-icons/im";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { createClient } from '@/lib/supabase/client'
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation";

export function RegisterDialog({
  isOpen,
  onOpenChange,
  onChildEvent,
}: DialogProps) {

  const t = useTranslations();
  const { toast } = useToast();
  const router = useRouter();

  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const toggleTermsDialog = () => {
    setIsTermsOpen(!isTermsOpen);
  };

  const togglePrivacyDialog = () => {
    setIsPrivacyOpen(!isPrivacyOpen);
  };

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const supabase = await createClient()
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}`,
          data: {
            first_name: fullname.split(" ").slice(0, 1),
            last_name: fullname.split(" ").slice(1)
          }
        }
      });

      if (!!error) {
        throw error
      }

      router.push("/workspace");
      
    } catch (error: any) {
      if (error.code === "user_already_exists") {
        toast({
          variant: "destructive",
          title: t("errors.emailAlreadyRegistered"),
          description: t("errors.tryAnotherEmail"),
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
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle></DialogTitle>
        <div className="grid gap-5">
          <h2 className="text-center font-bold text-2xl">
            {t("signUp.title")}
          </h2>
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
                  autoComplete="name"
                  autoCorrect="off"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <Button className="py-5 border" disabled={isLoading}>
                {isLoading && (
                  <ImSpinner2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {t("signUp.createAccount")}
              </Button>
            </div>
          </form>
        </div>

        <Button
          variant={"ghost"}
          className="py-5 border border-gray-300"
          onClick={() => onChildEvent && onChildEvent("login")}
        >
          {t("signUp.alreadyHaveAccount")}
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              {t("signUp.orContinueWith")}
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
        <p className="text-sm text-center mx-auto max-w-xs text-gray-600">
          {t("terms.agreement")}
          <button
            onClick={toggleTermsDialog}
            className="underline ml-1 hover:opacity-80"
          >
            {t("terms.termsOfService")}
          </button>{" "}
          {t("terms.and")}{" "}
          <button
            onClick={togglePrivacyDialog}
            className="underline hover:opacity-80"
          >
            {t("terms.privacyPolicy")}.
          </button>
        </p>

        <PrivacyDialog
          isOpen={isPrivacyOpen}
          onOpenChange={togglePrivacyDialog}
        />
        <TermsDialog isOpen={isTermsOpen} onOpenChange={toggleTermsDialog} />
      </DialogContent>
    </Dialog>
  );
}
