import Image from 'next/image'

const MainCarrousel = () => {
  return (
    <div className="slider rounded-md ">
    <ul>
        <li>
            <Image height={400} width={800} alt="carrousel image 1" priority src="/carrousel/1.jpg"/>
        </li>
        <li>
            <Image height={400} width={800} alt="carrousel image 2" priority src="/carrousel/2.jpg"/>
        </li>
        <li>
            <Image height={400} width={800} alt="carrousel image 3" priority src="/carrousel/3.jpg"/>
        </li>
        <li>
            <Image height={400} width={800} alt="carrousel image 4" priority src="/carrousel/4.jpg"/>
        </li>
        <li>
            <Image height={400} width={800} alt="carrousel image 5" priority src="/carrousel/5.jpg"/>
        </li>
        <li>
            <Image quality={100} height={400} width={800} alt="carrousel image 6" priority  src="/carrousel/6.jpg"/>
        </li>
    </ul>
</div>
  )
}

export default MainCarrousel