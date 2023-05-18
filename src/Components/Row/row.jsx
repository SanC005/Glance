import Box from "../Box/box";
export default function Row() {
  return (
    <div className="flex">
    <div className="">
        <h1>Twitter</h1>
    </div>
      <div className="flex flex-row w-full">
        <Box text={"hey"} />
        <Box text={"hey"} />
        <Box text={"hey"} />
      </div>
    </div>
  );
}
