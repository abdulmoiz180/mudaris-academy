import { useState, useEffect } from "react";
import './CountdownTimer.css'
const CountdownTimer = () => {
  const deadline = new Date("2025-02-29T23:59:59"); // Set a fixed deadline
  const [timeLeft, setTimeLeft] = useState({});

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = deadline - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Stops at 0
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold" }} className="countdownTimerMainDiv">
      <p>Registration Ends In:</p>
      {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 ? (
        <p style={{ color: "red" }}>Registration Closed</p>
      ) : (
        <p>
          {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
        </p>
      )}
    </div>
  );
};

export default CountdownTimer;
