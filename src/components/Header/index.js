"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import logoMarvel from "@/assets/logo-marvel.png"
import logoCodeboost from "@/assets/logo-codeboost.svg"
import Navigation from './Navigation'
import { HeaderStyle, stylelogoSpace } from './style.css'
import { usePathname } from 'next/navigation'

export default function Header() {

  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const header = document.querySelector('header');
    if (isHomePage) {
      header.classList.add('is-home');
    } else {
      header.classList.remove('is-home');
    }
  }, [isHomePage]);

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
