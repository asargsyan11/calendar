/**
 * The ONLY place that reads content.
 *
 * Today it reads the local files in src/content. When you move to a CMS,
 * rewrite these functions to fetch from it and keep their return types —
 * nothing else in the app needs to change.
 */
import { categories } from "@/content/categories";
import { feastDates, feasts } from "@/content/feasts";
import { monthThemes } from "@/content/month-themes";
import { feastDetails } from "@/content/feast-details";

import type {
  Feast,
  DetailBlock,
  FeastCategory,
  FeastDate,
  ISODate,
  Locale,
  MonthTheme,
} from "@/content/types";

/** Everything the calendar needs about one feast date, in one language. */
export interface CalendarEvent {
  id: string;
  slug: string;
  name: string;
  short: string;
  start: ISODate;
  end: ISODate;
  eveLiturgy: boolean;
  category: LocalizedCategory;
}

export interface LocalizedCategory {
  id: string;
  name: string;
  color: string;
}

function localizeCategory(c: FeastCategory, locale: Locale): LocalizedCategory {
  return { id: c.id, name: c.name[locale], color: c.color };
}

function toEvent(d: FeastDate, locale: Locale): CalendarEvent | null {
  const f = feasts.find((x) => x.slug === d.feastSlug);
  const c = f && categories.find((x) => x.id === f.categoryId);
  if (!f || !c) return null;
  return {
    id: `${d.feastSlug}-${d.start}`,
    slug: f.slug,
    name: f.name[locale],
    short: f.short[locale],
    start: d.start,
    end: d.end,
    eveLiturgy: !!d.eveLiturgy,
    category: localizeCategory(c, locale),
  };
}

/** Events that overlap [from, to] (inclusive), sorted by start date. */
export async function getEventsBetween(
  from: ISODate,
  to: ISODate,
  locale: Locale,
): Promise<CalendarEvent[]> {
  return feastDates
    .filter((d) => d.start <= to && d.end >= from)
    .map((d) => toEvent(d, locale))
    .filter((e): e is CalendarEvent => e !== null)
    .sort((a, b) => a.start.localeCompare(b.start) || b.end.localeCompare(a.end));
}

export async function getCategories(locale: Locale): Promise<LocalizedCategory[]> {
  return categories.map((c) => localizeCategory(c, locale));
}

export async function getMonthTheme(month: number): Promise<MonthTheme> {
  return monthThemes[month - 1];
}

export async function getFeast(slug: string): Promise<Feast | undefined> {
  return feasts.find((f) => f.slug === slug);
}

export async function getCategory(id: string): Promise<FeastCategory | undefined> {
  return categories.find((c) => c.id === id);
}

export async function getFeastDetails(slug: string, locale: Locale): Promise<DetailBlock[] | undefined> {
  return feastDetails[slug]?.[locale];
}
export async function getDatesOf(slug: string): Promise<FeastDate[]> {
  return feastDates
    .filter((d) => d.feastSlug === slug)
    .sort((a, b) => a.start.localeCompare(b.start));
}
