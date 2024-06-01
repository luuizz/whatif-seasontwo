import HomeSectionTodosPersonagens from '@/components/Home/SectionAllCharacters'
import TopDetailsSingle from '@/components/SinglePost/TopDetails'
import React from 'react'
import PageWrapper from './PageWrapper'

export default function PagePersonagem({params}) {
  return (
    <>
    <PageWrapper>
        <TopDetailsSingle />
        <HomeSectionTodosPersonagens />
    </PageWrapper>
    </>
  )
}
