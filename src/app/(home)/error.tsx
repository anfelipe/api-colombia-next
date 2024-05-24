"use client"

import { Error } from "app/components/shared/Error";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function HomeError({error, reset}: ErrorProps){
  return(
    <Error error={error} reset={reset} />
  );
}