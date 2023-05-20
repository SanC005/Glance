import Box from "../Box/box";
import React from "react";
const list = [
  { id: 1, title: "hey" },
  { id: 2, title: "hey" },
  { id: 3, title: "hey" },
  { id: 4, title: "hey" },
  { id: 5, title: "hey" },
  { id: 6, title: "hey" },
  { id: 7, title: "hey" },
  { id: 8, title: "hey" },
  { id: 9, title: "hey" },
  { id: 10, title: "hey" },
  { id: 11, title: "hey" },
  { id: 12, title: "hey" },
];

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


// const listItems = list.map(person =>
//   <li key={person.id}><Box title={person.title} /></li>
// );

const boxes = data.map(post => <li key={post.id}><Box data={post}/></li>)


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
