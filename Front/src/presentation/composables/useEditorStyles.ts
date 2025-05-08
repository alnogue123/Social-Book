import { nextTick, type Ref } from "vue";

export function useEditorStyles(titleEditor: Ref<HTMLElement | undefined>, editorRef: Ref<HTMLElement | undefined>) {
    function setStyles() {
        nextTick(() => {
            const toolBartitle = titleEditor.value?.querySelector<HTMLElement>('.ql-toolbar.ql-snow');
            const editorTitle = titleEditor.value?.querySelector<HTMLElement>('.ql-container.ql-snow');
            const toolBarContent = editorRef.value?.querySelector<HTMLElement>('.ql-toolbar.ql-snow');
            const editorContent = editorRef.value?.querySelector<HTMLElement>('.ql-container.ql-snow');

            if (!toolBartitle || !editorTitle || !toolBarContent || !editorContent) return;

            toolBartitle.classList.add('titleEditor');
            editorTitle.classList.add('titleEditor');
            toolBarContent.classList.add('contentEditor');
            editorContent.classList.add('contentEditor');
        });
    }
    return { setStyles };
}