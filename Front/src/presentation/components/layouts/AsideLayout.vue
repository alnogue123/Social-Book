<script setup>
import { RouterLink, useRouter } from 'vue-router';
import Gallery from '@/assets/images/Learned.svg';
import myNotes from '@/assets/images/folder.svg';
import deleted from '@/assets/images/delete.svg';
import exit from '@/assets/images/exit.svg';
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.classList.toggle('no-scroll', isMenuOpen.value);
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.classList.remove('no-scroll');
};

const router = useRouter();

const navigateAndClose = (path) => {
  router.push(path);
  closeMenu();
};
</script>

<template>
  <div class="aside-wrapper" :class="$attrs.class"> 
    <button class="menu-toggle-button" @click="toggleMenu">
      Menú
    </button>
    <div class="menu-overlay" :class="{ 'is-active': isMenuOpen }" @click="closeMenu"></div>
    
    <aside :class="{ 'is-open': isMenuOpen }">
      <div class="menu-items-container">
        <RouterLink to="/SocialBook/home/gallery" custom v-slot="{ navigate }">
          <a class="optionGallery" @click="navigateAndClose('/SocialBook/home/gallery')" role="link">
            <div class="containerImages">
              <component :is="Gallery" alt="icono animado" class="icon-svg" loading="lazy"></component>
            </div>
            <div class="gallery">
              <p>Gallery of Writings</p>
            </div>
          </a>
        </RouterLink>
        <RouterLink to="/SocialBook/home/mynotes" custom v-slot="{ navigate }">
          <a class="optionNotes" @click="navigateAndClose('/SocialBook/home/mynotes')" role="link">
            <div class="containerImages">
              <component :is="myNotes" alt="icono animado" class="icon-svg" loading="lazy"></component>
            </div>
            <div class="mynotes">
              <p>My Notes</p>
            </div>
          </a>
        </RouterLink>
        <RouterLink to="/SocialBook/home/deleted" custom v-slot="{ navigate }">
          <a class="optionDeleted" @click="navigateAndClose('/SocialBook/home/deleted')" role="link">
            <div class="containerImages">
              <component :is="deleted" alt="icono animado" class="icon-svg" loading="lazy"></component>
            </div>
            <div class="deleted">
              <p>Deleted Notes</p>
            </div>
          </a>
        </RouterLink>
        <RouterLink to="/SocialBook/welcome" custom v-slot="{ navigate }">
          <a class="optionExit" @click="navigateAndClose('/SocialBook/welcome')" role="link">
            <div class="containerImages">
              <component :is="exit" alt="icono animado" class="icon-svg" loading="lazy"></component>
            </div>
            <div class="exit">
              <p>Log Out</p>
            </div>
          </a>
        </RouterLink>
      </div>
    </aside>
  </div>
</template>

<style scoped src="/src/assets/Styles/layouts/AsideLayout.css"></style>
