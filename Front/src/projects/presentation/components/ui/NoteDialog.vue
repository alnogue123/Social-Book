<script setup lang="ts">
import Dialog from 'primevue/dialog';
import { computed, onMounted, ref } from 'vue';
import { observeDarkModeDialog } from '../../composables/useDarkModeObserver';
import type { Comment } from '../../../../Types/comment';
import { useNotesStore } from '../../../Notes/application/stores/Notestore';
import { convertirDeltaDeStringAHtml } from '../../composables/useReadDeltaObserver';

const notestore = useNotesStore();

let id: number = 0;
const noteSelected = computed(() => notestore.noteSelected);
const visible = computed({
    get: () => notestore.noteVisible,
    set: (val: boolean) => notestore.noteVisible = val
});

const titleHTML = computed(() => {
    if (!noteSelected.value?.title) return '';
    const convertedTitle = convertirDeltaDeStringAHtml(noteSelected.value.title);
    return convertedTitle || noteSelected.value.title;
});

const bodyHTML = computed(() => {
    if (!noteSelected.value?.body) return '';
    const convertedBody = convertirDeltaDeStringAHtml(noteSelected.value.body);
    return convertedBody || noteSelected.value.body;
});

const titleEditor = ref<HTMLElement>();
const contentEditor = ref<HTMLElement>();

onMounted(async () => {
    observeDarkModeDialog();
});

const message = ref<string>('');

function createComment() {
    if (message.value.trim() === '') return;
    const comment: Comment = {
        idNote: noteSelected.value?.id,
        idComment: id++,
        user: 'john doe',
        content: message.value
    }
    console.log(comment);
    message.value = '';
}

</script>
<template>
    <Dialog class="dialog" v-model:visible="visible" modal header="Note" :style="{ width: '100rem' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <div class="container">
            <div class="note card">
                <div class="card-body">
                    <div ref="titleEditor" class="card-title quill-editor" v-html="titleHTML"></div>
                    <div ref="contentEditor" class="card-text quill-editor" v-html="bodyHTML"></div>
                </div>
            </div>
            <div class="comments card">
                <div class="headerComments">
                    <h4>Comments</h4>
                </div>
                <div class="containerCommentBox">
                    <div class="commentBox">
                        <div class="userBox">{{ }}</div>
                        <div class="commentUser">{{ }}</div>
                    </div>
                </div>
                <div class="commentInputContainer">
                    <div class="messageBox">
                        <textarea placeholder="type a comment" type="text" id="messageInput" v-model="message" />
                        <button id="sendButton" @click="createComment()">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 664 663">
                                <path fill="none"
                                    d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888">
                                </path>
                                <path stroke-linejoin="round" stroke-linecap="round" stroke-width="33.67"
                                    stroke="#6c6c6c"
                                    d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Dialog>
</template>
<style scoped src="/src/assets/Styles/Components/NoteDialog.css"></style>
