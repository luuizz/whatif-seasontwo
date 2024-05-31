import React from 'react'
import CardPersonagem from './CardPersonagem'
import Image from 'next/image'
import logoMarvel from "@/assets/logo-marvel.png"
import { cardMarvel, styleCharacterSection, styleTitleCharacter } from './style.css'

export default function HomeSectionTodosPersonagens() {
  return (
    <section className={styleCharacterSection}>
        <div className="container">
            <div className='title'>
                <span>What if?</span>
                <h2 className={styleTitleCharacter}>Personagens Marvel</h2>
            </div>

            <div className='all-characters'>
                <CardPersonagem />
                <div className={`${cardMarvel} marvel`}>
                    <Image src={logoMarvel} alt='logo da marvel' />
                </div>
            </div>
        </div>
    </section>
  )
}
