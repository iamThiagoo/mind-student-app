import PanelLayout from "@/components/app/panel/panel-layout";
import { ThemeProvider } from "@/components/app/shared/mode-toggle/providers/theme-provider";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PanelLayout>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </PanelLayout>
  );
}
