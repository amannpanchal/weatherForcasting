// import React, { useEffect, useState } from 'react';

// const App = () => {
//   const [ipInfo, setIpInfo] = useState({});
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const apiKey = '3605d66b177820'; // Replace with your API key
//     fetch(`https://ipinfo.io/json?token=${apiKey}`)
//       .then(response => response.json())
//       .then(data => {
//         setIpInfo(data);
//       })
//       .catch(error => {
//         console.error('Error fetching IP address:', error);
//         setError('Error fetching IP address');
//       });
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>IP Address Information (ipinfo.io):</h1>
//         {error && <p>{error}</p>}
//         {ipInfo.ip ? (
//           <div>
//             <p><strong>IP Address:</strong> {ipInfo.ip}</p>
//             <p><strong>City:</strong> {ipInfo.city}</p>
//             <p><strong>Region:</strong> {ipInfo.region}</p>
//             <p><strong>Country:</strong> {ipInfo.country}</p>
//             <p><strong>Location:</strong> {ipInfo.loc}</p>
//             <p><strong>Organization:</strong> {ipInfo.org}</p>
//             <p><strong>Postal Code:</strong> {ipInfo.postal}</p>
//             <p><strong>Timezone:</strong> {ipInfo.timezone}</p>
//           </div>
//         ) : (
//           <p>Fetching IP information...</p>
//         )}
//       </header>
//     </div>












//   );
// };

// export default App;

















// src/App.js
// src/App.js
import React from 'react';

const styles = {
  textarea: {
    fontSize: '16px',
    width: '100%',
    height: '100px',
    padding: '10px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px'
  }
};

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>My Application</h1>
      <textarea style={styles.textarea} placeholder="Type here..."></textarea>
    </div>
  );
};

export default App;


