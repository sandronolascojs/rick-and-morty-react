import React from 'react'

function Filter({setSpeciesFilter, setStatusFilter, setGenderFilter}) {

    const handleChangeStatus = (event) => {
        setStatusFilter(event.target.value)
    }
    const handleChangeSpecies = (event) => {
        setSpeciesFilter(event.target.value)
    }
    const handleChangeGender = (event) => {
        setGenderFilter(event.target.value)
    }
    
    return (
    <div>
        <div className='text-xl pt-6 pr-6 pl-4'>
            <span className='font-bold'>
                Filters
            </span>
            <div>
                <div className='pt-2 text-left'>
                    <span>Status: </span>
                    <select className='
                    form-select form-select-sm
                    appearance-none
                    block
                    w-full
                    px-2
                    py-1
                    items-center
                    text-base
                    font-medium
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    rounded
                    transition ease-in-out
                    mt-1
                    focus:text-gray-700 
                    focus:bg-white focus:outline-none
                    ' onChange={handleChangeStatus}>
                        <option value=''>All</option>
                        <option value='alive'>Alive</option>
                        <option value='dead'>Dead</option>
                        <option value='unknown'>Unknown</option>
                    </select>
                </div>
                <div className='pt-2 text-left'>
                    <span>Species: </span>
                    <select className='
                    form-select form-select-sm
                    appearance-none
                    block
                    w-full
                    px-2
                    py-1
                    items-center
                    text-base
                    font-medium
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    rounded
                    transition ease-in-out
                    mt-1
                    focus:text-gray-700 
                    focus:bg-white focus:outline-none
                    ' onChange={handleChangeSpecies}>
                        <option value=''>All</option>
                        <option value='human'>Human</option>
                        <option value='alien'>Alien</option>
                        <option value='robot'>Robot</option>
                        <option value='unknown'>Unknown</option>
                    </select>
                </div> 
                <div className='pt-2 text-left'>
                    <span>Gender: </span>
                    <select className='
                    form-select form-select-sm
                    appearance-none
                    block
                    w-full
                    px-2
                    py-1
                    items-center
                    text-base
                    font-medium
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    rounded
                    transition ease-in-out
                    mt-1
                    focus:text-gray-700 
                    focus:bg-white focus:outline-none' onChange={handleChangeGender}>
                        <option value=''>All</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        <option value='genderless'>Genderless</option>
                        <option value='unknown'>Unknown</option>
                    </select>
                </div>                    
            </div>                       
        </div>
    </div>
    )
}

export default Filter