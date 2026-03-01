// Google reCAPTCHA v2 TypeScript Definitions
// Shared across all components that use reCAPTCHA

export {};

declare global {
  interface Window {
    grecaptcha?: {
      render: (
        id: string | HTMLElement,
        config: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: (err: any) => void;
          "chalexpired-callback"?: () => void;
          "close-callback"?: () => void;
        }
      ) => string;
      reset: (widgetId?: string) => void;
      getResponse: (widgetId: string) => string;
      remove: (widgetId: string) => void;
    };
    onRecaptchaLoaded?: () => void;
  }
}
