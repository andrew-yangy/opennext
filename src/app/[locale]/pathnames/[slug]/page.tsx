type Props = {
  params: {locale: string; slug: string};
};

export default function PathnamesPage({params: {locale, slug}}: Props) {
  return (
    <div className="max-w-[490px]">
      {locale} {slug}
    </div>
  );
}
