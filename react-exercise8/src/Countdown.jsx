import { useState, useEffect } from "react";

function Countdown() {
  const [initialTime, setInitialTime] = useState(30);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning, timeLeft]);

  function startTimer() {
    if (timeLeft > 0) {
      setIsRunning(true);
    }
  }

  function stopTimer() {
    setIsRunning(false);
  }

  function resetTimer() {
    setIsRunning(false);
    setTimeLeft(initialTime);
  }

  function changeTime(e) {
    const value = Number(e.target.value);

    setInitialTime(value);
    setTimeLeft(value);
    setIsRunning(false);
  }

  return (
    <div>
      <h2>Countdown Timer</h2>

      <input
        type="number"
        value={initialTime}
        onChange={changeTime}
      />

      <p>Time Left: {timeLeft} seconds</p>

      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Countdown;