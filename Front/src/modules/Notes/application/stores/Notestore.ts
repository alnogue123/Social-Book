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

    async function getAllNotes(): Promise<void> {
        const response = await container.getAllQuery.handler();
        if (!response.isSuccess || !response.data) {
            console.error("Error fetching notes:", response.message);
            return;
        }
        notes.value = response.data as Domain[];
    }

    function choseNote(idNote: number): void {
        const found = notes.value.find(note => note.id === idNote);
        console.log(found, idNote);
        if (found) {
            noteSelected.value = found as Domain;
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

    return {
        notes,
        noteSelected,
        noteVisible,
        publicNotes,
        privateNotes,
        titleHTML,
        bodyHTML,
        getAllNotes,
        choseNote,
        createNote
    };
});
