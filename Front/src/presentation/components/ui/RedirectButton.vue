<script setup lang="ts">
import { RouterLink } from 'vue-router';
defineProps<{
    to: string;
    icon: string;
    text: string;
}>();
</script>
<template>
    <RouterLink :to="to">
        <button class="button">
            <i :class="icon"></i>
            <span class="toTranslate">{{ text }}</span>
        </button>
    </RouterLink>
</template>

<style scoped src="/src/assets/Styles/Components/RedirectButtont.css"></style>