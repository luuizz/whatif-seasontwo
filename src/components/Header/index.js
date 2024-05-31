import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logoMarvel from "@/assets/logo-marvel.png"
import logoCodeboost from "@/assets/logo-codeboost.svg"
import Navigation from './Navigation'
import { HeaderStyle, stylelogoSpace } from './style.css'

export default function Header() {
  return (
    <header className={HeaderStyle}>
        <div className="container">
          <div className={stylelogoSpace}>
            <Link href="/" title='Página inicial'>
              <Image src={logoMarvel} alt='Logo da Marvel Studios' />
            </Link>
          </div>

          <nav>
            <Navigation />

            <div className="code">
              <Image src={logoCodeboost} title='Logo do Codeboost' alt='Logo do Codeboost' />
            </div>
          </nav>
        </div>
    </header>
  )
}
