import { socials } from '@/app/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { StyleSocials, areaListSocial, listSocialItem } from './style.css'

export default function Socials() {
  return (
    <div className={`${StyleSocials} socials`}>
        <ul className={areaListSocial}>
            {socials.map((socialLink, index) => (
            <li className={listSocialItem} key={index}>
                <Link href={socialLink.url} title={`Ir para ${socialLink.title}`}>
                    <Image src={socialLink.icon} alt={`Ícone do ${socialLink.title}`} />
                </Link>
            </li>
            ))}
        </ul>
    </div>
  )
}
