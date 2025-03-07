import { useTranslations } from "next-intl";
import {
  Settings,
  LayoutGrid,
  LucideIcon,
  ClipboardSignature,
  Book,
  GitGraph,
  UploadCloud,
  FilePen,
  FileBadge2,
  Hourglass,
  CalendarCheck,
  BotMessageSquare,
  FileSearch
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function useMenuList(pathname: string): Group[] {
  const t = useTranslations("menu");

  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/workspace",
          label: t("workspace"),
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: t("home"),
      menus: [
        {
          href: "/pomodoro",
          label: t("pomodoro"),
          icon: Hourglass,
        },
        {
          href: "/anmotations",
          label: t("annotations"),
          icon: FilePen
        },
        {
          href: "/flashcards",
          label: t("flashcards"),
          icon: ClipboardSignature
        },
        {
          href: "/virtual-library",
          label: t("virtualLibrary"),
          icon: Book
        },
        {
          href: "/calendar",
          label: t("calendar"),
          icon: CalendarCheck
        },
        {
          href: "/calendar",
          label: t("essayEvaluator"),
          icon: FileBadge2
        },
      ]
    },
    {
      groupLabel: t("myFiles"),
      menus: [
        {
          href: "/drive",
          label: t("upload"),
          icon: UploadCloud
        },
        {
          href: "/pdf-resume",
          label: t("pdfSummary"),
          icon: FileSearch
        }
      ]
    },
    {
      groupLabel: t("settings"),
      menus: [
        {
          href: "/general-statics",
          label: t("myStatistics"),
          icon: GitGraph
        },
        {
          href: "/account",
          label: t("myAccount"),
          icon: Settings
        }
      ]
    }
  ];
}
