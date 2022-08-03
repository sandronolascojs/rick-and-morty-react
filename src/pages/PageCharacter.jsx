
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import { getCharacter, getEpisode, getSimilarCharacters } from '../api/api.js'
import Character from '../components/Character.jsx'
import { RotateSpinner } from 'react-spinners-kit'

function PageCharacter() {
    let { id } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [episodeData, setEpisodeData] = useState('')
    const [similarCharacters, setSimilarCharacters] = useState('')
    const navigate = useNavigate(true)

    useEffect(() => {
    (async function () {
      const data = await getCharacter(id)
      const episodeId = data.data.episode[0].slice(-1)
            if (episodeId > 0) {
                const episodeinfo = await getEpisode(episodeId)
                setEpisodeData(episodeinfo.data) 
            }
      const firstName = data.data.name.split(' ')
      const similars = await getSimilarCharacters(firstName[0])
      setSimilarCharacters(similars.results)
      setData([data.data]);
      setLoading(false)
    })();
  }, [id, episodeData]);

    return (
            <div className='p-12 items-center justify-center flex-auto'>
              <div>
              <button className='ml-2 bg-zinc-700 rounded-md pr-4 pl-4 pt-2 pb-2 shadow-md disabled:opacity-50' onClick={() => navigate(`/`)}>Home</button>
              </div>
              <div className='p-2 pt-8'>                             
                  {loading === true ? <RotateSpinner /> : data.map(data =>  {return <Character 
                    key={data.id} 
                    id={data.id}
                    name={data.name}
                    image={data.image}
                    status={data.status}
                    gender={data.gender}
                    species={data.species}
                    originName={data.origin.name}
                    location={data.location.name}
                    episodeData={episodeData}
                    similarCharacters={similarCharacters}
                  />})}
              </div>                   
            </div>
        )
}

export default PageCharacter