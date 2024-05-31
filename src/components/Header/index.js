import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header>
        <div className="container">
            <Link href="/personagem/marvel">
                Marvel
            </Link>

            <Link href="/">Voltar para home</Link>
        </div>
    </header>
  )
}
