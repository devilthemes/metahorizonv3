# FormBold + reCAPTCHA Setup Guide

## Overview

Forms on `/contact-us/` and `/request-demo/` now use **FormBold** for form submission with **Google reCAPTCHA v2** for spam protection.

---

## Setup Steps

### 1. Create Forms in FormBold

1. Go to [FormBold Dashboard](https://formbold.com/dashboard)
2. Login/Signup
3. Click **"Create Form"**
4. Create two forms:
   - **Contact Form** (for `/contact-us/`)
   - **Demo Request Form** (for `/request-demo/`)

### 2. Get Your Form IDs

After creating each form:
1. Click on the form in your dashboard
2. Go to **"Form Settings"** → **"Integrate"**
3. Copy the **Form endpoint URL** (looks like: `https://formbold.com/s/your_form_id`)
4. Extract the **Form ID** from the URL (the part after `/s/`)

You need two Form IDs:
- `CONTACT_FORM_ID` - for contact form
- `DEMO_FORM_ID` - for demo request form

### 3. Configure reCAPTCHA in FormBold

1. In FormBold dashboard, go to your form settings
2. Navigate to **"Spam Protection"**
3. Toggle on **"Custom reCAPTCHA"**
4. Enter your reCAPTCHA keys:
   - **Site Key**: `6LfCGHwsAAAAAJMuqutnQt_NOJE_U7AYJfBcJeqU`
   - **Secret Key**: (Get from [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin))

### 4. Update Form IDs in Code

#### Contact Form
Edit: `components/common/ContactForm/ContactForm.tsx`

```typescript
// Line ~67: Replace with your actual FormBold Form ID
const FORMBOLD_FORM_ID = "YOUR_CONTACT_FORM_ID";
```

#### Demo Form
Edit: `components/common/DemoForm/DemoForm.tsx`

```typescript
// Line ~42: Replace with your actual FormBold Form ID
const FORMBOLD_FORM_ID = "YOUR_DEMO_FORM_ID";
```

### 5. Build and Deploy

```bash
npm run build
# Upload the 'out' folder to your hosting
```

---

## API Endpoint Format

FormBold uses this endpoint format:
```
https://api.formbold.com/submit/{FORM_ID}
```

---

## Form Fields

Both forms submit the following fields to FormBold:

| Field | Type | Required |
|-------|------|----------|
| firstName | string | Yes |
| lastName | string | Yes |
| email | string | Yes |
| subject | string | Yes |
| message | string | No |
| g-recaptcha-response | string | Yes (auto) |

---

## Testing

1. Open your deployed site
2. Navigate to `/contact-us/` or `/request-demo/`
3. Complete the reCAPTCHA ("I'm not a robot")
4. Fill out the form and submit
5. Check your FormBold dashboard for submissions
6. You should also receive email notifications (configured in FormBold)

---

## Troubleshooting

### Form submission fails
- Verify Form ID is correct
- Check browser console for errors
- Ensure reCAPTCHA is completed before submitting

### reCAPTCHA not showing
- Check if site key is correct: `6LfCGHwsAAAAAJMuqutnQt_NOJE_U7AYJfBcJeqU`
- Verify reCAPTCHA is enabled in FormBold settings
- Check browser console for loading errors

### Spam still getting through
- Enable "Automatic reCAPTCHA" in FormBold in addition to Custom
- Configure email notifications in FormBold dashboard

---

## Configuration Summary

| Setting | Value |
|---------|-------|
| reCAPTCHA Site Key | `6LfCGHwsAAAAAJMuqutnQt_NOJE_U7AYJfBcJeqU` |
| reCAPTCHA Version | v2 (Checkbox) |
| Form Endpoint | `https://api.formbold.com/submit/{FORM_ID}` |
| Method | POST |
| Content-Type | application/json |

---

## Links

- [FormBold Dashboard](https://formbold.com/dashboard)
- [FormBold Docs](https://formbold.com/docs)
- [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
- [FormBold Spam Protection](https://formbold.com/docs/spam)
