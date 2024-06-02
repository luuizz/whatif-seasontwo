import React from 'react'
import CardPersonagem from './CardPersonagem'
import Image from 'next/image'
import logoMarvel from "@/assets/logo-marvel.png"
import { cardMarvel, containerAllCharacterStyle, styleCharacterSection, styleListCharactersAll, styleTextCharacterAll, styleTitleCharacter, styleTopCharacterAll } from './style.css'

export default function HomeSectionTodosPersonagens({ dataPage }) {

  return (
    <section className={styleCharacterSection}>
        <div className={`${containerAllCharacterStyle} container`}>
            <div className={`${styleTopCharacterAll} title`}>
                <span className={styleTextCharacterAll}>What if?</span>
                <h2 className={styleTitleCharacter}>Personagens Marvel</h2>
            </div>

            <div className={`${styleListCharactersAll} all-characters`}>
                <CardPersonagem dataApi={dataPage} />
                <div className={`${cardMarvel} marvel`}>
                    <Image src={logoMarvel} alt='logo da marvel' />
                </div>
            </div>
        </div>
    </section>
  )
}
