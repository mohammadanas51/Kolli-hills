import React, { useState } from "react";
import styles from "./ProfileForm.module.css";
import { InputField } from "./InputField";

export const ProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: "Md",
    lastName: "Rimel",
    email: "rimel1111@gmail.com",
    address: "Kingston, 5236, United State",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (id, value) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("New passwords do not match");
      return;
    }
  };

  const personalInfo = [
    { label: "First Name", value: formData.firstName, id: "firstName" },
    { label: "Last Name", value: formData.lastName, id: "lastName" },
    { label: "Email", value: formData.email, id: "email", type: "email" },
    { label: "Address", value: formData.address, id: "address" },
  ];

  const passwordFields = [
    { label: "Current Password", id: "currentPassword" },
    { label: "New Password", id: "newPassword" },
    { label: "Confirm New Password", id: "confirmPassword" },
  ];

  return (
    <form
      className={styles.profileForm}
      onSubmit={handleSubmit}
      aria-labelledby="profile-form-title"
    >
      <h2 id="profile-form-title" className={styles.formTitle}>
        Edit Your Profile
      </h2>

      <div className={styles.personalInfoGrid}>
        {personalInfo.map((field) => (
          <InputField
            key={field.id}
            label={field.label}
            value={field.value}
            id={field.id}
            type={field.type || "text"}
            onChange={(value) => handleInputChange(field.id, value)}
            required
          />
        ))}
      </div>

      <div className={styles.passwordSection}>
        <h3>Password Changes</h3>
        {passwordFields.map((field) => (
          <InputField
            key={field.id}
            label={field.label}
            type="password"
            id={field.id}
            value={formData[field.id]}
            onChange={(value) => handleInputChange(field.id, value)}
            autoComplete={
              field.id === "currentPassword"
                ? "current-password"
                : "new-password"
            }
          />
        ))}
      </div>

      <div className={styles.formActions}>
        <button
          type="button"
          className={styles.cancelButton}
          onClick={() => window.history.back()}
        >
          Cancel
        </button>
        <button type="submit" className={styles.submitButton}>
          Save Changes
        </button>
      </div>
    </form>
  );
};
