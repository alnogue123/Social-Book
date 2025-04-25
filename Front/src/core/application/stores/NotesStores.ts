import { defineStore } from "pinia";
import { socialBookService } from "../Services/SocialBookApiService";
import type { NoteDTO } from "../../../infrastructure/dto/NoteDto";
import { computed, ref } from "vue";
import type { Comment } from "../../../infrastructure/dto/CommentDto";

export const UseNotesStore = defineStore('notes', () => {
    const notes = ref<NoteDTO[]>([]);
    const comments = ref<Comment[]>([]);
    const visible = ref<boolean>(false);
    const noteSelected = ref<NoteDTO | undefined>();

    async function getAllNotes(): Promise<NoteDTO[]> {
        const response = await socialBookService.getNotes();
        notes.value = response;
        return response;
    }

    const commentsBySelectedNote = computed(() => {
        return comments.value.filter(comment => comment.idNote === noteSelected.value?.id);
    });

    function choseNote(idNote: number): void {
        const found = notes.value.find(note => note.id === idNote);
        if (found) {
            noteSelected.value = found;
            visible.value = true;
        }
    }

    function createComment(comment : Comment) {
        if (!comment) return;
        comments.value.push(comment);
    }

    return { notes, comments, visible, noteSelected, commentsBySelectedNote, getAllNotes, choseNote, createComment };
}, { persist: true });
