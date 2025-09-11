// import { clsx } from "clsx";
// import { twMerge } from "tailwind-merge";

// export function cn(...inputs) {
//   return twMerge(clsx(inputs));
// }

// export const formatDate = (time) => {
//   const date = new Date(time);
//   return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
// };


import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const formatDate = (time) => {
  return format(new Date(time), "dd/MM/yyyy hh:mm:ss a");
};
