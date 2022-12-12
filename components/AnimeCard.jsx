import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AnimeCard = ({anime}) => {
  return (
    <Link href={`/anime?id=${anime.mal_id}`} className='min-w-0 mx-2 md:mx-0 w-96 md:w-1/4 lg:w-1/6 bg-white rounded-2xl hover:bg-gray-200 transition-all hover:scale-110' title={anime?.title}>
        {anime.images ? (
          <Image  className='w-full h-72 object-fill rounded-t-xl ' height={400} width={900} src={`${anime.images.jpg.image_url || anime.images.webp.image_url}`} alt={`anime.title image`} priority />
        ) : null}
        <h2 className='p-2 whitespace-pre overflow-ellipsis overflow-hidden'>{anime?.title}</h2>
    </Link>
  )
}

export default AnimeCard