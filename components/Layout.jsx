import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import useApp from '../hooks/useApp'
import Buscador from './Buscador'

const Layout = ({children}) => {
    const {llamado} = useApp()
  return (
    <div>
        <Head>
            <title>Anime Search</title>
            <meta name="description" content="Anime search page"/>
            <meta name="keywords" content="Anime, search, japon"/>
        </Head>
        <header className='w-full pb-4'>
            <nav className='flex flex-col md:flex-row items-center w-full justify-center'>
                <Link onClick={llamado} className='text-3xl font-bold text-white pl-2 hover:text-gray-200 transition-colors' href={"/"}>AnimeSearch</Link>
                <div>
                    <Buscador />
                </div>
            </nav>
        </header>
        <main className='w-full'>
            {children}
        </main>
    </div>
  )
}

export default Layout