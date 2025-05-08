import { ref, type Ref } from 'vue';
import type { ToolbarStructure } from '../../Types/ToolbarTypes';

export function useQuillConfig() {
    const toolbarConfig: Ref<ToolbarStructure> = ref([
        [
            { size: ['small', false, 'large', 'huge'] },
            { font: ['serif', 'sans-serif', 'monospace'] },
            { color: ["red", "blue", "green", "purple", "orange", "yellow", "black", "#f06", "#9c27b0", "#3f51b5", "#03a9f4", "#009688", "#8bc34a", "#ff9800"] },
            { background: ["red", "blue", "green", "white", "", "purple", "orange", "yellow", "black", "#f06", "#9c27b0", "#3f51b5", "#03a9f4", "#009688", "#8bc34a", "#ff9800"] },
            { script: ['sub', 'super'] },
            { list: 'bullet' },
            { list: 'ordered' },
            'bold',
            'italic',
            'underline',
            'strike',
            'blockquote',
            'code-block',
            { indent: ['-1', '+1'] },
            { align: ['', 'center', 'right', 'justify'] },
            'link',
            'image',
            'clean'
        ]
    ]);

    return {
        toolbarConfig
    };
}