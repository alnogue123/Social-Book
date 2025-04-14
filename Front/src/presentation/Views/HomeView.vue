<script setup lang="ts">
    import HeaderLayout from '../components/layouts/HeaderLayout.vue';
    import AsideLayout from '../components/layouts/AsideLayout.vue';
    import GalleryNotesLayout from '../components/layouts/GalleryNotesLayout.vue';
    import MyNotesLayout from '../components/layouts/MyNotesLayout.vue';
    import { useAuthStore } from '../../core/application/stores/authstore';

    const authStore = useAuthStore();

</script>
<template>
    <div class="app-container">
        <HeaderLayout/>
        <div class="body-container">
            <AsideLayout class="aside"/>
            <GalleryNotesLayout v-if="authStore.isGallery"/>
            <MyNotesLayout v-if="authStore.isMyNotes"/>
        </div>
    </div>
</template>
<style scoped src="/src/assets/Styles/Views/HomeView.css"></style>