<script setup lang="ts">
import Dialog from 'primevue/dialog';
import { UseNotesStore } from '../../../core/application/stores/NotesStores';
import { computed, onMounted, ref } from 'vue';
import { observeDarkModeDialog } from '../../composables/useDarkModeObserver';
import type { Comment } from '../../../Types/comment';

const notestore = UseNotesStore();
let id: number = 0;
const noteSelected = computed(() => notestore.noteSelected);
const visible = computed({
    get: () => notestore.visible,
    set: (val: boolean) => notestore.visible = val
});

onMounted(() => {
    observeDarkModeDialog();
})

const message = ref <string>('');

function createComment() {
    if (message.value.trim() === '') return;
    const comment: Comment = {
        idNote: noteSelected.value?.id,
        idComment: id++,
        user: 'john doe',
        content: message.value
    };
    notestore.createComment(comment);
    message.value = '';
}
</script>
<template>
    <Dialog class="dialog" v-model:visible="visible" modal header="Note" :style="{ width: '100rem' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <div class="container">
            <div class="note card">
                <div class="card-body">
                    <h5 class="card-title">{{ noteSelected?.title }}</h5>
                    <p class="card-text">{{ noteSelected?.body }}</p>
                </div>
            </div>
            <div class="comments card">
                <div class="headerComments">
                    <h4>Comments</h4>
                </div>
                <div class="containerCommentBox">
                    <div class="commentBox" v-for="comment in notestore.commentsBySelectedNote"
                        :key="comment.idComment">
                        <div class="userBox">{{ comment.user }}</div>
                        <div class="commentUser">{{ comment.content }}</div>
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
