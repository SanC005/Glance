import Box from "@/Components/Box/box";

async function getData() {
    const API_KEY = 'AIzaSyB1w2oJIUHWK_ayrflbL0vPxmVPeJxPD-4';
    const response = await fetch('https://www.googleapis.com/youtube/v3/videos?key='+API_KEY+'&part=snippet&chart=mostPopular&maxResults=15');
  
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
  
    const data = await response.json();
    return data;
}
export default async function YTRow() {

    const data = await getData();
    const boxes = data.items.map(item => 
        <li key={1}><Box prim_color="#282828" sec_color="red" text_color="white" data={{title:item.snippet.title,body:item.snippet.description}}/></li>
    )
    console.log(data);
    
    
    return (
    
      <div className="w-full p-5">
        <div className="text-left py-5 text-3xl font-bold">
          Youtube
        </div>
    
        <div className="flex flex-row flex-nowrap overflow-x-auto">
    
          <ul className="flex flex-row">{boxes}</ul>
        </div>
      </div>
    );
    }