
export default function Box({title}){
    // const item = props.
    return(
        <div className="w-64 h-64 bg-blue-300 mx-4 my-8">
            <div className="text-center align-middle p-2 border-2 border-black">
                {title}
            </div>
            <div className="text-center align-middle p-2 border-2 border-black">
                {/* {props.description} */}
            </div>

        </div>
    )
}