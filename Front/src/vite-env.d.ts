/// <reference types="vite/client" />

declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, unknown>;
    export default component;
}

declare module 'https://animatedicons.co/scripts/embed-animated-icons.js';

interface ImportMetaEnv {
    readonly VITE_APY_TOKEN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}