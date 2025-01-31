import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LoginDialog } from "../auth/dialog/login-dialog";
import { RegisterDialog } from "../auth/dialog/register-dialog";
import { LanguageSelector } from "../../language-selector/language-selector";
import { ThemeToggle } from "../../theme-toggle/theme-toggle";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTranslations } from "next-intl";

type Props = {
  languages: Array<{ value: string; label: string }>;
};

export const MenuDropdown = ({ languages }: Props) => {

  const t = useTranslations("homepage");
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleRegisterDialog = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };

  const toggleLoginDialog = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const handleChildEvent = (param : string) => {
    if (param === "register") {
      setIsRegisterOpen(true);
      setIsLoginOpen(false);
    }

    if (param === "login") {
      setIsRegisterOpen(false);
      setIsLoginOpen(true);
    }
  }

  return (
    <div className="block sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Menu size={32} className="dark:text-white" onClick={(e: React.MouseEvent) => e.stopPropagation()} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="dark:bg-slate-950 flex flex-col justify-between w-56">
          <div className="grid gap-4 pt-4 pb-5">
            <button
              onClick={toggleLoginDialog}
              className="dark:text-white hover:opacity-80 md:mr-3 select-none border-2 py-2.5 rounded-md dark:bg-gray-600 border-gray-800 md:py-0 md:border-none"
            >
              {t("login")}
            </button>
            <Button
              onClick={toggleRegisterDialog}
              className="dark:border dark:border-gray-400 dark:text-white dark:bg-zinc-900 dark:hover:bg-zinc-800 select-none py-6 md:py-5"
            >
              Registre-se
            </Button>
          </div>
          <div className="flex justify-between items-center">
            <LanguageSelector items={languages} />
            <ThemeToggle />
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      <LoginDialog isOpen={isLoginOpen} onOpenChange={setIsLoginOpen} onChildEvent={handleChildEvent}  />
      <RegisterDialog isOpen={isRegisterOpen} onOpenChange={setIsRegisterOpen} onChildEvent={handleChildEvent} />
    </div>
  );
};
