import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggle } from "../theme-toggle/theme-toggle";
import { LoginDialog } from "../auth/dialog/login-dialog";
import { RegisterDialog } from "../auth/dialog/register-dialog";
import { LanguageSelector } from "../language-selector/language-selector";

type Props = {
  languages: Array<{ value: string; label: string }>;
};

export const MenuSidebar = ({ languages }: Props) => {
  return (
    <div className="block sm:hidden">
      <Sheet>
        <SheetTrigger className="mt-2">
          <Menu size={32} />
        </SheetTrigger>
        <SheetContent className="dark:bg-slate-950 flex flex-col justify-between">
          <div className="grid gap-4 py-10">
            <LoginDialog />
            <RegisterDialog />
          </div>
          <div className="flex justify-between items-center">
            <LanguageSelector items={languages} />
            <ThemeToggle />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
