/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_API_KEY: 'AIzaSyBwpJJZ8Gt0DO0kvL5FujtZaI85iB-oNnQ'
  readonly VITE_AUTH_DOMAIN: 'buxuptechnology.firebaseapp.com'
  readonly VITE_DATABASE_URL: 'https://buxuptechnology-default-rtdb.firebaseio.com'
  readonly VITE_PROJECT_ID: 'buxuptechnology'
  readonly VITE_STORAGE_BUCKET: 'buxuptechnology.appspot.com'
  readonly VITE_MESSAGING_SENDER_ID: '755792078362'
  readonly VITE_APP_ID: '1:755792078362:web:76669ae66299779dfb93a3'
  readonly VITE_MEASUREMENT_ID: 'G-8N11Y2SCW9'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
