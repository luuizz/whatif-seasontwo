"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logoMarvel from "@/assets/logo-marvel.png"
import logoCodeboost from "@/assets/logo-codeboost.svg"
import Navigation from './Navigation'
import { HeaderStyle, areaCodeHeaderStyle, asideContainerStyle, asideGroupList, asideMenuStyle, containerHeaderStyle, menuHeaderStyle, navHeaderStyle, stylelogoSpace } from './style.css'
import { usePathname } from 'next/navigation'
import Hamburger from 'hamburger-react'
import NavMobile from './NavMobile'

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

  const [isOpen, setOpen] = useState(false);

  const closeMenu = () => {
      setOpen(false);
  };

  return (
    <>
    <header className={HeaderStyle}>
        <div className={`${containerHeaderStyle} container`}>
          <div className={stylelogoSpace}>
            <Link href="/" title='Página inicial'>
              <Image src={logoMarvel} alt='Logo da Marvel Studios' />
            </Link>
          </div>

          <nav className={navHeaderStyle}>
            <Navigation />
            <div className={`${areaCodeHeaderStyle} code`}>
              <Image src={logoCodeboost} title='Logo do Codeboost' alt='Logo do Codeboost' />
            </div>
          </nav>
          <Hamburger label="Mostrar menu" toggled={isOpen} toggle={setOpen} />  
        </div>
    </header>
    <aside className={`${asideMenuStyle} ${isOpen ? 'open' : ''}`}>
      <div className={asideContainerStyle}>
      <nav className={asideGroupList}>
        <NavMobile closeMenu={closeMenu} />
        <div className="code">
          <Image src={logoCodeboost} title='Logo do Codeboost' alt='Logo do Codeboost' />
        </div>
        </nav>
      </div>
    </aside>
    </>
  )
}
