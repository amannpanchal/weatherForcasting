// src/IPAddressFetcher.js
import React, { useState, useEffect } from 'react';

const App = () => {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    fetchIPAddress();
  }, []);

  const fetchIPAddress = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      if (!response.ok) {
        throw new Error('Failed to fetch IP address');
      }
      const data = await response.json();
      setIpAddress(data.ip);
    } catch (error) {
      console.error('Error fetching IP address:', error);
      setIpAddress('Error fetching IP');
    }
  };

  return (
    <div>
      <h2>Current IP Address</h2>
      <p>{ipAddress}</p>
    </div>
  );
};

export default App;
