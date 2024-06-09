/// <reference types="vite/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL_PROD: string;
  readonly VITE_BASE_URL_DEV: string;
  // add other environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
