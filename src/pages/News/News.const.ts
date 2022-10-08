import { Roles } from "@sources/newsApi/types";

export const skeletonsCount = 3;
export const tabsItems = [
  {
    label: "Гендир",
    role: Roles.Director,
  },
  {
    label: "Бухгалтер",
    role: Roles.Accountant,
  },
];
export const tabsLabels = tabsItems.map((el) => el.label);
export const digestLabel = "Дайджест";
export const trendsLabel = "Тренды";
