"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Locale } from "@/content/types";
import type { Dictionary } from "@/i18n/dictionary";
import { formatDay, formatRange, weekdayName } from "@/i18n/format";
import type { CalendarEvent } from "@/lib/content";
import { Close, Moon } from "./Icons";

interface Props {
  date: string | null;
  events: CalendarEvent[];
  locale: Locale;
  dict: Dictionary;
  onClose: () => void;
}

/**
 * Bottom sheet on phones, centered dialog on larger screens.
 * Uses the native <dialog>, which handles focus and the Escape key.
 */
export function DaySheet({ date, events, locale, dict, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (date && !dialog.open) dialog.showModal();
    if (!date && dialog.open) dialog.close();
  }, [date]);

  return (
    <dialog
      ref={ref}
      className="sheet"
      aria-labelledby="day-sheet-title"
      onClose={onClose}
      onClick={(e) => {
        // Clicking the dark backdrop closes the sheet.
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
    >
      {date && (
        <div className="px-5 pt-3 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-line md:hidden" aria-hidden />
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-muted">{weekdayName(date, dict)}</p>
              <h2 id="day-sheet-title" className="font-serif text-2xl font-semibold">
                {formatDay(date, locale, dict)}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              aria-label={dict.close}
              className="-mr-2 rounded-full p-2 text-muted hover:bg-card-sunk hover:text-ink"
            >
              <Close />
            </button>
          </div>

          {events.length === 0 ? (
            <p className="mt-4 text-muted">{dict.noFeastsThisDay}</p>
          ) : (
            <ul className="mt-4 flex flex-col gap-3">
              {events.map((e) => (
                <li
                  key={e.id}
                  className="rounded-xl border border-line border-l-4 p-4"
                  style={{ borderLeftColor: e.category.color }}
                >
                  <p className="text-xs font-medium" style={{ color: e.category.color }}>
                    {e.category.name}
                  </p>
                  <h3 className="mt-0.5 font-serif text-lg font-semibold leading-snug">{e.name}</h3>
                  {e.start !== e.end && (
                    <p className="text-sm text-muted">{formatRange(e.start, e.end, locale, dict)}</p>
                  )}
                  {e.short && <p className="mt-2 text-[15px] leading-relaxed">{e.short}</p>}
                  <EventNotes event={e} dict={dict} />
                  {e.category.id !== "national" && (
                    <Link
                      href={`/${locale}/feasts/${e.slug}`}
                      className="mt-3 inline-block text-sm font-medium text-[var(--accent)] underline-offset-4 hover:underline"
                    >
                      {dict.readMore} →
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </dialog>
  );
}

export function EventNotes({ event, dict }: { event: CalendarEvent; dict: Dictionary }) {
  if (!event.eveLiturgy) return null;
  return (
    <span className="mt-2 flex items-center gap-1 text-xs text-muted">
      <Moon /> {dict.eveLiturgy}
    </span>
  );
}
