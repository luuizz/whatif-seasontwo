import Image from 'next/image'
import iconPlay from "@/assets/icon-play-video.svg"
import { StylePlay } from './style.css'

export default function Video() {
  return (
    <div className={`${StylePlay} video`}>
        <span>Asissta ao vídeo</span>
        <button title='Reproduzir vídeo'>
            <div className='play'>
                <Image src={iconPlay} alt='Ícone de reproduzir' />
            </div>
        </button>
    </div>
  )
}
