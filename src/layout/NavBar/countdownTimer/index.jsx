import { useEffect, useState } from 'react';
import './CountdownTimer.css';

const targetDate = new Date('2025-03-31T23:59:59Z').getTime();

const formatTime = (time) => {
  const days = Math.floor(time / 86400);
  const hours = Math.floor((time % 86400) / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

export default function CountdownTimer() {
  const [remainingTime, setRemainingTime] = useState(
    Math.max(Math.floor((targetDate - new Date().getTime()) / 1000), 0)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-circle">
      {formatTime(remainingTime)}
      <div className="countdown-loader"></div>
    </div>
  );
}
