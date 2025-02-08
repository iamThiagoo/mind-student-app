"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { WordRotate } from "@/components/ui/word-rotate";
import { ThemeToggle } from "@/components/common/theme-toggle/theme-toggle";
import { LoginDialog } from "@/components/app/landing-page/auth/dialog/login-dialog";
import { RegisterDialog } from "@/components/app/landing-page/auth/dialog/register-dialog";
import { LanguageSelector } from "@/components/common/language-selector/language-selector";
import { useTranslations } from "next-intl";
import { FAQ } from "@/components/app/landing-page/sections/faq/faq";
import StudentAnimation from "@/components/app/landing-page/sections/animation/student";
import { FcGraduationCap } from "react-icons/fc";
import { useEffect, useState } from "react";
import { MenuDropdown } from "@/components/app/landing-page/menu-dropdown/menu-dropdown";
import { TiChevronRight } from "react-icons/ti";
import { FaUserGraduate } from "react-icons/fa";
import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import Footer from "@/components/app/landing-page/sections/footer/footer";
import Features from "@/components/app/landing-page/sections/features/features";
import Pricing from "@/components/app/landing-page/sections/pricing/pricing";

export default function Page() {

  const supabase = createClient();
  const t = useTranslations("homepage");

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) setUser(user);
    }

    getUser();
  }, [supabase.auth]);

  const toggleRegisterDialog = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };

  const toggleLoginDialog = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const handleLoginRegisterDialogEvent = (param : string) => {
    if (param === "register") {
      setIsRegisterOpen(true);
      setIsLoginOpen(false);
    }

    if (param === "login") {
      setIsRegisterOpen(false);
      setIsLoginOpen(true);
    }
  }

  const languages = [
    { value: "pt-br", label: "Português" },
    { value: "en", label: "English" },
    { value: "es", label: "Spanish" },
  ];

  return (
    <div className="flex min-h-screen flex-col pt-2 pb-5">

      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b container mx-auto pb-2 dark:border-gray-700">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 ml-2 md:ml-0"
          >
            <span className="font-bold text-2xl dark:text-white items-center flex gap-x-2">
              <FcGraduationCap className="size-10" />
              <span className="mt-1">{t("appName")}</span>
            </span>
          </Link>
          <MenuDropdown languages={languages} />
        </div>
        <div className="hidden md:flex gap-x-3 sm:gap-x-5 justify-center items-center">
          <LanguageSelector items={languages} />
          <ThemeToggle />

          { user !== null ? (
            <div className="flex">
              <Button onClick={() => redirect('/workspace')} className="dark:border dark:border-gray-400 dark:text-white dark:bg-zinc-900 dark:hover:bg-zinc-800 select-none py-10 md:py-5 hover:underline rounded-full font-bold !text-lg !px-10">
                Acessar Workspace
                <TiChevronRight />
              </Button>
            </div>
          ) : (
            <div className="flex">
              <Button
                variant={'ghost'}
                onClick={toggleLoginDialog}
                className="flex dark:text-white dark:hover:bg-transparent hover:opacity-80 md:mr-3 select-none border-2 rounded-md border-gray-800 md:border-none font-bold py-10 md:py-5 !text-xl !pr-4 hover:underline"
              >
                <FaUserGraduate height={"2rem"} className="h-20 w-20 text-primary dark:text-gray-500" />
                {t("login")}
              </Button>
              <Button onClick={toggleRegisterDialog} className="dark:border dark:border-gray-400 dark:text-white dark:bg-zinc-900 dark:hover:bg-zinc-800 select-none py-10 md:py-5 hover:underline rounded-full font-bold !text-lg !px-10">
                Registre-se
                <TiChevronRight />
              </Button>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full pt-12 pb-24 md:py-24 lg:py-24 xl:pt-20 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 pt-16 text-center">
              <div className="space-y-2">
                <StudentAnimation />
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl lg:text-7xl/none dark:text-gray-100">
                  <WordRotate
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl lg:text-7xl/none"
                    words={[
                      t("main.title.studiesWithAprendiz"),
                      t("main.title.studyMoreProductively"),
                      t("main.title.focusOnWhatMatters"),
                      t("main.title.maximizeEvolve"),
                    ]}
                    duration={4000}
                  />
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  {t("main.description")}
                </p>
              </div>
              <div className="space-x-4">
                <InteractiveHoverButton onClick={toggleRegisterDialog}>
                  {t("main.startJorney")}
                </InteractiveHoverButton>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:pb-32 lg:pt-28 flex justify-center">
          <div className="container px-5 md:px-6">
            <Features />
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:pb-32 lg:pt-0 flex justify-center">
          <div className="container px-5">
            <Pricing />
          </div>
        </section>

        <section className="w-full py-12 lg:pb-36 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-gray-100">
                  {t("faq.title")}
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mb-3">
                  {t("faq.description")}
                </p>
              </div>
              <div className="mt-4 md:w-10/12 md:max-w-10/12">
                <FAQ />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-24 pt-10 md:py-16 lg:pb-36 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-gray-100">
                  {t("cta.title")}
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  {t("cta.description")}
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  size="lg"
                  className="hover:opacity-90 dark:border dark:border-gray-400"
                  onClick={toggleRegisterDialog}
                >
                  {t("cta.start")}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <LoginDialog isOpen={isLoginOpen} onOpenChange={setIsLoginOpen} onChildEvent={handleLoginRegisterDialogEvent} />
      <RegisterDialog isOpen={isRegisterOpen} onOpenChange={setIsRegisterOpen} onChildEvent={handleLoginRegisterDialogEvent} />
    </div>
  );
}
