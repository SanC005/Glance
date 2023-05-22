
export default function Box(props){

    const {data,prim_color,sec_color} = props;
    // console.log(prim_color,sec_color);
    return(
        <div style={{backgroundColor:sec_color,color:prim_color}} className="w-64 h-64 mx-4 my-8 overflow-hidden text-ellipsis rounded-2xl">
            <div className="text-center align-middle p-2">
                {data.title}
            </div>
            <div style={{backgroundColor:prim_color,color:sec_color}}className="text-center align-middle p-5 flex-nowrap h-full">
                {data.body}
                
            </div>

        </div>
    )
}