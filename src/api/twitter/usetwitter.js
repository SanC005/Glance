// "use client"
// import React, { useEffect, useState } from 'react';
// import getTwitterTrends from './twitter';

// function TrendsPage() {
//   const [trends, setTrends] = useState([]);

//   useEffect(() => {
//     const fetchTwitterTrends = async () => {
//       try {
//         const data = await getTwitterTrends();
//         setTrends(data[0].trends);
//       } catch (error) {
//         console.error('Error fetching Twitter trends:', error);
//       }
//     };

//     fetchTwitterTrends();
//   }, []);

//   return (
//     <div>
//       <h1>Twitter Trends</h1>
//       <ul>
//         {trends.map((trend) => (
//           <li key={trend.name}>{trend.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TrendsPage;
