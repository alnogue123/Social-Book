<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <aside>
        <RouterLink to="/SocialBook/home/gallery" custom v-slot="{ navigate }">
            <a class="optionGallery" @click="navigate" role="link">
                <div class="containerImages">
                    <img src="/src/assets/images/Learned.svg" alt="icono animado" class="icon-svg" loading="lazy">
                </div>
                <div class="gallery">
                    <p>gallery of Writings</p>
                </div>
            </a>
        </RouterLink>
        <RouterLink to="/SocialBook/home/mynotes" custom v-slot="{ navigate }">
            <a class="optionNotes" @click="navigate" role="link">
                <div class="containerImages">
                    <img src="/src/assets/images/folder.svg" alt="icono animado" class="icon-svg" loading="lazy">
                </div>
                <div class="mynotes">
                    <p>My Notes</p>
                </div>
            </a>
        </RouterLink>
        <RouterLink to="/SocialBook/home/deleted" custom v-slot="{ navigate }">
            <a class="optionDeleted" @click="navigate" role="link">
                <div class="containerImages">
                    <img src="/src/assets/images/delete.svg" alt="icono animado" class="icon-svg" loading="lazy">
                </div>
                <div class="deleted">
                    <p>Deleted Notes</p>
                </div>
            </a>
        </RouterLink>
        <RouterLink to="/SocialBook/welcome" custom v-slot="{ navigate }">
            <a class="optionExit" @click="navigate" role="link">
                <div class="containerImages">
                    <img src="/src/assets/images/exit.svg" alt="icono animado" class="icon-svg" loading="lazy">
                </div>
                <div class="exit">
                    <p>log Out</p>
                </div>
            </a>
        </RouterLink>
    </aside>
</template>
<style scoped src="/src/assets/Styles/layouts/AsideLayout.css"></style>
