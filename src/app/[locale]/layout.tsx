export default async function LocaleLayout({children, params: {locale}}: any) {
  // Enable static rendering
  // unstable_setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started

  return (
    <html className="h-full" lang={locale}>
      {children}
    </html>
  );
}
