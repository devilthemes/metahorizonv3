/**
 * Cookie Consent Utilities
 * 
 * Helper functions for managing cookie consent and integrating with analytics services
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: any;
  }
}

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const CONSENT_KEY = 'metahorizon_cookie_consent';

/**
 * Get stored cookie consent preferences
 */
export function getCookieConsent(): CookiePreferences | null {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;
    
    const parsed = JSON.parse(stored);
    return parsed.preferences;
  } catch (e) {
    return null;
  }
}

/**
 * Check if analytics cookies are enabled
 */
export function isAnalyticsEnabled(): boolean {
  const consent = getCookieConsent();
  return consent?.analytics === true;
}

/**
 * Check if marketing cookies are enabled
 */
export function isMarketingEnabled(): boolean {
  const consent = getCookieConsent();
  return consent?.marketing === true;
}

/**
 * Check if functional cookies are enabled
 */
export function isFunctionalEnabled(): boolean {
  const consent = getCookieConsent();
  return consent?.functional === true;
}

/**
 * Initialize Google Analytics (call this after user consents)
 * Replace 'G-XXXXXXXXXX' with your actual GA4 Measurement ID
 */
export function initializeGoogleAnalytics(measurementId: string = 'G-XXXXXXXXXX') {
  if (!isAnalyticsEnabled()) {
    console.log('[Cookie Consent] Analytics not enabled, skipping GA initialization');
    return;
  }

  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Configure gtag
  window.dataLayer = window.dataLayer || [];
  const dataLayer = window.dataLayer;
  
  function gtag(...args: any[]) {
    dataLayer.push(args);
  }
  (window as any).gtag = gtag;

  gtag('js', new Date());
  gtag('config', measurementId, {
    anonymize_ip: true,
  });

  console.log('[Cookie Consent] Google Analytics initialized');
}

/**
 * Revoke cookie consent (for settings page)
 */
export function revokeCookieConsent() {
  localStorage.removeItem(CONSENT_KEY);
  // Reload page to show consent banner again
  window.location.reload();
}

/**
 * Open cookie preferences (for settings page)
 * Dispatches custom event that CookieConsent component listens for
 */
export function openCookiePreferences() {
  window.dispatchEvent(new CustomEvent('open-cookie-preferences'));
}
