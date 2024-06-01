import Link from 'next/link'
import { StyleSocials, areaListSocial, listSocialItem } from './style.css'
import { PrismicNextImage } from '@prismicio/next'

export default function Socials({ dataComponentSocials }) {

  const data = dataComponentSocials.data;

  return (
    <div className={`${StyleSocials} socials`}>
        <ul className={areaListSocial}>
            {data.cadastrar_redes_sociais.map((item, index) => (
            <li className={listSocialItem} key={index}>
                <Link href={item.link_social.url} title={`Ir para ${item.title_social}`}>
                    <PrismicNextImage
                        field={item.icone_social} 
                        width={item.icone_social.dimensions.width}
                        height={item.icone_social.dimensions.height}
                    />
                </Link>
            </li>
            ))}
        </ul>
    </div>
  )
}
