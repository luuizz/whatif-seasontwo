"use client"
import Image from 'next/image'
import iconPlay from "@/assets/icon-play-video.svg"
import { StylePlay, btnPlayStyle, tagSpanStyleVideo, videoPlayStyle } from './style.css'
import { useState } from 'react'
import ModalVideo from './ModalVideo';

export default function Video({ dataComponent }) {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <>
    <div className={`${StylePlay} video`}>
        <span className={tagSpanStyleVideo}>Asissta ao vídeo</span>
        <button 
        style={{background: `url(${dataComponent.thumb_trailer.url}) no-repeat center center`}} 
        className={videoPlayStyle} 
        title='Reproduzir vídeo'
        onClick={toggleModal}
        >
            <div className={`${btnPlayStyle} play`}>
                <Image src={iconPlay} alt='Ícone de reproduzir' />
            </div>
        </button>
    </div>
    {showModal && <ModalVideo videoId={dataComponent.id_do_video} closeModal={closeModal} />}
  </>
  )
}
