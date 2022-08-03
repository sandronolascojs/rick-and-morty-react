import React from 'react'

function Status({status}) {
    
        if (status === "Dead") {
        return (
            <label
            className='font-medium text-base shadow-md rounded-md bg-gradient-to-r from-red-500 via-red-600 to-rose-800 pt-2 pb-2 pl-6 pr-6'
            >
            {status}
            </label>
        );
        } else if (status === "Alive") {
        return (
            <label
            className='font-medium text-base shadow-md rounded-md bg-gradient-to-r from-emerald-500 to-lime-600 pt-2 pb-2 pl-6 pr-6'
            >
            {status}
            </label>
        );
        } else {
        return (
            <label
            className='font-medium text-base shadow-md rounded-md bg-gradient-to-r from-stone-500 via-neutral-600 to-slate-600 pt-2 pb-2 pl-6 pr-6'
            >
            {status}
            </label>
        );
        }
}

export default Status