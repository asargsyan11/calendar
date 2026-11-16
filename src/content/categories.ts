import type { FeastCategory } from "./types";

/** Colors are taken from the illustrations' palette. */
export const categories: FeastCategory[] = [
  {
    id: "tabernacle",
    name: { hy: "Տաղավար տոներ", en: "Great feasts" },
    color: "#9E2333", // pomegranate red
  },
  {
    id: "lord",
    name: { hy: "Տերունական տոներ", en: "Feasts of the Lord" },
    color: "#B0521C", // dried apricot
  },
  {
    id: "saints",
    name: { hy: "Սրբոց տոներ", en: "Saints' days" },
    color: "#3B6680", // plate blue
  },
  {
    id: "fasts",
    name: { hy: "Պահքեր", en: "Fasts" },
    color: "#574388", // plum
  },
  {
    id: "memorial",
    name: { hy: "Մեռելոց", en: "Remembrance days" },
    color: "#5C6A35", // olive
  },
  {
    id: "folk",
    name: { hy: "Ժողովրդական տոներ", en: "Folk traditions" },
    color: "#8A6418", // walnut / ochre
  },
  {
    id: "national",
    name: { hy: "Պետական տոներ", en: "National holidays" },
    color: "#1F6F6B", // deep teal
  },
];
