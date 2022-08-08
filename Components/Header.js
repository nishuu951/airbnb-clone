import React from 'react'
import Image from 'next/image'
import { SearchIcon, UsersIcon } from '@heroicons/react/solid'
import { GlobeAltIcon } from '@heroicons/react/solid'
import { MenuIcon } from '@heroicons/react/solid'
import { UserCircleIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range'
import { useRouter } from 'next/dist/client/router';
const Header = ({placeholder}) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key:'selection',
  }
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const [noOfGuests, setNoOfGuests] = useState(1);
  const resetInput = () => {
    setSearchInput("");
  };
  const router = useRouter();
  const search = () => {
    router.push({
      pathname: "/Search",
      query: {
        location: searchInput,
        startDate: startDate,
        endDate: endDate,
        noOfGuests,
      },
    });
  };
  return (
    <header className='sticky bg-white grid grid-cols-3 p-3 md:px-10 top-0 shadow-md z-50'>
  
      <div  onClick={() => router.push("/")} className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill' objectFit='contain' objectPosition="left"
        />
      
      </div>

    
      <div className=' flex  items-center md:border-2 md:shadow-sm  p-2 rounded-full bg-transparent'>
        <input
          value={searchInput}
          onChange={(e) => 
            setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder || 'Start your search'}
          className='outline-none  placeholder-gray-400 pl-4 text-gray-600 text-sm bg-transparent flex-grow'></input>
        <SearchIcon className='h-8  text-white bg-red-400 rounded-full p-2 hidden md:inline-flex cursor-pointer'/>
      </div>

  
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p className='hidden md:inline '>Become a host</p>
        <GlobeAltIcon  className='h-6 cursor-pointer'/>
        
        <div className='flex items-center border-2  rounded-full p-2 space-x-2 ' >
          <MenuIcon className='h-6 cursor-pointer' />
          <UserCircleIcon className='h-6 cursor-pointer'/>
        </div>
      </div>
      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto'>
          <DateRangePicker ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange = {handleSelect}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
            <UsersIcon className='h-5' />
            <input value={noOfGuests} onChange={(e) => setNoOfGuests(e.target.value)} min={ 1} type = "number" className='w-12 pl-2 text-lg outline-none text-red-400 '/>
          </div>
          <div className='flex'>
            <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
            <button onClick={search} className=' flex-grow text-red-400'>Search</button>
          </div>
        </div>
      )}
      
    </header>
  )
}

export default Header
