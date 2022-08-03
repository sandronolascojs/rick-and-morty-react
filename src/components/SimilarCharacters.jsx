import React from 'react'
import { Link } from 'react-router-dom'

function SimilarCharacters({img, name, id}) {
  return (
        <Link to={`/character/${id}`}>
        <img className='w-52 h-52' src={img} alt={name} />    
        </Link>
    )
}

export default SimilarCharacters