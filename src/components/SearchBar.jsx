import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function SearchBar({setCharacterName}) {

    function handleSubmit(event) {
        event.preventDefault()
        return null
    }

  return (
    <div>
        <form>          
      <label className="mb-2 text-sm font-medium text-gray-800 sr-only dark:text-gray-300">Search</label>
          <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <FontAwesomeIcon icon={faMagnifyingGlass}/>
              </div>
              <input type="search" id="default-search" className="block p-2 pl-10 w-full text-sm text-gray-900 rounded-lg dark:bg-zinc-700 dark:placeholder-gray-200 dark:text-white shadow-md border-none focus:ring-0 !outline-none" placeholder="Search Characters..." onSubmit={handleSubmit} onChange={(event) => {setCharacterName(event.target.value)}} required></input>
          </div>
        </form>
    </div>
  )
}

export default SearchBar