import Image from 'next/image'
import Link from 'next/link'
import { dataCharacter } from '@/app/data'
import { styleCardCharacter } from './style.css'
import { PrismicNextImage } from '@prismicio/next';

export default function CardPersonagem({dataApi}) {

    const data = dataApi;
  return (
    <>
    {
        data.map((card, index) => (
            <div className={styleCardCharacter} key={index}>
                <Link href={`/personagens/${card.uid}`} title={`Acessar informações do personagem ${card.data.nome_personagem}`}>
                    <div className='image'>
                        <PrismicNextImage 
                        field={card.data.imagem_personagem}
                        width={card.data.imagem_personagem.dimensions.width}
                        height={card.data.imagem_personagem.dimensions.height}
                        />
                    </div>
                    <div className='info'>
                        <h3>{card.data.nome_personagem}</h3>
                        <span>What if</span>
                    </div>
                    <span>Marvel Studios</span>
                </Link>
            </div>
        ))
    }
    </>
  )
}
