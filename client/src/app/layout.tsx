import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { SystemProvider } from "@/contexts/system";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import "./globals.css";

const font = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "MindStudent",
  description: `
    Plataforma de aprendizado focada em otimizar a jornada acadêmica dos usuários, oferecendo uma série de ferramentas que potencializam os estudos. 
    Com funcionalidades como análise de progresso, biblioteca digital, flashcards inteligentes e um sistema de gerenciamento de arquivos, o MindStudent ajuda os estudantes a se organizarem e aumentarem sua produtividade.
  `,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${font.className} antialiased dark:bg-slate-950`}
      >
        <NextIntlClientProvider messages={messages}>
          <SystemProvider>
            {children}
          </SystemProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}