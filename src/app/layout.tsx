import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { SystemProvider } from "@/contexts/system";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const font = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "MindStudent | Potencialize Seus Estudos e Alcance Resultados",
  description: `
    Transforme sua jornada acadêmica com o MindStudent! Plataforma completa com flashcards inteligentes, análise de progresso, biblioteca digital e organização de arquivos. 
    Aprenda de forma eficiente, aumente sua produtividade e conquiste seus objetivos acadêmicos.
  `,
  keywords: [
    "MindStudent",
    "aprendizado online", 
    "ferramentas de estudo", 
    "organização acadêmica", 
    "flashcards inteligentes", 
    "biblioteca digital", 
    "gestão de arquivos", 
    "produtividade nos estudos"
  ],
  authors: [
    { name: "@iamthiagoo", url: "https://github.com/iamThiagoo" },
  ],
  openGraph: {
    title: "MindStudent - Potencialize sua Jornada Acadêmica",
    description: `
      Plataforma de aprendizado focada em otimizar a jornada acadêmica dos usuários, oferecendo uma série de ferramentas que potencializam os estudos. 
      Com funcionalidades como análise de progresso, biblioteca digital, flashcards inteligentes e um sistema de gerenciamento de arquivos, o MindStudent ajuda os estudantes a se organizarem e aumentarem sua produtividade.
    `,
    type: "website",
    url: process.env.NEXT_PUBLIC_APP_URL,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/icons/logo.png`,
        width: 1200,
        height: 630,
        alt: "MindStudent - Potencialize sua Jornada Acadêmica",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico"
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${font.className} antialiased dark:bg-zinc-900`}
      >
        <NextIntlClientProvider messages={messages}>
          <SystemProvider>
            {children}
          </SystemProvider>
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}