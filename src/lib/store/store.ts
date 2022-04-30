import { writable } from "svelte/store";

const storeDataInit = {
  en: "Hello, World!",
  tr: "Ah yalan dünya..",
};

export const storeData = writable(storeDataInit);
