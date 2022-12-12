import { useRouter } from 'next/router'
import React, { useState } from 'react'
import useApp from '../hooks/useApp'

const Buscador = () => {

   const {setAnimes,busqueda,setBusqueda,setCargando,setPagination} = useApp()

   const router = useRouter()

  const handleClick = async () =>{
    setCargando(true)
    router.push("/")
    const url = `https://api.jikan.moe/v4/anime?q=${busqueda}`
    await fetch(url).then(res => res.json()).then(res => {
      setAnimes(res.data)
      setPagination(res.pagination)
    } 
    ).catch(err => setAnimes([]))
    setCargando(false)
  }
  return (
    <div className='min-w-0 w-full p-2'>
      <div className='flex justify-center items-center'>
        <input className='rounded-l-md p-1 min-w-0 w-full md:w-96' type="text" value={busqueda} onChange={e => setBusqueda(e.target.value)} />
        <button className='rounded-r-md px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-colors' type="button" onClick={handleClick} >buscar</button>
      </div>
    </div>
  )
}

export default Buscador