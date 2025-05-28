/// <reference types="vite/client" />

declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, unknown>;
    export default component;
}

declare module 'https://animatedicons.co/scripts/embed-animated-icons.js';

interface ImportMetaEnv {
    readonly VITE_APi_TOKEN: string;
    readonly VITE_APi_URL: string;
    readonly VITE_APi_URL_POKEMON: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}