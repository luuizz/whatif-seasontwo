"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { linksHeader } from '@/app/data'
import { detailNavigation, linkNavigation, styleLinksHeader } from './style.css'
import { usePathname } from 'next/navigation'

export default function Navigation() {

    const pathName = usePathname();

  return (
    <ul className={styleLinksHeader}>
        {
            linksHeader.map((item, index) => (
                <li key={index}>
                    <Link href={item.path} className={linkNavigation} title={`Ir para ${item.title}`}>
                        {item.path === pathName && (
                        <motion.div
                        layoutId='selected'
                        className={detailNavigation}   
                        />
                        )}
                        {item.label}
                    </Link>
                </li>
            ))
        }
    </ul>
  )
}
