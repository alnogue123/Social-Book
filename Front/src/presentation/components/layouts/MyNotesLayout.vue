<script setup lang="ts">  
    const isEmpty:boolean = true;
</script>
<template>
    <main class="container">
        <div class="emptynotes" v-if="isEmpty">
            <h1>What are we going to be inspired by today?</h1>
        </div>
    </main>
</template>
<style scoped src="/src/assets/Styles/layouts/MyNotesLayout.css"></style>