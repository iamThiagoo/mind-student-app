import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { RegisterForm } from "../form/register-form";
import { DialogProps } from "@/@types/dialog";
import { useState } from "react";
import { PrivacyDialog } from "@/components/app/terms-privacy/privacy-dialog";
import { TermsDialog } from "@/components/app/terms-privacy/terms-dialog";
import { FaGoogle } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { useTranslations } from "next-intl";

export function RegisterDialog({ isOpen, onOpenChange, onChildEvent }: DialogProps) {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const t = useTranslations();

  const toggleTermsDialog = () => {
    setIsTermsOpen(!isTermsOpen);
  };

  const togglePrivacyDialog = () => {
    setIsPrivacyOpen(!isPrivacyOpen);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle></DialogTitle>
        <RegisterForm />

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
