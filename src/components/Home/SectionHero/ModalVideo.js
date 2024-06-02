import React, { Suspense } from 'react'
import btnClose from "@/assets/icon-close.svg"
import Image from 'next/image'
import { btnCloseModal, contentModalStyle, iframeModalStyle, modalStyle, styleOverlayModal, topModalStyle } from './style.css'

export default function ModalVideo({ videoId, closeModal }) {
  return (
    <div className={`${styleOverlayModal} overlay`}>
      <div className={`${modalStyle} modal`}>
        <div className={`${topModalStyle} top`}>
          <button onClick={closeModal} className={btnCloseModal}>
            <Image src={btnClose} alt='Ícone de fechar' />
          </button>
        </div>
        <div className={`${contentModalStyle} content`}>
          <iframe
            className={iframeModalStyle}
            src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=https://whatif-seasontwo.vercel.app/`}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            width="560"
            height="315"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}
