import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'


function ListPage({page, setPage, infoPage, limitPage}) {  

    return (
        <div className='flex p-2 items-center justify-center'>
            <div>
                <button className='mr-2 bg-zinc-700 rounded-md pr-4 pl-4 pt-2 pb-2 shadow-md disabled:opacity-50' disabled={page === 1 ? true : false}><FontAwesomeIcon icon={faArrowLeft} onClick={()=> {
                setPage(infoPage.info.prev === null ? 1 : page - 1)}} /></button>
            </div>
            <label className='text-center justify-center font-bold text-xl p-2'>| {page} |</label>
            <div>
                <button className='ml-2 bg-zinc-700 rounded-md pr-4 pl-4 pt-2 pb-2 shadow-md disabled:opacity-50' disabled={page === limitPage ? true : false}><FontAwesomeIcon icon={faArrowRight} onClick={()=> {
                setPage(page === limitPage ? limitPage : page + 1)}} /></button>
            </div>
        </div>
    )
}

export default ListPage