declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOOGLE_SHEET_ID: string;
      GOOGLE_PROJECT_ID: string;
      GOOGLE_PRIVATE_KEY_ID: string;
      GOOGLE_PRIVATE_KEY: string;
      GOOGLE_CLIENT_EMAIL: string;
      GOOGLE_CLIENT_ID: string;
      GOOGLE_AUTH_URI: string;
      GOOGLE_TOKEN_URI: string;
      GOOGLE_AUTH_PROVIDER_X509_CERT_URL: string;
      GOOGLE_CLIENT_X509_CERT_URL: string;
      GOOGLE_UNIVERSE_DOMAIN: string;
    }
  }
} 
 
 
 