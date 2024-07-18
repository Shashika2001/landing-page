import React, { useState, useEffect } from 'react';

const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div>
      <h2> Time : {currentTime.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Time;