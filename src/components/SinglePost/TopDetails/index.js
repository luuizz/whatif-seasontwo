import Image from 'next/image'
import React from 'react'
import killmonger from "@/assets/character-killmonger.png"
import { infoDetail, styleAreaInfo, styleContainer, styleImageDetail, styleSectionDetails } from './style.css'
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';

const components = {
  paragraph: ({children}) => (
    <p>{children}</p>
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
          <span>A história</span>
          <div className={infoDetail}>
            <h1>{data.nome_personagem}</h1>
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
