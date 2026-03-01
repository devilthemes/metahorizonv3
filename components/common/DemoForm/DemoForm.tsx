"use client";

import { useForm } from "formbold-react";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import styles from "./DemoForm.module.scss";

export default function DemoForm() {
  const [state, handleSubmit] = useForm("35OVE");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.demoForm}>
      <h3 className={styles.formTitle}>Send Us a Message</h3>

      {state.succeeded && (
        <div className={styles.successMessage}>
          <CheckCircle size={20} />
          <p>
            Thank you! Your demo request has been sent successfully. We'll
            contact you soon to schedule your demo.
          </p>
        </div>
      )}
      {/* 
      {state.error && (
        <div className={styles.errorMessage}>
          <AlertCircle size={20} />
          <p>
            Oops! {state.error.message || "Something went wrong. Please try again or email us directly."}
          </p>
        </div>
      )} */}

      <form onSubmit={onFormSubmit} className={styles.form}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName" className={styles.label}>
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={styles.input}
              required
              disabled={state.submitting}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="lastName" className={styles.label}>
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={styles.input}
              required
              disabled={state.submitting}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
            disabled={state.submitting}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="subject" className={styles.label}>
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={styles.input}
            required
            disabled={state.submitting}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>
            Your message (optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={styles.textarea}
            rows={5}
            disabled={state.submitting}
          />
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={state.submitting}
        >
          {state.submitting ? "Sending..." : "Submit"}
          {!state.submitting && <Send size={18} />}
        </button>
      </form>
    </div>
  );
}
