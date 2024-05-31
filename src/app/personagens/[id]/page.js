import HomeSectionTodosPersonagens from '@/components/Home/SectionAllCharacters'
import TopDetailsSingle from '@/components/SinglePost/TopDetails'
import React from 'react'

export default function PagePersonagem({params}) {
  return (
    <>
        <TopDetailsSingle />
        <HomeSectionTodosPersonagens />
    </>
  )
}
