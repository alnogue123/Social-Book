<script setup>
import { watch } from "vue";
import { useThemeStore } from "../../../core/application/stores/teme";

const temeStore = useThemeStore();

watch(() => temeStore.dark, (newVal) => {
  document.documentElement.classList.toggle("dark-mode", newVal);
  document.body.classList.toggle("dark-mode", newVal);
}, { immediate: true });

</script>

<template>
  <div class="container">
    <i :class="['pi', temeStore.dark ? 'pi-sun' : 'pi-moon']" @click="temeStore.changeTheme()"
      style="font-size: 3rem;"></i>
  </div>
</template>

<style scoped src="/src/assets/Styles/Components/darkMode.css">
</style>
