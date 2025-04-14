<script setup lang="ts">
import languageButton from "../components/ui/languageButton.vue";
import darkModeButtonComponent from "../components/ui/DarkModeButton.vue";
import welcomeLayout from '../components/layouts/welcomeLayout.vue';
import RedirectButton from "../components/ui/RedirectButton.vue";
import type { ListType } from "../../Types/listType";
import { useAuthStore } from "../../core/application/stores/authstore";

const authStore = useAuthStore();

const listFunctions: ListType[] = [
  { value: "Save personal notes", id: 1 },
  { value: "Create blogs", id: 2 },
  { value: "Create, edit, and delete as you wish", id: 3 },
  { value: "Share your writings with the world", id: 4 },
  { value: "Express your ideas with total freedom", id: 5 }
];

</script>

<template>
  <div>
    <main class="containerGeneral">
      <div class="containerbuttons">
        <languageButton />
        <darkModeButtonComponent/>
      </div>
      <section class="containerlogo">
        <div class="containerComponents">
          <welcomeLayout />
          <nav class="buttongroup">
            <RedirectButton v-if="authStore.isRegister || authStore.isWelcome" to="/SocialBook/login"
              text="Let's get started!" icon="fa-solid fa-right-to-bracket" />
            <RedirectButton v-if="authStore.isLogin || authStore.isWelcome" to="/SocialBook/register" text="Sign up!"
              icon="fa-solid fa-user-plus" />
          </nav>
        </div>
      </section>
      <section class="containerfunctions">
        <component :is="authStore.currentComponent" v-if="authStore.currentComponent" />
        <ol v-else class="list">
          <li v-for="feature in listFunctions" :key="feature.id" style="list-style: none;">
            <i class="pi pi-verified"></i>
            <span class="feature-text toTranslate">{{ feature.value }}</span>
          </li>
        </ol>
      </section>
    </main>
  </div>
</template>

<style scoped src="/src/assets/Styles/Views/WelcomeView.css"></style>