
import Navbar from "@/Components/Navbar/navBar"
import Row from "@/Components/Row/row"
import Location from "@/Components/Location/Location"
import RedditRow from "@/api/reddit/redditdata"
export default function Home() {
  
  
  return (
    <main className="flex flex-col items-center">
     <Navbar />
     <Location />
      <RedditRow />
      <Row />
      <Row />
      <Row />
    </main>
  )
}
