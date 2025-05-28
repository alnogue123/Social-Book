<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import NoteDialog from '../ui/NoteDialog.vue';
import CreateNotesButton from '../ui/CreateNotesButton.vue';
import { useNotesStore } from '../../../modules/Notes/application/stores/Notestore';
import { convertirDeltaDeStringAHtml } from '../../../common/composables/useReadDeltaObserver';

const notestore = useNotesStore();
const loading = ref(true);
const isEmpty = computed(() => !loading.value && notestore.privateNotes.length === 0);

onMounted(() => {
    notestore.getAllNotes().then(() => {
        loading.value = false;
    });
})

const processedNotes = computed(() => {
    return notestore.privateNotes.map(note => {
        return {
            ...note,
            processedTitle: convertirDeltaDeStringAHtml(note.title) || note.title,
            processedBody: convertirDeltaDeStringAHtml(note.body) || note.body
        }
    });
});
</script>
<template>
    <main class="container">
        <div class="emptynotes" v-if="isEmpty">
            <h1>What are we going to be inspired by today?</h1>
        </div>
        <div class="notes" v-if="!isEmpty">
            <div v-for="note in notestore.privateNotes" :key="note.id" class="note card"
                @click="notestore.choseNote(note.id)">
                <div class="card-body">
                    <h5 class="card-title" 
                    v-html="processedNotes.find(n => n.id === note.id)?.processedTitle"></h5>
                    <p class="card-text" 
                    v-html="processedNotes.find(n => n.id === note.id)?.processedBody"></p>
                </div>
            </div>
        </div>\
        <CreateNotesButton />
    </main>
    <NoteDialog />
</template>
<style scoped src="/src/assets/Styles/layouts/MyNotesLayout.css"></style>