import  axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";
import type { Domain } from "../../domain/entities/NoteEntity";
import type { ICrudPort } from "../../domain/ports/note.port";
import { ApiError } from "../../application/Errors/ApiError";

export class NoteAdapter implements ICrudPort {
    private readonly url: string = import.meta.env.VITE_APi_URL;
    private readonly config: AxiosRequestConfig = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    };

    async getAll(): Promise<Domain[]> {
        try {
            const response: AxiosResponse<Domain[], unknown> = await axios.get(this.url, this.config);
            return response.data;
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                throw new ApiError(
                    error.message,
                    error.response?.status ?? 500,
                    error.cause,
                );
            }
            throw new ApiError("Error inesperado", 500, error);
        }
    }

    async getById(id: number): Promise<Domain> {
        try {
            const response: AxiosResponse<Domain, unknown> = await axios.get(`${this.url}/${id}`, this.config);
            return response.data;
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                throw new ApiError(
                    "Error al obtener la notas",
                    error.response?.status ?? 500,
                    error
                );
            }
            throw new ApiError("Error inesperado", 500, error);
        }
    }

    async getByUserId(user: string): Promise<Domain[]> {
        try {
            const response: AxiosResponse<Domain[], unknown> = await axios.get(`${this.url}?user=${user}`, this.config);
            return response.data.map((note) => note);
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                throw new ApiError(
                    "Error al obtener las notas",
                    error.response?.status ?? 500,
                    error
                );
            }
            throw new ApiError("Error inesperado", 500, error);
        }
    }
    async create(note: Domain): Promise<Domain> {
        try {
            const response: AxiosResponse<Domain, unknown> = 
            await axios.post(this.url,note, this.config);
            return response.data;
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                throw new ApiError(
                    "Error al crear la nota",
                    error.response?.status ?? 500,
                    error
                );
            }
            throw new ApiError("Error inesperado", 500, error);
        }
    }
    
    async update(note: Domain): Promise<Domain> {
        try {
            const response: AxiosResponse<Domain, unknown> = await axios.patch(`${this.url}/${note.id}`, note, this.config);
            return response.data;
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                throw new ApiError(
                    "Error al actualizar la nota",
                    error.response?.status ?? 500,
                    error
                );
            }
            throw new ApiError("Error inesperado", 500, error);
        }
    }
    async delete(id: number): Promise<Domain> {
        try {
            const response: AxiosResponse<Domain, unknown> = await axios.delete(`${this.url}/${id}`, this.config);
            return response.data;
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                throw new ApiError(
                    "Error al eliminar la nota",
                    error.response?.status ?? 500,
                    error
                );
            }
            throw new ApiError("Error inesperado", 500, error);
        }
    }
}
