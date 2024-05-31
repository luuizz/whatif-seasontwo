import Image from 'next/image'
import Link from 'next/link'
import { dataCharacter } from '@/app/data'
import { styleCardCharacter } from './style.css'

export default function CardPersonagem({params}) {
  return (
    <>
    {
        dataCharacter.map((card, index) => (
            <div className={styleCardCharacter} key={index}>
                <Link href={`/personagens/${card.slug}`} title={`Acessar informações do personagem ${card.name}`}>
                    <div className='image'>
                        <Image src={card.image} alt='Personagem'/>
                    </div>
                    <div className='info'>
                        <h3>{card.name}</h3>
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
