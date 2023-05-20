
export default function Box({data}){
    // const item = props.
    return(
        <div className="w-64 h-64 bg-blue-300 mx-4 my-8 overflow-hidden text-ellipsis">
            <div className="text-center align-middle p-2 bg-blue-400">
                {data.title}
            </div>
            <div className="text-center align-middle p-5 flex-nowrap">
                {data.body}
                
            </div>

        </div>
    )
}