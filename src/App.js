import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.ipify.org/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result); // Set the fetched data into the state
      } catch (err) {
        setError(err.message); // Set error message if there's an error
      } finally {
        setLoading(false); // Set loading state to false, regardless of success or failure
      }
    };

    fetchData(); // Call the fetchData function once when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  // Conditional rendering based on loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Display the fetched data once loaded
  return (
    <div className="App">
      <header className="App-header">
        {data && <p>Your IP Address: {data.ip}</p>}
      </header>
    </div>
  );
}

export default App;
