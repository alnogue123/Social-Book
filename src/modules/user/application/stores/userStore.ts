import { defineStore } from "pinia";
import { ref } from "vue";
import type { Domain } from "../../domain/entities/UserEntity";
import { container } from "../di/container";
import type { AppCreateCommand } from "../commands/create/appCreate.command";


export const useUserStore = defineStore("notes", () => {
    const users = ref<Domain[]>([]);

    async function getAllUsers(): Promise<void> {
        const response = await container.getAllQuery.handler();
    
        if (!response.isSuccess || !response.data) {
            console.error("error fetching users", response.message);
            return;
        }
        users.value = response.data as Domain[];
    }

    async function loginUser(user: Domain) : Promise<boolean> {
        const response = await container.GetByQuery.handler(user);
        if (!response.isSuccess ||!response.data) {
            console.error("error fetching user", response.message);
            return false;
        }
        return true;
    }


    async function createUser(user: AppCreateCommand) : Promise<void> {
        if (!user.username || !user.password){
            alert('Debe ingresar un usuario y contraseña');
            return;
        }
        const response = await container.createCommand.handler(user);
        users.value.unshift(response.data as Domain);
    }

    return {
        users,
        getAllUsers,
        loginUser,
        createUser
    }
})