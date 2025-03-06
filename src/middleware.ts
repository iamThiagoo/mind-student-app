import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from './lib/supabase/middleware';
import { setUserLocale } from './services/locale';

const COOKIE_NAME = 'locale';
const DEFAULT_LOCALE = 'en';
const languages = [
  { value: "pt-br", label: "Português" },
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
];

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const cookieLocale = request.cookies.get(COOKIE_NAME)?.value;

  if (!cookieLocale) {
    const acceptLanguage = request.headers.get("accept-language");
    const userLanguage = acceptLanguage?.split(",")[0].toLowerCase();

    const isValidLanguage = languages.some((lang) => lang.value === userLanguage);
    const locale = isValidLanguage ? userLanguage : DEFAULT_LOCALE;
    await setUserLocale(locale as string);
  }

  return updateSession(request) ?? response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
