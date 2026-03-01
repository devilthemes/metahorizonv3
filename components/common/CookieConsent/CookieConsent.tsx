'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './CookieConsent.module.scss';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

interface CookieConsentProps {
  onAccept?: (preferences: CookiePreferences) => void;
  onReject?: () => void;
}

const CONSENT_KEY = 'metahorizon_cookie_consent';
const CONSENT_VERSION = '1.0';

const DEFAULT_PREFERENCES: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
  functional: false,
};

const COOKIE_TYPES = [
  { key: 'essential' as const, name: 'Essential Cookies', required: true, description: 'These cookies are necessary for the website to function properly. They enable basic functions like page navigation, secure access, and form submission.' },
  { key: 'analytics' as const, name: 'Analytics Cookies', required: false, description: 'These cookies help us understand how visitors interact with our website by collecting anonymous information. This includes Google Analytics for traffic analysis.' },
  { key: 'functional' as const, name: 'Functional Cookies', required: false, description: 'These cookies remember your choices and preferences (such as language, region, or login information) to provide enhanced, personalized features.' },
  { key: 'marketing' as const, name: 'Marketing Cookies', required: false, description: 'These cookies track your browsing activity to deliver advertisements that are relevant to you and limit the number of times you see an advertisement.' },
] as const;

export default function CookieConsent({ onAccept, onReject }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);

  const saveConsent = useCallback((prefs: CookiePreferences) => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      preferences: prefs,
    }));
  }, []);

  const handleAcceptAll = useCallback(() => {
    const allEnabled = { ...DEFAULT_PREFERENCES, analytics: true, marketing: true, functional: true };
    saveConsent(allEnabled);
    onAccept?.(allEnabled);
    setIsVisible(false);
  }, [saveConsent, onAccept]);

  const handleRejectAll = useCallback(() => {
    saveConsent(DEFAULT_PREFERENCES);
    onReject?.();
    setIsVisible(false);
  }, [saveConsent, onReject]);

  const handleSavePreferences = useCallback(() => {
    saveConsent(preferences);
    onAccept?.(preferences);
    setIsVisible(false);
    setShowPreferences(false);
  }, [saveConsent, preferences, onAccept]);

  const togglePreference = useCallback((key: keyof CookiePreferences) => {
    if (key === 'essential') return;
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  }, []);

  useEffect(() => {
    const storedConsent = localStorage.getItem(CONSENT_KEY);

    if (!storedConsent) {
      // Delay showing cookie consent to not block initial page load
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }

    try {
      const parsed = JSON.parse(storedConsent);
      // Only trigger analytics after user interaction
      if (parsed.analytics) {
        requestIdleCallback(() => onAccept?.(parsed), { timeout: 3000 });
      }
    } catch {
      setIsVisible(true);
    }

    return () => {};
  }, [onAccept]);

  if (!isVisible) return null;

  return (
    <div className={styles.container}>
      {!showPreferences ? (
        <div className={styles.banner}>
          <div className={styles.content}>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <div className={styles.text}>
              <h3 className={styles.title}>We Value Your Privacy</h3>
              <p className={styles.description}>
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                By clicking "Accept All", you consent to our use of cookies. 
                You can also customize your preferences or learn more in our{' '}
                <a href="/cookie-policy" target="_blank" rel="noopener noreferrer">Cookie Policy</a>.
              </p>
            </div>
          </div>
          <div className={styles.actions}>
            <button className={styles.preferencesBtn} onClick={() => setShowPreferences(true)}>Manage Preferences</button>
            <button className={styles.rejectBtn} onClick={handleRejectAll}>Reject All</button>
            <button className={styles.acceptBtn} onClick={handleAcceptAll}>Accept All</button>
          </div>
        </div>
      ) : (
        <div className={styles.preferences}>
          <div className={styles.preferencesHeader}>
            <h3 className={styles.preferencesTitle}>Cookie Preferences</h3>
            <button className={styles.closeBtn} onClick={() => setShowPreferences(false)} aria-label="Close preferences">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
          <div className={styles.preferencesContent}>
            <p className={styles.preferencesDescription}>Customize your cookie preferences. You can enable or disable different types of cookies based on your preferences.</p>
            <div className={styles.cookieTypes}>
              {COOKIE_TYPES.map(({ key, name, required, description }) => (
                <div key={key} className={styles.cookieType}>
                  <div className={styles.cookieTypeInfo}>
                    <h4 className={styles.cookieTypeName}>{name}{required && <span className={styles.required}>Required</span>}</h4>
                    <p className={styles.cookieTypeDescription}>{description}</p>
                  </div>
                  <label className={`${styles.toggle} ${required ? styles.disabled : ''}`}>
                    <input type="checkbox" checked={key === 'essential' || preferences[key]} disabled={required} onChange={() => togglePreference(key)} />
                    <span className={styles.slider}></span>
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.preferencesActions}>
            <button className={styles.saveBtn} onClick={handleSavePreferences}>Save Preferences</button>
          </div>
        </div>
      )}
    </div>
  );
}
