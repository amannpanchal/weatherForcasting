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
import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const handleTouchStart = (event) => {
      if (event.target.tagName === 'TEXTAREA' || event.target.tagName === 'INPUT') {
        document.body.style.zoom = '1.0';
      }
    };

    document.addEventListener('touchstart', handleTouchStart, true);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart, true);
    };
  }, []);

  return (
    <div>
      <h1>My Application</h1>
      <textarea placeholder="Type here..."></textarea>
      {/* Add other input elements if needed */}
    </div>
  );
};

export default App;


