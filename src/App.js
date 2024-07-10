import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://ip-api.com/json');
        setData(response.data);
        console.log(response.data,'the data is');
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>IP Information</h1>
        {data && (
          <div>
            <p><strong>IP Address:</strong> {data.query}</p>
            <p><strong>Country:</strong> {data.country}</p>
            <p><strong>Region:</strong> {data.regionName}</p>
            <p><strong>City:</strong> {data.city}</p>
            <p><strong>ISP:</strong> {data.isp}</p>
            <p><strong>Timezone:</strong> {data.timezone}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
