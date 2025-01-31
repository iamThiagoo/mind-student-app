import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { LoginForm } from "../form/login-form";
import { DialogProps } from "@/@types/dialog";
import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FiGithub } from "react-icons/fi";
import { useTranslations } from "next-intl";

export function LoginDialog({ isOpen, onOpenChange, onChildEvent }: DialogProps) {
  const t = useTranslations("login");
  
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] pb-8">
        <DialogTitle></DialogTitle>
        <LoginForm />

        <Button variant={"ghost"} onClick={() => onChildEvent && onChildEvent("register")} className="py-5 border border-gray-300">
          { t("signUp") }
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
            { t("orContinueWith") }
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
