import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { formatRange } from "@/i18n/format";
import { monthPath } from "@/lib/calendar";
import { getCategory, getDatesOf, getFeast, getFeastDetails } from "@/lib/content";


type Props = PageProps<"/[lang]/feasts/[slug]">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const feast = await getFeast(slug);
  if (!isLocale(lang) || !feast) return {};
  return { title: feast.name[lang], description: feast.short[lang] };
}

/**
 * Basic feast page — a starting point for the full design.
 */
export default async function FeastPage({ params }: Props) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const feast = await getFeast(slug);
  if (!feast || feast.long[lang].length === 0) notFound();

  // Feasts with a full article open it directly instead of the short page.
  if (await getFeastDetails(slug, lang)) redirect(`/${lang}/feasts/${slug}/more`);

  const [category, dates] = await Promise.all([getCategory(feast.categoryId), getDatesOf(slug)]);
  const dict = getDictionary(lang);
  const color = category?.color ?? "#9e2333";

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
            {!feast.long[lang][0]?.startsWith(feast.short[lang]) && (
              <p className="mt-3 text-lg leading-relaxed text-muted">{feast.short[lang]}</p>
            )}

            <div className="mt-8 flex flex-col gap-4 leading-relaxed">
              {feast.long[lang].map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </article>

        {dates.length > 0 && (
          <section className="mt-10">
            <h2 className="font-serif text-xl font-semibold text-cream">{dict.upcomingDates}</h2>
            <ul className="mt-3 flex flex-col gap-2">
              {dates.map((d) => {
                const [y, m] = d.start.split("-").map(Number);
                return (
                  <li key={d.start}>
                    <Link
                      href={monthPath(lang, { year: y, month: m })}
                      className="flex items-center justify-between gap-4 rounded-xl bg-card px-4 py-3 text-ink ring-[var(--accent)] hover:ring-2"
                    >
                      <span>{formatRange(d.start, d.end, lang, dict, true)}</span>
                      <span aria-hidden>→</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
      </main>
    </div>
  );
}
