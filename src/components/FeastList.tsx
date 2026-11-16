import Link from "next/link";
import type { Locale } from "@/content/types";
import type { Dictionary } from "@/i18n/dictionary";
import { formatRange } from "@/i18n/format";
import type { CalendarEvent } from "@/lib/content";
import { EventNotes } from "./DaySheet";

interface Props {
  events: CalendarEvent[];
  locale: Locale;
  dict: Dictionary;
}

/** "Feasts this month" — the main way to browse on phones. */
export function FeastList({ events, locale, dict }: Props) {
  return (
    <section aria-labelledby="month-feasts">
      <h2 id="month-feasts" className="font-serif text-xl font-semibold text-cream">
        {dict.feastsThisMonth}
      </h2>

      {events.length === 0 ? (
        <p className="mt-3 text-cream-muted">{dict.noFeastsThisMonth}</p>
      ) : (
        <ul className="mt-3 flex flex-col gap-2">
          {events.map((e) => {
            const [, m, d] = e.start.split("-").map(Number);
            const cls = "flex gap-4 rounded-2xl bg-card p-3 text-ink";
            const inner = (
              <>
                  <span
                    className="flex w-14 shrink-0 flex-col items-center justify-center rounded-xl text-white"
                    style={{ background: e.category.color }}
                  >
                    <span className="text-xl leading-none font-semibold">{d}</span>
                    <span className="mt-1 text-[11px] leading-none opacity-90">
                      {dict.monthsShort[m - 1]}
                    </span>
                  </span>
                  <span className="min-w-0 py-0.5">
                    <span className="block text-xs font-medium" style={{ color: e.category.color }}>
                      {e.category.name}
                    </span>
                    <span className="block font-serif text-base leading-snug font-semibold">{e.name}</span>
                    <span className="block text-sm text-muted">
                      {formatRange(e.start, e.end, locale, dict)}
                    </span>
                    <EventNotes event={e} dict={dict} />
                  </span>
              </>
            );
            return (
              <li key={e.id}>
                {e.category.id === "national" ? (
                  <div className={cls}>{inner}</div>
                ) : (
                  <Link
                    href={`/${locale}/feasts/${e.slug}`}
                    className={`${cls} ring-[var(--accent)] transition-shadow hover:ring-2`}
                  >
                    {inner}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
