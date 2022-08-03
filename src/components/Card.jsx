import React from 'react'
import { useNavigate } from 'react-router-dom'
import Status from './Status'

function Card({name, gender, species, image, status, id, location}) {
    const navigate = useNavigate()
    
    return (
    <div className='flex m-6 bg-zinc-900 rounded-xl overflow-hidden shadow-md max-h-60 max-w-3xl'>
            <img className='object-cover w-60 h-60' src={image} alt={name}></img>       
        <div className='flex-auto p-2'>
            <div className='text-right p-2'>                  
                <Status status={status.charAt(0).toUpperCase() + status.slice(1)}/>               
            </div>
            <div className='items-center text-lg pl-4'>
                <div>   
                        <p className='font-bold text-xl cursor-default pb-2'>{name}</p>
                        <p className='text-zinc-400 cursor-default text-base'>Gender: {gender}</p>
                        <p className='text-zinc-400 cursor-default text-base'>Specie: {species}</p>
                        <p className='text-zinc-400 cursor-default text-base'>Last known location: {location}</p>
                    <div className='pt-4'>
                        <button className='border-none bg-zinc-800 p-2 rounded-md shadow-md text-xs' onClick={() => navigate(`/character/${id}`)}>More info...</button>
                    </div>
                </div>
            </div>
        </div>   
    </div>
)
}

export default Card