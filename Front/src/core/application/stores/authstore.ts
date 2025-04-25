import { defineStore } from "pinia";
import { computed } from "vue";
import { useRoute } from "vue-router";
import loginForm from "../../../presentation/components/forms/loginForm.vue";
import RegisterForm from "../../../presentation/components/forms/RegisterForm.vue";
import GalleryNotesLayout from "../../../presentation/components/layouts/GalleryNotesLayout.vue";
import MyNotesLayout from "../../../presentation/components/layouts/MyNotesLayout.vue";

export const useAuthStore = defineStore('auth', () => {
    const route = useRoute();

    const isLogin = computed(() => route.path.includes('login'));
    const isRegister = computed(() =>route.path.includes('register'));
    const isWelcome = computed(() => route.path.includes('welcome'));
    const isGallery = computed(() => route.path.includes('gallery'));
    const isMyNotes = computed(() => route.path.includes('mynotes'));
    const isDeleted = computed(() => route.path.includes('deleted'));

    const currentComponent = computed(() => {
        if (isLogin.value) return loginForm;
        if (isRegister.value) return RegisterForm;
        if (isGallery.value) return GalleryNotesLayout;
        if (isMyNotes.value) return MyNotesLayout;
        return null;
    });
    return { isLogin, isRegister, isWelcome, isGallery , isMyNotes , isDeleted , currentComponent };
})