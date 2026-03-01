"use client";

import { useEffect } from "react";

const TAWK_PROPERTY_ID = "601d68a1a9a34e36b974377f";
const TAWK_SCRIPT_URL = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/default`;

interface TawkAPI {
  setAttributes?: (
    attrs: Record<string, string>,
    callback?: (error?: Error) => void
  ) => void;
  onLoad?: () => void;
  [key: string]: any;
}

declare global {
  interface Window {
    Tawk_API?: TawkAPI;
    Tawk_LoadStart?: Date;
  }
}

export default function TawkTo() {
  useEffect(() => {
    // Initialize TawkTo API
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Load TawkTo script immediately
    const script = document.createElement("script");
    script.async = true;
    script.src = TAWK_SCRIPT_URL;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    const firstScript = document.getElementsByTagName("script")[0];
    firstScript?.parentNode?.insertBefore(script, firstScript);

    // Set visitor attributes when loaded
    window.Tawk_API.onLoad = () => {
      window.Tawk_API?.setAttributes?.(
        {
          name: "Website Visitor",
        },
        (_error?: Error) => {}
      );
    };

    return () => {
      // Cleanup - remove script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}
