/**
 * Content types.
 *
 * These are shaped like the documents a headless CMS (Sanity, Strapi,
 * Contentful…) would return, so moving from the local files in this folder
 * to a CMS only means rewriting `src/lib/content.ts`, not the components.
 */

export type Locale = "hy" | "en";

/** A piece of text written in every supported language. */
export type Localized = Record<Locale, string>;

/** A date without time or timezone, always written as "YYYY-MM-DD". */
export type ISODate = string;

/**
 * A type of church day, e.g. the five Tabernacle feasts, saints' days, fasts.
 * Each category has a color used for dots, bars and filter chips.
 */
export interface FeastCategory {
  id: string;
  name: Localized;
  /** Keep it dark enough for white text on top. */
  color: string;
}

export interface Illustration {
  /**
   * Image file in /public/illustrations, e.g. "month-01.jpg".
   * Until the file is added, a placeholder showing this name is displayed.
   */
  file: string;
  alt: Localized;
  /**
   * Which part of the picture to keep when it is cropped into the short
   * banner on phones, as a CSS position: "50% 30%" = center, upper third.
   */
  focus?: string;
}

/**
 * The theme of a calendar month. Themes repeat every year, so there are
 * exactly 12 of them (month 1 = January). Each month features one feast.
 */
export interface MonthTheme {
  month: number;
  /** Usually the name of the month's featured feast. */
  title: Localized;
  /** A short description shown under the illustration. */
  text: Localized;
  /** The featured feast's slug, for the "Read more" link. */
  featuredFeast?: string;
  /** Accent color for the month's page. */
  accent: string;
  illustration: Illustration;
}

/**
 * A feast's description. Written once and reused every year.
 */
export interface Feast {
  slug: string;
  categoryId: string;
  name: Localized;
  /** 1–2 sentences, shown in the day popup on the calendar. */
  short: Localized;
  /** Full text for the feast page. Each item is one paragraph. */
  long: Record<Locale, string[]>;
}

/**
 * When a feast happens in a specific year. Add one entry per year.
 * For one-day feasts `end` is the same as `start`.
 */
export interface FeastDate {
  feastSlug: string;
  start: ISODate;
  end: ISODate;
  /** The Divine Liturgy of the eve (Ճրագալույց) is held the evening before. */
  eveLiturgy?: boolean;
}

/**
 * One block of an extended feast article (the "full information" page).
 * `h4` is a small label above a paragraph. Inside text, **double asterisks**
 * mean bold.
 */
export type DetailBlock =
  | { type: "p" | "h2" | "h3" | "h4"; text: string }
  | { type: "ul"; items: string[] }
  /** A photo in /public/feast-photos; `credit` is shown under it. */
  | { type: "img"; src: string; width: number; height: number; credit: string };

/** The extended article of a feast. A language is missing until it is added. */
export type FeastDetails = Partial<Record<Locale, DetailBlock[]>>;
