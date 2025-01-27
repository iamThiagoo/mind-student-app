import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"
import { RegisterForm } from "../form/register-login"

export function RegisterDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="dark:border dark:border-gray-400 dark:text-white dark:bg-zinc-900 dark:hover:bg-zinc-800 select-none py-6 md:py-5">Registre-se</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle></DialogTitle>
        <RegisterForm />
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
  )
}