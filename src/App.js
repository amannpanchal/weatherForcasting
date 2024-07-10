import React, { useState, useEffect } from 'react';

function App() {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    fetch('https://api.ipify.org/')
      .then(response => response.text())
      .then(data => setIpAddress(data))
      .catch(error => console.log('Error fetching IP address:', error));
  }, []);

  return (
    <div className="App">
      <h1>Your IP Address</h1>
      <p>{ipAddress}</p>
    </div>
  );
}

export default App;
