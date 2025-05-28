import Quill from 'quill';
import { type Ref, nextTick } from 'vue';
import Delta from 'quill-delta';


interface Note {
    title: string | Delta;
    body: string | Delta;
}

export function useReadDeltaEditor(
    titleEditorRef: Ref<HTMLElement | undefined>,
    bodyEditorRef: Ref<HTMLElement | undefined>,
    note: Note | undefined
) {
    let quillTitle: Quill | null = null;
    let quillBody: Quill | null = null;

    const initializeEditor = (element: HTMLElement): Quill => {
        return new Quill(element, {
            readOnly: true,
            theme: 'snow',
            modules: {
                toolbar: false,
            },
        });
    };

    const parseContent = (content: string | Delta | undefined): Delta => {
        if (typeof content === 'string') {
            try {
                return new Delta(JSON.parse(content));
            } catch {
                return new Delta([{ insert: content }]);
            }
        }
        return new Delta(content?.ops);
    };

    const readDelta = async () => {
        await nextTick();

        if (!titleEditorRef.value || !bodyEditorRef.value) {
            console.warn('Los elementos del editor aún no están disponibles.');
            return;
        }

        quillTitle ??= initializeEditor(titleEditorRef.value);
        quillBody ??= initializeEditor(bodyEditorRef.value);

        try {
            const titleDelta = parseContent(note?.title);
            const bodyDelta = parseContent(note?.body);

            quillTitle.setContents(titleDelta);
            quillBody.setContents(bodyDelta);
        } catch (error) {
            console.error('Error al procesar el contenido de la nota:', error);
        }
    };

    return { readDelta };
}

