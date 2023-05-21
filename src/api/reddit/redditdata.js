
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
    const post = dataItem.data.children[0].data;
    console.log(post);
    // return data;
    
    return (
    
      <div>
        {post.subreddit}
      </div>
    );
    }