'use client';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
    return (
        <div 
            className="
            w-full 
            md:w-auto
            py-2
            px-8
            rounded-full
            hover:shadow-lg
            transition-shadow
            cursor-pointer
            bg-white
            "
        >
            <div className="flex flex-row items-center space-x-3">
                <BiSearch size={30} color="#2F4858" />
                <input 
                    type="text" 
                    placeholder="Search"
                    className="
                    flex-1
                    outline-none
                    text-lg
                    placeholder-gray-500
                    "
                    style = {{color: '#2F4858', fontSize: '30px'}}
                />
            </div>
        </div>
    );
}

export default Search;
