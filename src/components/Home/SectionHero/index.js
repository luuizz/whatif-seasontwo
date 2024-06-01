import React from 'react'
import Socials from './Socials'
import Video from './Video'
import Btn from '@/components/Btn'
import { StyleHeroSection, containerStyleHero, contentStyleHero, styleMainAreaHero, tagTitleStyle, textHeroStyle, titleHeroStyle } from './style.css'
import { PrismicRichText } from '@prismicio/react'
import heroBackgroundDesk from "@/assets/bg-desk.jpg"

const components = {
  paragraph: ({children}) => (
    <p className={textHeroStyle}>{children}</p>
  )
}

export default function HomeSectionHero({ dataPage }) {

  const dataAPi = dataPage.data;

  return (
    <section className={StyleHeroSection} style={{background: `url(${heroBackgroundDesk.src}) no-repeat top center`}}>
      <div className={`${containerStyleHero} container`}>
        <Socials dataComponentSocials={dataPage} />

        <div className={`${styleMainAreaHero} main`}>
          <div className={`${contentStyleHero} left`}>
            <h3 className={tagTitleStyle}>{dataAPi.subtitulo}</h3>
            <h1 className={titleHeroStyle}>{dataAPi.titulo_hero}</h1>
            <PrismicRichText field={dataAPi.texto_hero} components={components} />
            <Btn 
            url={dataAPi.link_button_hero.url} 
            label={dataAPi.label_button_hero}
            title="Acessar"
            />
          </div>
          <Video dataComponent={dataAPi} />
        </div>
      </div>
    </section>
  )
}
