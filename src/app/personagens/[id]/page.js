import TopDetailsSingle from '@/components/SinglePost/TopDetails'
import React from 'react'

export default function PagePersonagem({params}) {
  return (
    <div>
        <h1>Personagem {params.id}</h1>
        <TopDetailsSingle />
    </div>
  )
}
