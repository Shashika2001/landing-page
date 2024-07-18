import React, { useState, useEffect } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const getGreeting = () => {
      const hours = new Date().getHours();
      if (hours < 12) {
        return 'Good Morning...!';
      } else if (hours < 18) {
        return 'Good Afternoon...!';
      } else {
        return 'Good Evening...!';
      }
    };

    setGreeting(getGreeting());
  }, []);

  return <h1>{greeting}</h1>;
};

export default Greeting;