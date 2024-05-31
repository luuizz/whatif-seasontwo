import Image from 'next/image'
import React from 'react'
import killmonger from "@/assets/character-killmonger.png"
import { infoDetail, styleAreaInfo, styleContainer, styleImageDetail, styleSectionDetails } from './style.css'

export default function TopDetailsSingle() {
  return (
    <section className={styleSectionDetails}>
      <div className={`${styleContainer} container`}>
        <div className={`${styleImageDetail} image`}>
          <Image src={killmonger} alt='Imagem do personagem' />
        </div>

        <div className={`${styleAreaInfo} info`}>
          <span>A história</span>
          <div className={infoDetail}>
            <h1>Killmonger</h1>
            <p>Killmonger, o formidável antagonista que resgatou Tony Stark e deixou uma marca indelével no último episódio da primeira temporada. Sua astúcia calculista alterou o curso da história de forma surpreendente. Sua presença sombria trouxe uma reviravolta dramática à narrativa, desafiando todas as expectativas e explorando sua natureza complexa e sinistra</p>
          </div>
        </div>
      </div>
    </section>
  )
}
