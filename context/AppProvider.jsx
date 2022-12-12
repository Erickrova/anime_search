import { createContext, useEffect, useState } from "react"


const AppContext = createContext()

const AppProvider = ({children}) => {
  const [animes,setAnimes] = useState([])
  const [pagination,setPagination] = useState([])
  const [busqueda,setBusqueda] = useState("")
  const [cargando,setCargando] = useState(true)

  const handleNextPage = async (page) =>{
    if(page > pagination?.last_visible_page){
      return
    }
    if(page >= 1){
        setCargando(true)
        const url = `https://api.jikan.moe/v4/anime?q=${busqueda}&page=${page}`
        await fetch(url).then(res => res.json()).then(res => {
            setAnimes(res.data)
            setPagination(res.pagination)
        } 
        ).catch(err => console.log(err))
        setCargando(false)
    }
  }

  const llamado = async()=>{
    setCargando(true)
    setBusqueda("")
    const url = `https://api.jikan.moe/v4/anime`
    await fetch(url).then(res => res.json()).then(res => {
      setAnimes(res.data)
      setPagination(res.pagination)
    } 
    ).catch(err => setAnimes([]))
   
    setCargando(false)
  }

  useEffect(()=>{
    llamado()
  },[])


  return (
    <AppContext.Provider
        value={{
          animes,
          setAnimes,
          busqueda,
          setBusqueda,
          cargando,
          setCargando,
          pagination,
          setPagination,
          handleNextPage,
          llamado
        }}
    >
        {children}
    </AppContext.Provider>
  )
}

export {
    AppProvider
} 

export default AppContext
