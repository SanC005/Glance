
export default function Box({text}){
    return(
        <div className="w-48 h-48 bg-blue-300 mx-4 my-8">
            <div className="text-center">
                <h1>{text}</h1>
            </div>
        </div>
    )
}