"use client";

import React, { ReactNode } from "react";
import styles from "./rules.module.css";

type Props = {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
};

export default function AccordionItem({ title, isOpen, onToggle, children }: Props) {
  return (
    <div className={styles.accordionItem}>
      <button className={styles.accordionHeader} onClick={onToggle}>
        {title} {isOpen ? "▲" : "▼"}
      </button>

      {isOpen && (
        <div className={styles.accordionContent}>
          {children}
        </div>
      )}
    </div>
  );
}
