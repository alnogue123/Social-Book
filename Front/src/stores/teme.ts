import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    dark: localStorage.getItem("theme") === "dark",
  }),

  actions: {
    changeTheme(): void {
      this.dark = !this.dark;
      localStorage.setItem("theme", this.dark ? "dark" : "light");
      this.dark
        ? document.body.classList.add("dark-mode")
        : document.body.classList.remove("dark-mode");
      this.changeFavIcon();
    },

    changeFavIcon() {
      const faviconUrl = this.dark
        ? '/icons/Darkmode.png'
        : '/icons/LigthMode.png';

      let link = document.querySelector<HTMLLinkElement>("link[rel='icon']")
        || document.querySelector<HTMLLinkElement>("link[rel~='icon']");

      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }

      const finalUrl = `${faviconUrl}?v=${new Date().getTime()}`;

      if (link.href !== location.origin + finalUrl) {
        link.href = finalUrl;
      }
    }
  }
});

