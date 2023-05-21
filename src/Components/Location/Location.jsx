import {FaSearch} from 'react-icons/fa'

export default function Location(){
    function handleLocation(){
        alert("hi");
    }
    return (
        <div className="flex flex-row p-2">
            <select name="location" className="text-xl font-semibold">
                <option value="1">Worldwide</option>
                <option value="23424848">India</option>
            </select>
            <div className="p-4">
                    <FaSearch size={20}/>
            </div>
        </div>
    )
}