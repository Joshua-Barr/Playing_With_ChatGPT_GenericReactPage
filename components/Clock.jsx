import React, { useState, useEffect } from "react";

const Clock = () => {
  // Set up state to track the current time
  const [time, setTime] = useState(new Date());

  // Use the useEffect hook to update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  });

  // Format the time as a string
  const timeString = time.toLocaleTimeString();

  return <div className="clock">{timeString}</div>;
};

export default Clock;
