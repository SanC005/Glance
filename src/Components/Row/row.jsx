import Box from "../Box/box";
import React from "react";
const list = [
  { title: "hey" },
  { title: "hey" },
  { title: "hey" },
  { title: "hey" },
  { title: "hey" },
  { title: "hey" },
  { title: "hey" },
  { title: "hey" },
  { title: "hey" },
  { title: "hey" },
  { title: "hey" },
  { title: "hey" },
];
export default function Row() {
  return (
    <div className="w-full md:auto">
      <div className="text-left py-5 text-3xl font-bold">
        Twitter
      </div>
      <div className="flex flex-row overflow-x-scroll">
        {list.map((item) => {
          return <><Box text={item.title}/></>;
        })}
      </div>
    </div>
  );
}
