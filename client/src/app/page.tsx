"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  FileText,
  FlashlightIcon as FlashIcon,
  Library,
  LineChart,
  Target,
  Upload,
} from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { WordRotate } from "@/components/ui/word-rotate";
import { ThemeToggle } from "@/components/app/theme-toggle/theme-toggle";
import { LoginDialog } from "@/components/app/auth/dialog/login-dialog";
import { RegisterDialog } from "@/components/app/auth/dialog/register-dialog";
import { LanguageSelector } from "@/components/app/language-selector/language-selector";
import { MenuDropdown } from "@/components/app/menu-dropdown/menu-dropdown";
import { useTranslations } from "next-intl";
import { FAQ } from "@/components/app/faq/faq";
import StudentAnimation from "@/components/app/animation/student";
import { FcGraduationCap } from "react-icons/fc";
import { useState } from "react";

export default function Page() {

  const [, setRegisterDialogOpen] = useState(false);
  const t = useTranslations("HomePage");
  const languages = [
    { value: "pt-br", label: "Português" },
    { value: "en", label: "English" },
    { value: "es", label: "Spanish" },
  ];


  return (
    <div className="flex min-h-screen flex-col pt-2 pb-5">
      <header className="px-2 lg:px-6 h-16 flex items-center justify-between border-b container mx-auto pb-2 dark:border-gray-700">
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
          <LoginDialog />
          <RegisterDialog />
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full pt-12 pb-24 md:py-24 lg:py-24 xl:pt-24 flex justify-center">
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
                <InteractiveHoverButton>
                  {t("main.startJorney")}
                </InteractiveHoverButton>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:pb-32 lg:pt-28 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <LineChart className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold dark:text-gray-100">
                    {t("features.studyAnalysis.title")}
                  </h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    {t("features.studyAnalysis.description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Library className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold dark:text-gray-100">
                    {t("features.library.title")}
                  </h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    {t("features.library.description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <FlashIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold dark:text-gray-100">
                    {t("features.flashcards.title")}
                  </h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    {t("features.flashcards.description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Upload className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold dark:text-gray-100">
                    {t("features.fileUpload.title")}
                  </h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    {t("features.fileUpload.description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <FileText className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold dark:text-gray-100">
                    {t("features.pdfSummaries.title")}
                  </h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    {t("features.pdfSummaries.description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Calendar className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold dark:text-gray-100">
                    {t("features.calendar.title")}
                  </h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    {t("features.calendar.description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Clock className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold dark:text-gray-100">
                    {t("features.multitaskTimer.title")}
                  </h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    {t("features.multitaskTimer.description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Target className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold dark:text-gray-100">
                    {t("features.userProgress.title")}
                  </h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    {t("features.userProgress.description")}
                  </p>
                </CardContent>
              </Card>
            </div>
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
                  onClick={() => setRegisterDialogOpen(true)}
                >
                  {t("cta.start")}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 container mx-auto border-t dark:border-t dark:border-gray-700">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <FcGraduationCap className="size-10" />
            <span className="font-bold text-xl mt-1 dark:text-white">
              {t("appName")}
            </span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              className="text-sm hover:underline underline-offset-4 dark:text-gray-50"
              href="#"
            >
              {t("footer.terms")}
            </Link>
            <Link
              className="text-sm hover:underline underline-offset-4 dark:text-gray-50"
              href="#"
            >
              {t("footer.privacy")}
            </Link>
          </nav>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <p className="text-sm hidden sm:block dark:text-white">
              {t("footer.follow")}
            </p>
            <Link
              href="https://www.linkedin.com/in/imthiagoferreira/"
              target="_blank"
              className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary hover:opacity-50"
            >
              <svg
                width="33px"
                height="33px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary dark:fill-white"
              >
                <path
                  d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z"
                  fill="#000000"
                  className="dark:fill-white"
                />
              </svg>
              <span className="sr-only">Linkedin</span>
            </Link>
            <Link
              href="https://github.com/iamThiagoo"
              target="_blank"
              className="text-gray-500 hover:text-primary dark:hover:text-primary dark:text-white hover:opacity-50"
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 -3.5 256 256"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin meet"
                className="fill-current text-gray-500 hover:text-primary dark:hover:text-primary"
              >
                <g fill="#161614" className="dark:fill-white">
                  <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" />

                  <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398" />
                </g>
              </svg>
              <span className="sr-only">Github</span>
            </Link>
          </div>
        </div>
        <div className="container px-4 md:px-6 mt-6 text-center">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} {t("appName")} -{" "}
            {t("footer.allRightsReserved")}
          </p>
        </div>
      </footer>
    </div>
  );
}
