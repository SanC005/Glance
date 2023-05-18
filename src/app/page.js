import Navbar from "@/Components/Navbar/navBar"
import Box from "@/Components/Box/box"
import Row from "@/Components/Row/row"
const list = [{title:"hey"},{title:"hey"},{title:"hey"},{title:"hey"}]
export default function Home() {
  return (
    <main className="flex flex-col items-center">
     <Navbar />
      <h1> Glance!! </h1>
      {/* <Box text={"hey"}/> */}
      <Row prop="pro" />
    </main>
  )
}
