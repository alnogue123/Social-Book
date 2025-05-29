import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Domain } from "../../domain/entities/NoteEntity";
import { container } from "../di/container";
import type { AppCreateCommand } from "../commands/appCreate.command";
import { useModalStore } from "../../../../stores/modalStore";
import { convertirDeltaDeStringAHtml } from "../../../../common/composables/useReadDeltaObserver";


export const useNotesStore = defineStore("notes", () => {
    const notes = ref<Domain[]>([]);
    const noteSelected = ref<Domain>();
    const noteVisible = ref<boolean>(false);
    const modalStore = useModalStore();

    async function getAllNotes(): Promise<void> {
        const response = await container.getAllQuery.handler();
        if (!response.isSuccess || !response.data) {
            console.error("Error fetching notes:", response.message);
            return ;
        }
        notes.value = response.data as Domain[];
    }

    function choseNote(note : Domain): void {
        if (note) {
            noteSelected.value = note;
            noteVisible.value = true;
        }
    }

    async function createNote(note: AppCreateCommand) : Promise<void> {
        if (!note.title || !note.body || note.isPublic === undefined) {
            alert('All fields are required');
            return;
        }
        const response = await container.createCommand.handler(note);
        notes.value.unshift(response.data as Domain);
        modalStore.visible = false;
    }

    const publicNotes = computed(() =>
        notes.value.filter(note => note.isPublic)
    );

    const privateNotes = computed(() =>
        notes.value.filter(note => !note.isPublic)
    );

    function processNotes(note: Domain) : Domain{
        return {
            ...note,
            title: convertirDeltaDeStringAHtml(note.title) || note.title,
            body: convertirDeltaDeStringAHtml(note.body) || note.body
        }
    }

    return {
        notes,
        noteSelected,
        noteVisible,
        publicNotes,
        privateNotes,
        getAllNotes,
        choseNote,
        createNote,
        processNotes
    };
});
