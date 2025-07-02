import React, { useState } from "react";
import styles from "./styles/ContactForm.module.css";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className={styles.contactFormContainer}>
      <form
        className={styles.formContainer}
        onSubmit={handleSubmit}
        noValidate
        aria-label="Contact form"
      >
        <div className={styles.inputGroup}>
          <div className={styles.inputWrapper}>
            <label htmlFor="name" className={styles.visuallyHidden}>
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`${styles.input} ${errors.name ? styles.error : ""}`}
              placeholder="Your Name *"
              required
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "nameError" : undefined}
            />
            {errors.name && (
              <span id="nameError" className={styles.errorMessage} role="alert">
                {errors.name}
              </span>
            )}
          </div>

          <div className={styles.inputWrapper}>
            <label htmlFor="email" className={styles.visuallyHidden}>
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`${styles.input} ${errors.email ? styles.error : ""}`}
              placeholder="Your Email *"
              required
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "emailError" : undefined}
            />
            {errors.email && (
              <span id="emailError" className={styles.errorMessage} role="alert">
                {errors.email}
              </span>
            )}
          </div>

          <div className={styles.inputWrapper}>
            <label htmlFor="phone" className={styles.visuallyHidden}>
              Your Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`${styles.input} ${errors.phone ? styles.error : ""}`}
              placeholder="Your Phone *"
              required
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phoneError" : undefined}
            />
            {errors.phone && (
              <span id="phoneError" className={styles.errorMessage} role="alert">
                {errors.phone}
              </span>
            )}
          </div>
        </div>

        <div className={styles.messageWrapper}>
          <label htmlFor="message" className={styles.visuallyHidden}>
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={styles.messageInput}
            placeholder="Your Message"
            aria-label="Your Message"
          />
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          aria-label="Send Message"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
