// var client = new Twitter({
//     consumer_key: process.env.TWITTER_CONSUMER_KEY,
//     consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//     access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
//     access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
//   })
//   import React from 'react';

//   async function fetchTrends() {
//     // Perform the API request to fetch data
//     const response = await fetch('YOUR_API_ENDPOINT');
//     const data = await response.json();
  
//     return data;
//   }
  
//   export async function getServerSideProps() {
//     const trends = await fetchTrends();
  
//     return {
//       props: {
//         trends,
//       },
//     };
//   }
  
//   function Trends({ trends }) {
//     // Render your component using the fetched data
//     return <div>{/* Your component code */}</div>;
//   }
  
//   export default Trends;
// import axios from 'axios';

// const getTwitterTrends = async () => {
//   const url = 'https://api.twitter.com/1.1/trends/place.json?id=1'; // Replace '1' with the appropriate WOEID for your location

//   const response = await axios.get(url, {
//     headers: {
//       Authorization: "",
//       'Content-Type': 'application/json',
//     },
//   });
//   console.log(response.data);
//   return response.data;
// };

// export default getTwitterTrends;
