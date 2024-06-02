import Image from 'next/image'
import React from 'react'
import killmonger from "@/assets/character-killmonger.png"
import { infoDetail, spanAreaInfo, styleAreaInfo, styleContainer, styleImageDetail, styleSectionDetails, textDetail, titleDetail } from './style.css'
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';

const components = {
  paragraph: ({children}) => (
    <p className={textDetail}>{children}</p>
  )
}


export default async function TopDetailsSingle({ dataPage }) {

  const data = dataPage.data;
  return (
    <section className={styleSectionDetails}>
      <div className={`${styleContainer} container`}>
        <div className={`${styleImageDetail} image`}>
          <PrismicNextImage 
          field={data.imagem_personagem}
          />
        </div>

        <div className={`${styleAreaInfo} info`}>
          <span className={spanAreaInfo}>A história</span>
          <div className={infoDetail}>
            <h1 className={titleDetail} >{data.nome_personagem}</h1>
            <PrismicRichText 
            field={data.descricao_personagem} 
            components={components}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
