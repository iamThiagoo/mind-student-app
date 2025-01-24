import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SystemProvider } from "@/contexts/system";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StudyBuddy",
  description: `
    Plataforma de aprendizado focada em otimizar a jornada acadêmica dos usuários, oferecendo uma série de ferramentas que potencializam os estudos. 
    Com funcionalidades como análise de progresso, biblioteca digital, flashcards inteligentes e um sistema de gerenciamento de arquivos, o StudyBuddy ajuda os estudantes a se organizarem e aumentarem sua produtividade.
  `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased dark:bg-slate-950`}
      >
        <SystemProvider>
          {children}
        </SystemProvider>
      </body>
    </html>
  );
}
