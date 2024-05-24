'use client'

import { useEffect, useState } from "react";
import styles from "./Counter.module.sass";

interface CounterProps {
  number: string,
  duration: string
}

export const Counter = ({number, duration} : CounterProps) => {

  const [count, setCount] = useState("0");

  useEffect(() => {
    let start = 0;

    // first three numbers from props
    let numberEnd = number.toString().length / 2;
    const end = parseInt(number.substring(0, numberEnd));

    // if zero, return
    if (start === end) return;

    // find duration per increment
    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;

      let value = parseInt(start + number.substring(numberEnd));
      const newCount = new Intl.NumberFormat('es-Co').format(value);

      setCount(newCount)

      if (start === end) clearInterval(timer)       
    }, incrementTime);
  
    
  }, [number, duration]);

  return (
    <div className={styles.Counter}>
      <h2>
        <i>{count ? count : 0}</i>
      </h2>
    </div>   
  );
}