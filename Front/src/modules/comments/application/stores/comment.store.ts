import { defineStore } from "pinia";
import type { Domain } from "../../domain/entities/commentEntity";
import { container } from "../di/container";
import type { AppCreateCommand } from "../commands/appCreate.command";
import { ref } from "vue";

export const useCommentStore = defineStore("comments", () => {
    const comments = ref<Domain[]>([]);

    async function getAllComments(): Promise<void> {
        const response = await container.getAllQuery.handler();
    
        if (!response.isSuccess || !response.data) {
            console.error("Error fetching notes:", response.message);
            return;
        }
        comments.value = response.data as Domain[];
    }
    
    async function createComment(comment: AppCreateCommand) : Promise<void> {
        if (!comment.description) {
            return;
        }
        const response = await container.createCommand.handler(comment);
        comments.value.unshift(response.data as Domain);
    }

    return {
        comments,
        getAllComments,
        createComment
    }
})