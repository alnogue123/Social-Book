<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { Dialog, Button } from 'primevue';
import { QuillEditor } from '@vueup/vue-quill';
import { useEditorStyles } from '../../composables/useEditorStyles';
import { useModalStore } from '../../../stores/modalStore';
import { useQuillConfig } from '../../composables/useQuillConfig';
import { observeDarkModeDialog } from '../../composables/useDarkModeObserver';
import { useNotesStore } from '../../../modules/Notes/application/stores/Notestore';

const notestore = useNotesStore();
const modalStore = useModalStore();
const { toolbarConfig } = useQuillConfig();
const titleEditor = ref<HTMLElement>();
const editorRef = ref<HTMLElement>();
const { setStyles } = useEditorStyles(titleEditor, editorRef);

const note = {
    userID: -1,
    title: '',
    body: '',
    isPublic: false
}

function createNote() {
    notestore.createNote(note);
    note.title = '';
    note.body = '';
}

function closeDialog() {
    modalStore.closeModal();
}

onMounted(() => {
    observeDarkModeDialog();
})
</script>

<template>
    <Dialog class="dialog" v-model:visible="modalStore.visible" modal header="Create Note" :style="{ width: '80rem' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }" @show="setStyles">
        <template #header class="headerModal">
            <div class="custom-header">
                <h2>Create Note</h2>
            </div>
        </template>
        <div class="GeneralContainer">
            <div class="titleInputContainer" ref="titleEditor">
                <QuillEditor theme="snow" :toolbar="toolbarConfig" v-model:content="note.title"
                    placeholder="  Escribe el título de tu nota aquí..." />
            </div>
            <div class="contentInputContainer" ref="editorRef">
                <QuillEditor theme="snow" class="contentEditor" :toolbar="toolbarConfig" 
                v-model:content="note.body" placeholder="  Escribe el contenido de tu nota aquí..." />
            </div>
        </div>
        <template #footer>
            <select name="visibility" id="Cbvisibility" v-model="note.isPublic">
                <option :value="false" selected>Private</option>
                <option :value="true">Public</option>
            </select>
            <Button label="Post" icon="pi pi-check" @click="createNote()" />
            <Button label="Cancel" icon="pi pi-times" class="p-button-secondary" @click="closeDialog()" />
        </template>
    </Dialog>
</template>
<style scoped src="/src/assets/Styles/Components/CreateNotesDialog.css"></style>