import createMiddleware from 'next-intl/middleware';
import {LocalePrefix} from 'next-intl/routing';
import {locales} from './config';

export default createMiddleware({
  defaultLocale: 'us',
  locales,
  localePrefix: {
    mode: 'as-needed'
  } satisfies LocalePrefix<typeof locales>
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
