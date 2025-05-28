import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
    state: () => ({
        openMenu: false,
        isRotate: false,
        visible: false
    }),
    actions: {
        toggleMenu() {
            this.openMenu = !this.openMenu;
            this.isRotate = !this.isRotate;
        },
        openModal() {
            this.visible = true;
        },
        closeModal() {
            const userResponse = confirm('Are you sure you want to stop creating the note?');
            if (userResponse) {
                this.visible = false;
            }
        }
    },
});