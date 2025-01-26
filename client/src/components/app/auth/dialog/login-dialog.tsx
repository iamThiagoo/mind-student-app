import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { LoginForm } from "../form/login-form";

export function LoginDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="dark:text-white hover:opacity-80 md:mr-3 select-none border-2 py-3 rounded-md border-gray-800 md:py-0 md:border-none">
          Entrar
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>
          Entrar no sistema
        </DialogTitle>
        <LoginForm />
      </DialogContent>
    </Dialog>
  );
}
