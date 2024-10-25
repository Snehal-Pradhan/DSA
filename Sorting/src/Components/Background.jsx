import React from 'react'
import CompPanel from './CompPanel'
import LeaderBoard from './LeaderBoard'

function Background() {
  return (
    <>
    <div className='h-[100vh] p-4 flex  justify-center bg-zinc-800 w-100vw font-bold  text-zinc-700 font-mono'>
         <div className='p-1 w-[15%] mr-1 rounded bg-zinc-700 grid gap-1 grid-rows-5 grid-cols-1'>
           
         
         </div>
         <div className='p-1 bg-zinc-700  w-[100%] rounded grid grid-rows-4 grid-cols-4 gap-1 '>
            <CompPanel/>
            <CompPanel/>
            <CompPanel/>
            <CompPanel/>
            <CompPanel/>
            <CompPanel/>
            <CompPanel/>
            <CompPanel/>
            <CompPanel/>
            <CompPanel/>
            <CompPanel/>
            <CompPanel/>
            <CompPanel/>
            <CompPanel/>
            <CompPanel/>
            <CompPanel/>
         </div>
    </div>
    
    </>
  )
}

export default Background