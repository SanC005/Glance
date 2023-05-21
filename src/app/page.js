
import Navbar from "@/Components/Navbar/navBar"
import Row from "@/Components/Row/row"
import Location from "@/Components/Location/Location"
export default function Home() {
  
  
  return (
    <main className="flex flex-col items-center">
     <Navbar />
     <Location />
      <Row />
      <Row />
      <Row />
    </main>
  )
}
