import Box from "../Box/box";
import React from "react";
const list = [
  { id: 1,title: "hey" },
  { id: 2,title: "hey" },
  { id:3 ,title: "hey" },
  { id: 4,title: "hey" },
  { id: 5,title: "hey" },
  { id: 6,title: "hey" },
  { id: 7,title: "hey" },
  { id:8 ,title: "hey" },
  { id: 9,title: "hey" },
  { id:10 ,title: "hey" },
  { id: 11,title: "hey" },
  { id: 12,title: "hey" },
];
export default function Row() {
  const listItems = list.map(person =>
    <li key={person.id}><Box title={person.title}/></li>
  );


  return (
    
    <div className="h-96">
      <div className="text-left py-5 text-3xl font-bold">
        Twitter
      </div>
      <div className="flex fixed flex-row overflow-x-scroll">
        <ul>{listItems}</ul>
      </div>
    </div>
  );
}
