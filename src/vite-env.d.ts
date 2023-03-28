/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_API_URL_KEY: string
    // more env variables...
  }
  
  interface ImportMeta {
     env: ImportMetaEnv
  }