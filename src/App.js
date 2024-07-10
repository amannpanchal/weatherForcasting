// src/IPAddressLocator.js
import React, { useState } from 'react';

const IPAddressLocator = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [location, setLocation] = useState(null);

  const fetchLocation = async () => {
    try {
      const response = await fetch(`https://ipapi.co/${ipAddress}/json/`);
      if (!response.ok) {
        throw new Error('Failed to fetch location');
      }
      const data = await response.json();
      setLocation(data);
    } catch (error) {
      console.error('Error fetching location:', error);
      setLocation(null);
    }
  };

  const handleChange = (event) => {
    setIpAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchLocation();
  };

  return (
    <div>
      <h2>IP Address Locator</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter IP Address:
          <input
            type="text"
            value={ipAddress}
            onChange={handleChange}
            placeholder="Enter IP Address"
          />
        </label>
        <button type="submit">Find Location</button>
      </form>
      {location && (
        <div>
          <h3>Location Details:</h3>
          <p>IP Address: {location.ip}</p>
          <p>City: {location.city}</p>
          <p>Region: {location.region}</p>
          <p>Country: {location.country_name}</p>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default IPAddressLocator;
