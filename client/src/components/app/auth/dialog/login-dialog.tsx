import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { LoginForm } from "../form/login-form";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function LoginDialog() {
  const t = useTranslations("HomePage");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="dark:text-white hover:opacity-80 md:mr-3 select-none border-2 py-2.5 rounded-md border-gray-800 md:py-0 md:border-none">
          {t("login")}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle></DialogTitle>
        <LoginForm />
        <p className="text-sm text-center mx-auto max-w-xs text-gray-600">
          Ao clicar em continuar, você concorda com nossos
          <Link href="/" className="underline ml-1 hover:opacity-80">
            Termos de Serviço
          </Link>{" "}
          e{" "}
          <Link href="/" className="underline hover:opacity-80">
            Política de Privacidade.
          </Link>
        </p>
      </DialogContent>
    </Dialog>
  );
}
