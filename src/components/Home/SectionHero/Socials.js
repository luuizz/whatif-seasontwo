import { socials } from '@/app/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { StyleSocials } from './style.css'

export default function Socials() {
  return (
    <div className={`${StyleSocials} socials`}>
        <ul>
            {socials.map((socialLink, index) => (
            <li key={index}>
                <Link href={socialLink.url} title={`Ir para ${socialLink.title}`}>
                    <Image src={socialLink.icon} alt={`Ícone do ${socialLink.title}`} />
                </Link>
            </li>
            ))}
        </ul>
    </div>
  )
}
