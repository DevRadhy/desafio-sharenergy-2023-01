import { InputHTMLAttributes } from "react";

import styles from "../styles/components/Input.module.css";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
}

function Input({ ...props }: IInputProps) {
  return (
    <div className={styles.container}>
      <input
          type="text"
          {...props}
        />
    </div>
  );
}

export { Input };