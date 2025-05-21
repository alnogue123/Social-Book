import { defineStore } from "pinia";
import type { Domain } from "../../domain/entities/commentEntity";
import { container } from "../../di/container";
import type { AppCreateCommand } from "../commands/appCreate.command";
import { ref } from "vue";

export const useNotesStore = defineStore("notes", () => {
    const comments = ref<Domain[]>([]);

    async function getAllComments(): Promise<void> {
        const response = await container.getAllQuery.handler();
    
        if (!response.isSuccess || !response.data) {
            console.error("Error fetching notes:", response.message);
            return;
        }
        comments.value = response.data as Domain[];
    }
    
    async function createComment(note: AppCreateCommand) : Promise<void> {
        if (!note.userID || !note.noteID || note.description) {
            alert('All fields are required');
            return;
        }
        const response = await container.createCommand.handler(note);
        comments.value.unshift(response.data as Domain);
    }

    return {
        comments,
        getAllComments,
        createComment
    }
})