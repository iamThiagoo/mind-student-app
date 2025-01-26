import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function RegisterDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="dark:border dark:border-gray-400 dark:text-white dark:bg-zinc-900 dark:hover:bg-zinc-800 select-none py-6 md:py-5">Registre-se</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>Registro</DialogTitle>
      </DialogContent>
    </Dialog>
  )
}