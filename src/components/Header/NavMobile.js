import Link from 'next/link'
import React from 'react'
import { linksHeader } from '@/app/data'
import { asideListItem } from './style.css'
import { usePathname } from 'next/navigation'

export default function NavMobile({ closeMenu }) {

    const pathName = usePathname();

  return (
    <>
        {
            linksHeader.map((item, index) => (
                <Link
                key={index}
                onClick={closeMenu} 
                href={item.path} 
                title={`Ir para ${item.title}`}
                className={asideListItem}
                >
                    {item.label}
                </Link>
            ))
        }
    </>
  )
}