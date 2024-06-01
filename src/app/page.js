import HomeSectionTodosPersonagens from "@/components/Home/SectionAllCharacters";
import HomeSectionHero from "@/components/Home/SectionHero";
import { createClient } from "@/prismicio";

export default async function Home() {

  const client = createClient();

  const page = await client.getSingle("home");
  const personagens = await client.getAllByType("personagens");
  const listagemPersonagens = personagens.slice(0, 7);

  return (
    <>
    <HomeSectionHero dataPage={page} />
    <HomeSectionTodosPersonagens dataPage={listagemPersonagens} />
    </>
  );
}
