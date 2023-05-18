import Link from "next/link";

export default function NavItem({text,route}){
    return(
        <div className="h-full w-1/4 bg-indigo-500 hover:bg-blue-500 text-center font-bold py-3 border-solid border border-blue-900">
            <Link href={route}>{text}</Link>
        </div>
    )
}