import React, { useEffect, useState} from 'react'
import ListPage from '../components/ListPage.jsx'
import Card from '../components/Card.jsx'
import { getCharacters } from '../api/api.js'
import SearchBar from '../components/SearchBar.jsx'
import Filter from '../components/Filter.jsx'
import { RotateSpinner } from 'react-spinners-kit'

function Characters() {
    const [data, setData] = useState('')
    const [characterPage, setCharacterPage] = useState(1)
    const [characterName, setCharacterName] = useState('')
    const [statusFilter, setStatusFilter] = useState('')
    const [genderFilter, setGenderFilter] = useState('')
    const [speciesFilter, setSpeciesFilter] = useState('')
    const [infoPage, setInfoPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [limitPage, setLimitPage] = useState(1)

    useEffect(() => {
        async function getData() {
        const data = await getCharacters(characterPage, characterName, statusFilter, speciesFilter, genderFilter)
        setInfoPage(data)
        setLimitPage(data.info.pages)
        setData(data.results)
        setLoading(false)
    }
    getData()
    }, [characterPage, characterName, statusFilter, speciesFilter, genderFilter])

    return (  
        <div className='pl-6 pr-6 pt-10'>
            <div>
                <div>
                    <p className='text-center font-bold text-xl'>Rick and morty API</p>
                </div>
                <div className='flex justify-between p-2'>
                <div>
                    <SearchBar setCharacterName={setCharacterName}/>
                </div>
                    <ListPage limitPage={limitPage} infoPage={infoPage} page={characterPage} setPage={setCharacterPage}/>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='flex-auto'>
                    <Filter setSpeciesFilter={setSpeciesFilter} setStatusFilter={setStatusFilter} setGenderFilter={setGenderFilter}/>
                </div>
                <div className='flex-auto justify-center items-center'>
                    {loading === true ? <RotateSpinner /> : data.map(data => {      
                            return <Card
                            key={data.id}
                            id={data.id}
                            name={data.name} 
                            gender={data.gender} 
                            species={data.species} 
                            status={data.status} 
                            image={data.image} 
                            location={data.location.name} 
                            episode={data.episode[0]}                                                
                            />
                    })
                    }
                </div>
            </div>
            <div>
                <ListPage limitPage={limitPage} infoPage={infoPage} page={characterPage} setPage={setCharacterPage}/>
            </div>
        </div>         
    )
    }

export default Characters