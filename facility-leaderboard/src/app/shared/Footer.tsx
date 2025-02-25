import React from "react";
import styles from "./footer.module.css"; 

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Magpie Labs</p>
      <p>
        No Discord? Contact me:{" "}
        <a href="mailto:magpielabsenquiries@gmail.com" className={styles.email}>
          magpielabsenquiries@gmail.com
        </a>
      </p>
    </footer>
  );
}
