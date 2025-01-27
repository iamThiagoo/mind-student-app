import { Menu } from "lucide-react";
import { ThemeToggle } from "../theme-toggle/theme-toggle";
import { LoginDialog } from "../auth/dialog/login-dialog";
import { RegisterDialog } from "../auth/dialog/register-dialog";
import { LanguageSelector } from "../language-selector/language-selector";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {
  languages: Array<{ value: string; label: string }>;
};

export const MenuDropdown = ({ languages }: Props) => {
  return (
    <div className="block sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Menu size={32} className="dark:text-white" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="dark:bg-slate-950 flex flex-col justify-between w-56">
          <div className="grid gap-4 pt-4 pb-5">
            <LoginDialog />
            <RegisterDialog />
          </div>
          <div className="flex justify-between items-center">
            <LanguageSelector items={languages} />
            <ThemeToggle />
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
