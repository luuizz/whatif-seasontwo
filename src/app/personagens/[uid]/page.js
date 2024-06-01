import HomeSectionTodosPersonagens from '@/components/Home/SectionAllCharacters'
import TopDetailsSingle from '@/components/SinglePost/TopDetails'
import React from 'react'
import PageWrapper from './PageWrapper'
import { createClient } from '@/prismicio';

export async function generateMetadata({ params }) {
  const client = createClient();
  const page = await client
    .getByUID("personagens", params.uid)
    .catch(() => notFound());
    return {
      title: `What if...? | Projeto prático do Codeboost | ${page.data.meta_title}` || "What if...?",
      description: page.data.meta_description || "",
      keywords: [page.data.meta_keywords || ""],
      twitter: {
          title: `What if...? What if...? | Projeto prático do Codeboost | ${page.data.meta_title}` || "What if...? What if...? | Projeto prático do Codeboost",
      }
    }
}

export default async function PagePersonagem({params}) {

  const client = createClient();
  const page = await client.getByUID("personagens", params.uid);
  const personagens = await client.getAllByType("personagens");

  const personagensFiltrados = personagens.filter(personagem => personagem.uid !== params.uid).slice(0, 7);

  return (
    <>
    <PageWrapper>
        <TopDetailsSingle dataPage={page} />
        <HomeSectionTodosPersonagens dataPage={personagensFiltrados} />
    </PageWrapper>
    </>
  )
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("personagens");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}