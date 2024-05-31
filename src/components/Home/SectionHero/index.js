import React from 'react'
import Socials from './Socials'
import Video from './Video'
import Btn from '@/components/Btn'
import { StyleHeroSection, contentStyleHero } from './style.css'

export default function HomeSectionHero() {
  return (
    <section className={StyleHeroSection}>
      <div className="container">
        <Socials />

        <div className="main">
          <div className={`${contentStyleHero} left`}>
            <h3>Segunda temporada</h3>
            <h1>Marvels WHAT IF... ?</h1>
            <p>Disponível no Disney+. What If...? é uma série de animação que leva o público para um terreno desconhecido ao contar de uma forma alternativa, momentos cruciais do Universo Cinematográfico Marvel, imaginando o que teria acontecido aos super-heróis fosse totalmente diferente e se passasse em outra realidade.</p>
            <Btn 
            url="https://www.disneyplus.com/pt-br/series/what-if/7672ZVj1ZxU9" 
            label="Saiba mais"
            title="Acessar"
            />
          </div>
          <Video />
        </div>
      </div>
    </section>
  )
}
