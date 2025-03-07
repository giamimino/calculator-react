"use client"
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value:string) => {
    if (value === "=") {
      try {
        setResult("=" + eval(expression));
      } catch {
        setResult("Error");
      }
    } else if (value === "AC") {
      setExpression("");
      setResult("");
    } else if (value === "C") {
      setExpression(expression.slice(0, -1));
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.calculatorWrapper}>
        <div className={styles.outputWrapper}>
          <div className={styles.exampler}>
            {expression}
          </div>
          <div className={styles.answer}>
            {result}
          </div>
        </div>
        <div className={styles.inputWrapper}>
          {["AC", "C", "/", "*", "7", "8", "9","-", "4", "5", "6", "+", "1", "2", "3", "=", "0", "."].map((btn) => (
            <div key={btn}
            onClick={() => handleClick(btn)}>
              {btn}
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}