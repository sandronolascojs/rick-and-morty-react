import axios from 'axios'

const URI_ListCharacters = `https://rickandmortyapi.com/api/character?page=`
const URI_Name = '&name='
const URI_Status ='&status='
const URI_Species ='&species='
const URI_Gender ='&gender='

export const getCharacters = async (characterPage, characterName, statusFilter, speciesFilter, genderFilter) => {
const res = await axios.get(URI_ListCharacters + characterPage + URI_Name + characterName + URI_Status + statusFilter + URI_Species + speciesFilter + URI_Gender + genderFilter)
    const data = res.data
    return data
}

const URI_Character = `https://rickandmortyapi.com/api/character/`

export const getCharacter = async (id) => {
    const res = await axios.get(URI_Character + id)
    return res
}

const URI_similarCharacters = `https://rickandmortyapi.com/api/character?name=`

export const getSimilarCharacters = async (name) => {
    const res = await axios.get(URI_similarCharacters + name)
    const data = res.data
    return data
}

const URI_Episode = `https://rickandmortyapi.com/api/episode/`

export const getEpisode = async (episode) => {
    const res = await axios.get(URI_Episode + episode)
    return res
}
