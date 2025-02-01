"use client"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Check, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLocale } from "next-intl"
import { setUserLocale } from "@/services/locale"

type Props = {
  items: Array<{value: string; label: string}>;
};

export function LanguageSelector({ items } : Props) {
  const locale = useLocale();
  const [language, setLanguage] = useState(() =>
    items.find((lang) => lang.value === locale) || items[0]
  );
  const [, startTransition] = useTransition();

  function onChange(value: string) {
    const selectedLanguage = items.find((lang) => lang.value === value);
    if (selectedLanguage) {
      setLanguage(selectedLanguage);
      startTransition(() => {
        setUserLocale(selectedLanguage.value);
      });
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="select-none w-20 justify-between border-none outline-none focus:outline-none active:outline-none dark:bg-gray-900 dark:hover:bg-slate-600 dark:text-white">
          <Image src={`/flags/${language!.value}.svg`} alt={language!.label} width={24} height={24} />
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dark:border dark:bg-slate-900 w-20" style={{ minWidth: "70px" }}>
        {items.map((lang) => (
          <DropdownMenuItem
            key={lang.value}
            onSelect={() => onChange(lang.value)}
            title={lang.label}
            style={{ width: "70px" }}
            className="select-none justify-between cursor-pointer dark:bg-slate-800 dark:hover:bg-slate-600 dark:text-gray-300"
          >
            <Image src={`/flags/${lang.value}.svg`} alt={lang.label} width={24} height={24} />
            {lang.value === language?.value && <Check className="h-5 w-5" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
