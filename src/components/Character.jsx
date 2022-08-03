
import React from 'react'
import SimilarCharacters from './SimilarCharacters'
import Status from './Status'

function Character({similarCharacters, episodeData, id, name, image, status, gender, species, originName, location}) {

    return (
            <div>
                <div key={id} className='flex pb-12'>
                    <div>
                    <img className='rounded-lg w-70 h-70 object-cover' src={image} alt={name}></img>
                            <div className='flex absolute bottom-3/4 pb-16 pl-2 ml-1'>
                                <Status status={status.charAt(0).toUpperCase() + status.slice(1)}/> 
                            </div>
                    </div>    
                    <div className='flex-row text-xl font-medium ml-16'>
                        <p className='text-2xl font-bold'>{name}</p>
                        <br></br>
                        <p className='text-zinc-400 text-base'>Gender: {gender}</p>
                        <p className='text-zinc-400 text-base'>Specie: {species}</p>
                        <p className='text-zinc-400 text-base'>Origin: {originName}</p>
                        <br></br>
                        <p className='text-zinc-200 text-lg'>Last known location:</p>
                        <p className='text-zinc-400 text-base'>{location}</p>
                        <br></br>
                        <div className='flex justify-between'>
                            <div>
                            <p className='text-zinc-200 text-lg'>First seen in:</p>
                            <p className='text-zinc-400 text-base'>{episodeData === '' ? 'Unknown' : episodeData.name}</p>
                            </div>
                            <div className='pl-16'>
                            <p className='text-zinc-200 text-lg'>Air date:</p>
                            <p className='text-zinc-400 text-base'>{episodeData === '' ? 'Unknown' : episodeData.air_date}</p> 
                            </div>
                        </div>
                    </div>
                </div>                            
                    <div className='border-t pb-12 border-zinc-700'></div>
                    <div>
                        <p className='text-xl pb-6 font-bold'>Similar Characters</p>
                    </div>
                    <div className='flex flex-wrap items-center justify-center'>
                        {similarCharacters.map(similarCharacters => {
                            return  <div className='m-2 rounded-lg overflow-hidden shadow-md'>
                                    <SimilarCharacters 
                                    key={similarCharacters.id}
                                    id={similarCharacters.id}                      
                                    name={similarCharacters.name}
                                    img={similarCharacters.image}                                                              
                                    />
                                    </div>
                        })}
                    </div>
            </div>                   
)
}

export default Character