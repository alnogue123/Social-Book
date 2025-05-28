<script setup lang="ts">
import NoteDialog from '../ui/NoteDialog.vue';
import CreateNotesButton from '../ui/CreateNotesButton.vue';
import tag from './../../../assets/images/bookmark.svg';
import { computed, onMounted } from 'vue';
import { useNotesStore } from '../../../modules/Notes/application/stores/Notestore';
import { convertirDeltaDeStringAHtml } from '../../../common/composables/useReadDeltaObserver';

const notestore = useNotesStore();

onMounted(() => {
    notestore.getAllNotes();
})

const processedNotes = computed(() => {
    return notestore.publicNotes.map(note => {
        return {
            ...note,
            processedTitle: convertirDeltaDeStringAHtml(note.title) || note.title,
            processedBody: convertirDeltaDeStringAHtml(note.body) || note.body
        }
    });
});
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
                @click="notestore.choseNote(note.id)">
                <div class="card-body">
                    <h5 class="card-title" 
                    v-html="processedNotes.find(n => n.id === note.id)?.processedTitle"></h5>
                    <p class="card-text" 
                    v-html="processedNotes.find(n => n.id === note.id)?.processedBody"></p>
                </div>
            </div>
            <CreateNotesButton />
        </div>
    </main>
    <NoteDialog />
</template>
<style scoped src="/src/assets/Styles/layouts/GalleryNotes.css"></style>