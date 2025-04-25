<script setup lang="ts">
import { ref } from 'vue';
import OverlayPanel from 'primevue/overlaypanel';
import type { LanguageType } from '../../../Types/langtype';

const op = ref<InstanceType<typeof OverlayPanel> | null>(null);

const languages = ref<LanguageType[]>([
  { name: "Español", code: "es" },
  { name: "Inglés", code: "en" },
  { name: "Francés", code: "fr" },
]);

const changeLanguage = (): void => {
  alert('funcion no soportada todavia')
  if (op.value) {
    op.value.hide();
  }
};

const toggleOverlay = (event: MouseEvent) => {
  if (op.value) {
    op.value.toggle(event);
  }
};
</script>

<template>
  <div>
    <i class="pi pi-globe world" @click="toggleOverlay"></i>
    <OverlayPanel ref="op">
      <ul class="language-list">
        <li v-for="lang in languages" :key="lang.code" @click="changeLanguage()">
          {{ lang.name }}
        </li>
      </ul>
    </OverlayPanel>
  </div>
</template>

<style scoped src="/src/assets/Styles/Components/languajeButton.css"></style>

