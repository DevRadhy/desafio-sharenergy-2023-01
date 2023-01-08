import { useState } from "react";

import { Input } from "../components/Input";

import styles from "../styles/pages/StatusCode.module.css"

function StatusCode() {
  const [code, setCode] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      <nav className={styles.navBar}>

      </nav>

      <section className={styles.search}>
        <Input
          type="number"
          placeholder="Enter Status Code"
          className={styles.input}
          value={code && code !== null ? code : ""}
          onChange={(e) => setCode(Number(e.target.value))}
        />

        <img
          src={"/icons/search.svg"}
          alt="Search Icon"
          className={styles.searchIcon}
        />
      </section>

      <img src={`https://http.cat/${code}`} alt="HTTP Code with a cat." />
    </div>
  );
}

export default StatusCode;