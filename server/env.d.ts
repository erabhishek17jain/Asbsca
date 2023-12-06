declare global {
    namespace NodeJS {
      interface ProcessEnv {
        JWT_SECRET: string;
        EMAIL: string;
        PASSWORD: string;
        ATLAS_URI: string;
        CLIENT_ID: string;
        CLIENT_SECRET: string;
        EMAIL_USER: string;
        EMAIL_PASS: string;
        ADMIN_ROLE_ID: string;
        CLIENT_URL: string;
      }
    }
  }
  
  export {};