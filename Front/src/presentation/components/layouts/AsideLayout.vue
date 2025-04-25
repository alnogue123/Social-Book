<script setup>
import { RouterLink } from 'vue-router';
import Gallery from '../../../assets/images/Learned.svg';
import myNotes from '../../../assets/images/folder.svg';
import deleted from '../../../assets/images/delete.svg';
import exit from '../../../assets/images/exit.svg';
</script>
<template>
    <aside>
        <RouterLink to="/SocialBook/home/gallery" custom v-slot="{ navigate }">
            <a class="optionGallery" @click="navigate" role="link">
                <div class="containerImages">
                    <component :is="Gallery" alt="icono animado" class="icon-svg" loading="lazy"></component>
                </div>
                <div class="gallery">
                    <p>Gallery of Writings</p>
                </div>
            </a>
        </RouterLink>
        <RouterLink to="/SocialBook/home/mynotes" custom v-slot="{ navigate }">
            <a class="optionNotes" @click="navigate" role="link">
                <div class="containerImages">
                    <component :is="myNotes" alt="icono animado" class="icon-svg" loading="lazy"></component>
                </div>
                <div class="mynotes">
                    <p>My Notes</p>
                </div>
            </a>
        </RouterLink>
        <RouterLink to="/SocialBook/home/deleted" custom v-slot="{ navigate }">
            <a class="optionDeleted" @click="navigate" role="link">
                <div class="containerImages">
                    <component :is="deleted" alt="icono animado" class="icon-svg" loading="lazy"></component>
                </div>
                <div class="deleted">
                    <p>Deleted Notes</p>
                </div>
            </a>
        </RouterLink>
        <RouterLink to="/SocialBook/welcome" custom v-slot="{ navigate }">
            <a class="optionExit" @click="navigate" role="link">
                <div class="containerImages">
                    <component :is="exit" alt="icono animado" class="icon-svg" loading="lazy"></component>
                </div>
                <div class="exit">
                    <p>Log Out</p>
                </div>
            </a>
        </RouterLink>
    </aside>
</template>
<style scoped src="/src/assets/Styles/layouts/AsideLayout.css"></style>
