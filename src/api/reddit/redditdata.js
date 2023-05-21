import Box from "@/Components/Box/box";
async function getData() {
    const response = await fetch('http://reddit.com/r/popular.json?limit=10');
  
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
  
    const data = await response.json();
    return data;
}
export default async function RedditRow() {

    const dataItem = await getData();
    // const post = dataItem.data.children[0].data.subreddit;
    const TopPosts = dataItem.data.children;
    // console.log(TopPosts);
    const boxes = TopPosts.map(topPost => 
        <li key={topPost.data.ups}><Box data={{title:topPost.data.subreddit, body: topPost.data.title}} /></li>
    )
    return (

        <div className="w-full p-5">
          <div className="text-left py-5 text-3xl font-bold">
            Reddit
          </div>
      
          <div className="flex flex-row flex-nowrap overflow-x-auto">
      
            <ul className="flex flex-row">{boxes}</ul>
          </div>
        </div>
      );
    }