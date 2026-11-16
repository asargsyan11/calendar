import type { Locale } from "@/content/types";

/** Interface text (buttons, labels…). Feast content lives in src/content. */
const dictionaries = {
  hy: {
    siteTitle: "Տոնացույց",
    siteSubtitle: "Հայ Առաքելական Սուրբ Եկեղեցի",
    siteDescription: "Հայ Առաքելական Եկեղեցու տոները՝ ամիս առ ամիս։",
    months: [
      "Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս",
      "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր",
    ],
    /** Used in dates like "3 հոկտեմբերի". */
    monthsGenitive: [
      "հունվարի", "փետրվարի", "մարտի", "ապրիլի", "մայիսի", "հունիսի",
      "հուլիսի", "օգոստոսի", "սեպտեմբերի", "հոկտեմբերի", "նոյեմբերի", "դեկտեմբերի",
    ],
    monthsShort: [
      "հնվ", "փտվ", "մրտ", "ապր", "մյս", "հնս",
      "հլս", "օգս", "սպտ", "հկտ", "նյմ", "դկտ",
    ],
    /** Monday first, as is usual in Armenia. */
    weekdaysShort: ["Երկ", "Երք", "Չրք", "Հնգ", "Ուրբ", "Շբթ", "Կիր"],
    weekdaysLong: [
      "երկուշաբթի", "երեքշաբթի", "չորեքշաբթի", "հինգշաբթի", "ուրբաթ", "շաբաթ", "կիրակի",
    ],
    previousMonth: "Նախորդ ամիս",
    nextMonth: "Հաջորդ ամիս",
    today: "Այսօր",
    feastsThisMonth: "Տոները այս ամսին",
    noFeastsThisMonth: "Այս ամսին ընտրված տեսակի տոներ չկան։",
    noFeastsThisDay: "Այս օրը տոներ չկան։",
    filterLabel: "Տոների տեսակը",
    all: "Բոլորը",
    readMore: "Կարդալ ավելին",
    close: "Փակել",
    eveLiturgy: "Ճրագալույցը՝ նախորդ երեկոյան",
    upcomingDates: "Ամսաթվեր",
    backToCalendar: "Վերադառնալ օրացույց",
    swipeHint: "Սահեցրեք՝ ամիսը փոխելու համար",
    notFoundTitle: "Էջը չի գտնվել",
    language: "Լեզու",
    illustrationPlaceholder: "Այստեղ կլինի ամսվա նկարազարդումը",
    goToDate: "Գնալ ամսաթվին",
    exactDate: "Կամ ընտրեք կոնկրետ ամսաթիվ",
    go: "Գնալ",
    previousYear: "Նախորդ տարի",
    nextYear: "Հաջորդ տարի",
    fullArticle: "Ավելի մանրամասն",
    photoSource: "Աղբյուր՝",
    contents: "Բովանդակություն",
    backToFeast: "Վերադառնալ տոնին",
  },
  en: {
    siteTitle: "Church Calendar",
    siteSubtitle: "Armenian Apostolic Church",
    siteDescription: "Feasts of the Armenian Apostolic Church, month by month.",
    months: [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ],
    monthsGenitive: [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ],
    monthsShort: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ],
    weekdaysShort: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    weekdaysLong: [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
    ],
    previousMonth: "Previous month",
    nextMonth: "Next month",
    today: "Today",
    feastsThisMonth: "Feasts this month",
    noFeastsThisMonth: "No feasts of the selected types this month.",
    noFeastsThisDay: "No feasts on this day.",
    filterLabel: "Feast types",
    all: "All",
    readMore: "Read more",
    close: "Close",
    eveLiturgy: "Eve liturgy (Chragaluyts) the evening before",
    upcomingDates: "Dates",
    backToCalendar: "Back to calendar",
    swipeHint: "Swipe to change month",
    notFoundTitle: "Page not found",
    language: "Language",
    illustrationPlaceholder: "The month's illustration goes here",
    goToDate: "Go to date",
    exactDate: "Or pick an exact date",
    go: "Go",
    previousYear: "Previous year",
    nextYear: "Next year",
    fullArticle: "Full article",
    photoSource: "Source:",
    contents: "Contents",
    backToFeast: "Back to the feast",
  },
} satisfies Record<Locale, unknown>;

export type Dictionary = (typeof dictionaries)["hy"];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
