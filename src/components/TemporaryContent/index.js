import React from 'react'
import { containerTemporary, styleTemporarySection, textTemporary, titleTemporary } from './style.css'

export default function ComponentTemporary() {
  return (
    <section className={styleTemporarySection}>
        <div className={`${containerTemporary} container`}>
            <h1 className={titleTemporary}>Página em construção...</h1>
            <p className={textTemporary}>Dentro de algumas semanas estarei desenvolvendo uma nova página. Não deixe de visitar para conferir o andamento!</p>
        </div>
    </section>
  )
}
