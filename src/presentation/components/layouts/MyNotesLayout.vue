<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import NoteDialog from '../ui/NoteDialog.vue';
import CreateNotesButton from '../ui/CreateNotesButton.vue';
import { useNotesStore } from '../../../modules/Notes/application/stores/Notestore';
import type { Note } from '../../dto/NoteDto';

const notestore = useNotesStore();
const loading = ref(true);
const isEmpty = computed(() => !loading.value && notestore.privateNotes.length === 0);
const privateNotes = ref<Note[]>([]);

onMounted(async () => {
    await notestore.getAllNotes();
    privateNotes.value = notestore.privateNotes;
})
</script>
<template>
    <main class="container">
        <div class="emptynotes" v-if="isEmpty">
            <h1>What are we going to be inspired by today?</h1>
        </div>
        <div class="notes" v-if="!isEmpty">
            <div v-for="note in privateNotes" :key="note.id" class="note card"
                @click="notestore.choseNote(note)">
                <div class="card-body">
                    <h5 class="card-title" v-html="notestore.processNotes(note).title"></h5>
                    <p class="card-text" v-html="notestore.processNotes(note).body"></p>
                </div>
            </div>
        </div>
        <CreateNotesButton />
    </main>
    <NoteDialog />
</template>
<style scoped src="/src/assets/Styles/layouts/MyNotesLayout.css"></style>