<script setup lang="ts">
import DarkModeButton from '../ui/DarkModeButton.vue';
import languageButton from '../ui/languageButton.vue';
</script>
<template>
    <header class="header">
        <div class="containerUser">
            <div class="avatar">
                <i class="fa-solid fa-user" aria-label="User Icon"></i>
            </div>
            <p class="name">John Doe</p>
        </div>
        <div class="containertitle">
            <img src="/src/assets/images/Book.png" alt="">
            <p class="title">Social Book</p>
        </div>
        <div class="controls">
            <languageButton class="languageButton" />
            <DarkModeButton class="DarkModeButton " />
        </div>
    </header>
</template>
<style scoped src="/src/assets/Styles/layouts/HeaderLayout.css"></style>