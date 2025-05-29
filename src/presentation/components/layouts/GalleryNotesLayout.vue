<script setup lang="ts">
import NoteDialog from '../ui/NoteDialog.vue';
import CreateNotesButton from '../ui/CreateNotesButton.vue';
import tag from './../../../assets/images/bookmark.svg';
import { onMounted } from 'vue';
import { useNotesStore } from '../../../modules/Notes/application/stores/Notestore';

const notestore = useNotesStore();
onMounted(async () => {
    await notestore.getAllNotes();
})

</script>
<template>
    <main>
        <div class="containerTag">
            <div class="imageTag">
                <component :is="tag" alt="icono animado" class="icon-svg"></component>
            </div>
            <h1>texto etiqueta</h1>
        </div>
        <div class="notes">
            <div v-for="note in notestore.publicNotes" :key="note.id" class="note card"
                @click="notestore.choseNote(note)">
                <div class="card-body">
                    <h5 class="card-title" 
                    v-html="notestore.processNotes(note).title"></h5>
                    <p class="card-text" 
                    v-html="notestore.processNotes(note).body"></p>
                </div>
            </div>
            <CreateNotesButton />
        </div>
    </main>
    <NoteDialog />
</template>
<style scoped src="/src/assets/Styles/layouts/GalleryNotes.css"></style>