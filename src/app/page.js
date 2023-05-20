
import Navbar from "@/Components/Navbar/navBar"
import Row from "@/Components/Row/row"
// const dlist = [
//     { id: 1,title: "hey" },
//     { id: 2,title: "hey" },
//     { id:3 ,title: "hey" },
//     { id: 4,title: "hey" },
//     { id: 5,title: "hey" },
//     { id: 6,title: "hey" },
//     { id: 7,title: "hey" },
//     { id:8 ,title: "hey" },
//     { id: 9,title: "hey" },
//     { id:10 ,title: "hey" },
//     { id: 11,title: "hey" },
//     { id: 12,title: "hey" },
// ];
export default function Home() {
  
  
  return (
    <main className="flex flex-col items-center">
     <Navbar />
      <Row />
      <Row />
      <Row />
    </main>
  )
}
