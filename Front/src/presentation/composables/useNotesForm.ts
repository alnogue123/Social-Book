import { ref } from 'vue';
import { UseNotesStore } from '../../core/application/stores/NotesStores';
import { useModalStore } from '../../core/application/stores/modalStore';

export function useNotesForm() {
    const NotesStores = UseNotesStore();
    const modalStore = useModalStore();
    
    const note = ref({
        title: '',
        content: '',
    });

    function createNote() {
        try {
            const titleContent = note.value.title;
            const bodyContent = note.value.content;

            NotesStores.createNote({
                title: titleContent,
                body: bodyContent
            }); 

            resetForm();
        } catch (error) {
            console.error('Error al crear nota:', error);
        }
    }

    function resetForm() {
        note.value.title = '';
        note.value.content = '';
    }

    function closeModal() {
        modalStore.visible = false;
        resetForm();
    }

    return {
        note,
        createNote,
        closeModal,
        resetForm
    };
}