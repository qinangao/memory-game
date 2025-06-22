import { createContext, useContext, useEffect, useRef, useState } from "react";

const TimerContext = createContext();

function TimerProvider({ children }) {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0 && isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning, timeLeft]);

  return (
    <TimerContext.Provider value={{ setTimeLeft, setIsRunning, timeLeft }}>
      {children}
    </TimerContext.Provider>
  );
}

function useTimer() {
  const context = useContext(TimerContext);
  if (context === undefined)
    throw new Error("TimerContext was used outside the StataProvider ");
  return context;
}

export { TimerProvider, useTimer };
