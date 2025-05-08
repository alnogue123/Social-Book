import { defineStore } from "pinia";
import { socialBookService } from "../Services/SocialBookApiService";
import type { NoteDTO } from "../../../infrastructure/dto/NoteDto";
import { computed, ref } from "vue";
import type { Comment } from "../../../infrastructure/dto/CommentDto";
import type { CreateNoteDTO } from "../dto/createNoteDto";
import { useModalStore } from "./modalStore";

export const UseNotesStore = defineStore('notes', () => {
    const notes = ref<NoteDTO[]>([]); 
    const comments = ref<Comment[]>([]);
    const visible = ref<boolean>(false);
    const noteSelected = ref<NoteDTO | undefined>();
    const currentUserID: number = 1;
    const modalStore = useModalStore();

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

    function createComment(comment: Comment) {
        if (!comment) return;
        comments.value.push(comment);
    }

    // Cambia esta función para guardar el contenido HTML
    function createNote(note: CreateNoteDTO) {
        if (!note.title || !note.body) {
            alert('Title and body are required');
            return;
        }

        if (note.title.length > 100) {
            alert('Title must be less than 100 characters');
            return;
        }

        notes.value.unshift({
            id: notes.value.length + 1,
            userID: currentUserID,
            title: note.title, 
            body: note.body,
        });
        
        alert('Note created');
        modalStore.visible = false;
    }
    return { notes, comments, visible, noteSelected, commentsBySelectedNote, getAllNotes, choseNote, createComment, createNote };
});
