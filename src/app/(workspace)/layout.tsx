import AdminPanelLayout from "@/components/app/admin-panel/admin-panel-layout";
import { ThemeProvider } from "@/components/app/shared/theme-toggle/providers/theme-provider";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminPanelLayout>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </AdminPanelLayout>
  );
}
