import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/use-theme"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="dark:hover:bg-transparent hover:bg-transparent"
      aria-label={`Alternar para o tema ${theme === "light" ? "escuro" : "claro"}`}
    >
      {theme === "light" ? <Sun className="!h-6 !w-7" /> : <Moon className="!h-6 !w-7 dark:text-white" />}
    </Button>
  )
}