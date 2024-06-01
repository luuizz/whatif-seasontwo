import Image from 'next/image'
import iconPlay from "@/assets/icon-play-video.svg"
import { StylePlay, btnPlayStyle, tagSpanStyleVideo, videoPlayStyle } from './style.css'

export default function Video() {
  return (
    <div className={`${StylePlay} video`}>
        <span className={tagSpanStyleVideo}>Asissta ao vídeo</span>
        <button className={videoPlayStyle} title='Reproduzir vídeo'>
            <div className={`${btnPlayStyle} play`}>
                <Image src={iconPlay} alt='Ícone de reproduzir' />
            </div>
        </button>
    </div>
  )
}
