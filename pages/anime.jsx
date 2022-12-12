import Image from "next/image"
import Link from "next/link"
import Layout from "../components/Layout"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"


const Anime = () => {
    const [anime,setAnime] = useState({})
    
    const router = useRouter()
    const {id} = router.query

    useEffect(()=>{
        if(id){
            const url = `https://api.jikan.moe/v4/anime/${id}`
            fetch(url).then(res => res.json()).then(res => setAnime(res.data)).catch(err => console.log(err))
        }
    },[id])
    
  return (
        <Layout>
        {anime?.title ?
        (
            <div className="md:w-2/3 mx-auto min-h-screen p-2 pb-4">
                <div className="w-full flex items-center justify-center relative p-2 mb-5">
                    <Image className='md:w-auto md:h-72 blur-3xl' height={400} quality={10} width={900} src={`${anime.images.jpg.image_url || anime.images.webp.image_url}`} alt={`anime?.title image`} priority />
                    <Image className='md:w-auto md:h-72 z-10 absolute' quality={100} height={400} width={900} src={`${anime.images.jpg.image_url || anime.images.webp.image_url}`} alt={`anime?.title image`} priority />
                </div>
                <div className="flex flex-col md:flex-row md:justify-between gap-2 md:items-center">
                    <div className="flex flex-col md:flex-row gap-2 md:items-center">
                        <h2 className='whitespace-pre overflow-ellipsis overflow-hidden text-white text-2xl font-bold'>{anime.title}</h2>
                        {anime?.type ? (
                            <p className=" whitespace-pre-wrap font-medium text-white">{anime.type}</p>
                        ):null}
                    </div>
                    <Link className="text-red-500 font-bold" target={"_blank"} href={`${anime.url}`}>See original post</Link>
                </div>
                <p className=" whitespace-pre-wrap text-white p-2">{anime.synopsis}</p>
                <h3 className="text-white text-xl font-bold" >More Info</h3>
                <div className="p-2">
                    {anime?.source ?
                        <p className=" whitespace-pre-wrap font-medium text-white">Source: <span className="font-normal"> {anime.source} </span></p>
                        :null}
                    <p className=" whitespace-pre-wrap font-medium text-white">Genders:{anime.genres.map(gen => <span className="font-normal" key={gen.mal_id}> {gen.name} </span> )}</p>
                    {anime?.episodes ?
                        <p className=" whitespace-pre-wrap font-medium text-white">Episodes: <span className="font-normal"> {anime.episodes} </span></p>
                        :null}
                    {anime?.studios?.length ?
                        <p className=" whitespace-pre-wrap font-medium text-white">Studio: <span className="font-normal"> {anime?.studios[0]?.name} </span></p>
                    : null}
                    {anime?.aired?.from ? 
                        <p className=" whitespace-pre-wrap font-medium text-white">Aired: <span className="font-normal"> {anime?.aired?.from?.split("T")[0]} </span></p>
                        :null}
                    {anime?.status ? 
                        <p className=" whitespace-pre-wrap font-medium text-white">Status: <span className="font-normal"> {anime.status} </span></p>
                        :null}
                    {anime?.demographics?.length ?
                    <p className=" whitespace-pre-wrap font-medium text-white">Demographics: <span className="font-normal"> {anime.demographics[0]?.name} </span></p>
                    :null}
                    
                </div>
            </div>
        )
         :<p className="text-center text-xl text-white font-bold">No hay animes encontrados con esta busqueda</p>}
    </Layout>
  )
}

export default Anime