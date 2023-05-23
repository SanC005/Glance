import Box from "../Box/box";
import React from "react";
// import RedditRow from "@/api/reddit/redditdata";

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();
  return data;

}


export default async function Row() {



const data = await getData();
const boxes = data.map(post => <li key={post.id}><Box prim_color="lightblue" sec_color="blue" data={post}/></li>)


return (

  <div className="w-full p-5">
    <div className="text-left py-5 text-3xl font-bold">
      Twitter
    </div>

    <div className="flex flex-row flex-nowrap overflow-x-auto">

      <ul className="flex flex-row">{boxes}</ul>
    </div>
  </div>
);
}
