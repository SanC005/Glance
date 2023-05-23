
import Navbar from "@/Components/Navbar/navBar"
import Row from "@/Components/Row/row"
import Location from "@/Components/Location/Location"
import RedditRow from "@/api/reddit/redditdata"
import YTRow from "@/api/youtube/youtubedata"
export default function Home() {
  
  return (
    <main className="flex flex-col items-center">
     <Navbar />
     <Location />
      <RedditRow />
      <YTRow />
      <Row />
      <Row />
      <Row />
    </main>
  )
}
