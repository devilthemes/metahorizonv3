"use client";

import { useForm } from "formbold-react";
import { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import styles from "./ContactForm.module.scss";

interface ContactLocation {
  company: string;
  address?: string;
  email?: string;
  phone?: string;
}

const contactLocations: ContactLocation[] = [
  {
    company: "Metahorizon Inc.",
    address: "1303 W Walnut Hill, Suite 340 Irving, Texas 75038",
    email: "contact@metahorizon.com",
    phone: "+1 (469) 496-9588",
  },
  {
    company: "Metahorizon Solutions Pvt. Ltd",
    address: "Sidh Vihar, Nehrugram, Dehradun Uttarakhand, India, 248010",
  },
  {
    company: "Metahorizon Information & Technology College Pvt. Ltd.",
    address: "New Baneshwor, Kathmandu, Nepal",
    email: "info@metahorizon.edu.np",
    phone: "+977-9851344501",
  },
];

export default function ContactForm() {
  const [state, handleSubmit] = useForm("35OVE");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitting...", formData);
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
  console.log(state.error);
  return (
    <div className={styles.contactForm}>
      <h3 className={styles.formTitle}>Send Us a Message</h3>

      {state.succeeded && (
        <div className={styles.successMessage}>
          <CheckCircle size={20} />
          <p>
            Thank you! Your message has been sent successfully. We'll get back
            to you soon.
          </p>
        </div>
      )}

      {/* {state.error && (
        <div className={styles.errorMessage}>
          <AlertCircle size={20} />
          <p>
            Oops!{" "}
            {state.error.message ||
              "Something went wrong. Please try again or email us directly."}
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
