
import Navbar from "@/Components/Navbar/navBar"
import Box from "@/Components/Box/box"
import Row from "@/Components/Row/row"
export default function Home() {
  return (
    <main className="flex flex-col items-center">
     <Navbar />
      <h1> Glance!! </h1>
      {/* <Box text={"hey"}/> */}
      <Row />
    </main>
  )
}
