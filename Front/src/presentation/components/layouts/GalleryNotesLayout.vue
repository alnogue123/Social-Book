<script setup lang="ts">
import { UseNotesStore } from '../../../core/application/stores/NotesStores';
import NoteDialog from '../ui/NoteDialog.vue';
import CreateNotesButton from '../ui/CreateNotesButton.vue';
import tag from '../../../assets/images/bookmark.svg';
import { onMounted } from 'vue';
const notestore = UseNotesStore();

onMounted(() =>{
    notestore.getAllNotes();
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
            <div class="note card" v-for="note in notestore.notes" :key="note.id" @click="notestore.choseNote(note.id)">
                <div class="card-body">
                    <h5 class="card-title">{{ note.title }}</h5>
                    <p class="card-text">
                        {{ note.body }}
                    </p>
                </div>
            </div>
            <CreateNotesButton />
        </div>
    </main>
    <NoteDialog />
</template>
<style scoped src="/src/assets/Styles/layouts/GalleryNotes.css"></style>