import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { getCategory, getFeast, getFeastDetails } from "@/lib/content";

type Props = PageProps<"/[lang]/feasts/[slug]/more">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const feast = await getFeast(slug);
  if (!isLocale(lang) || !feast) return {};
  return { title: feast.name[lang], description: feast.short[lang] };
}

/** Bold markers: "**text**" → <strong>. */
function Rich({ text }: { text: string }) {
  return text
    .split(/\*\*(.+?)\*\*/g)
    .map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));
}

/** The extended article of a feast ("full information"). */
export default async function FeastMorePage({ params }: Props) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const [feast, details] = await Promise.all([getFeast(slug), getFeastDetails(slug, lang)]);
  if (!feast || !details) notFound();

  const category = await getCategory(feast.categoryId);
  const dict = getDictionary(lang);
  const color = category?.color ?? "#9e2333";

  // Section headings (h2) get an anchor and appear in the contents list.
  const sections = details.flatMap((b, i) => (b.type === "h2" ? [{ text: b.text, i }] : []));

  return (
    <div style={{ "--accent": color } as React.CSSProperties}>
      <SiteHeader locale={lang} dict={dict} />
      <main className="mx-auto max-w-2xl px-4 pt-4 pb-16 md:pt-10">
        <Link href={`/${lang}`} className="text-sm text-cream-muted hover:text-cream">
          ← {dict.backToCalendar}
        </Link>

        <article className="mt-6 overflow-hidden rounded-2xl bg-card text-ink">
          <div className="linen-stripe" aria-hidden />
          <div className="p-6 md:p-10">
            {category && (
              <p className="text-sm font-medium" style={{ color }}>
                {category.name[lang]}
              </p>
            )}
            <h1 className="mt-1 font-serif text-3xl font-semibold md:text-4xl">{feast.name[lang]}</h1>

            {sections.length > 1 && (
              <nav aria-label={dict.contents} className="mt-6 rounded-xl bg-card-sunk p-4">
                <p className="text-sm font-medium text-muted">{dict.contents}</p>
                <ol className="mt-2 flex list-decimal flex-col gap-1 pl-5 text-[15px]">
                  {sections.map(({ text, i }) => (
                    <li key={i}>
                      <a href={`#s${i}`} className="underline-offset-4 hover:text-[var(--accent)] hover:underline">
                        {text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <div className="mt-8 flex flex-col gap-4 leading-relaxed">
              {details.map((b, i) => {
                switch (b.type) {
                  case "h2":
                    return (
                      <h2 key={i} id={`s${i}`} className="mt-6 scroll-mt-4 font-serif text-2xl font-semibold">
                        {b.text}
                      </h2>
                    );
                  case "h3":
                    return (
                      <h3 key={i} className="mt-2 font-serif text-xl font-semibold">
                        {b.text}
                      </h3>
                    );
                  case "h4":
                    return (
                      <h4 key={i} className="mt-2 font-semibold" style={{ color }}>
                        {b.text}
                      </h4>
                    );
                  case "img":
                    return (
                      <figure key={i} className="my-2">
                        <Image
                          src={b.src}
                          alt={b.credit}
                          width={b.width}
                          height={b.height}
                          sizes="(min-width: 768px) 640px, 100vw"
                          className="h-auto w-full rounded-xl"
                        />
                        <figcaption className="mt-1.5 text-xs leading-snug text-muted">
                          {dict.photoSource} {b.credit}
                        </figcaption>
                      </figure>
                    );
                  case "ul":
                    return (
                      <ul key={i} className="flex list-disc flex-col gap-2 pl-6">
                        {b.items.map((it, j) => (
                          <li key={j}>
                            <Rich text={it} />
                          </li>
                        ))}
                      </ul>
                    );
                  default:
                    return (
                      <p key={i}>
                        <Rich text={b.text} />
                      </p>
                    );
                }
              })}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
