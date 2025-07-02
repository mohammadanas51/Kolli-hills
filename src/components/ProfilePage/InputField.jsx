import React from "react";
import styles from "./InputField.module.css";

export const InputField = ({
  label,
  value,
  id,
  type = "text",
  onChange,
  required = false,
  autoComplete,
}) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
        {required && (
          <span className={styles.required} aria-hidden="true">
            *
          </span>
        )}
      </label>
      <div className={styles.inputWrapper}>
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={styles.input}
          required={required}
          aria-required={required}
          autoComplete={autoComplete}
          aria-label={label}
        />
      </div>
    </div>
  );
};
