import AnimeCard from "../components/AnimeCard"
import Buscador from "../components/Buscador"
import CardSkeleron from "../components/CardSkeleron"
import Layout from "../components/Layout"
import MainCarrousel from "../components/MainCarrousel"
import Pagination from "../components/Pagination"
import useApp from "../hooks/useApp"

export default function Home() {

  const {animes,cargando} = useApp()
  

  return (
    <Layout>
      <MainCarrousel />
      <Pagination/>
      <div className="flex flex-wrap gap-2 items-center justify-center py-10">
        {cargando ? (
          <>
          <CardSkeleron />
          <CardSkeleron />
          <CardSkeleron />
          <CardSkeleron />
          <CardSkeleron />
          <CardSkeleron />
          <CardSkeleron />
          <CardSkeleron />
          <CardSkeleron />
          </>
        ) : animes?.length ? animes.map(anime => (
          <AnimeCard anime={anime} key={anime.mal_id} />
          )):<p className="text-center text-xl text-white font-bold">No hay animes encontrados con esta busqueda</p>}
      </div>
      <Pagination/>
    </Layout>
  )
}
