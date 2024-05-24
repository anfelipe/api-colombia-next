"use client"

import { useEffect } from "react";
import styles from "./Error.module.sass";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export const Error = ({error, reset}: ErrorProps) => {

  useEffect(() => {
    console.log(error);    
  }, []);  

  return(    
    <div className={styles.Error}>
    <div className={styles.ErrorMessage}>
	    <h1>500</h1>
	    <h3>Server Error</h3>
	    <h2>It&apos;s not you, it&apos;s me.</h2>	    
	    <button>Go Back</button>
    </div>
    </div>
  );
}