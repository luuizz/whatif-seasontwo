import Image from 'next/image'
import NotFoundImage from "@/assets/img-404.png"
import Btn from '../Btn'
import { container404Style, heading404Style, image404Style, styleSection404, text404Style } from './style.css'

export default function Content404() {
  return (
    <section className={styleSection404}>
    <div className={`${container404Style} container`}>
      <h1 className={heading404Style}>Whoops, essa página sumiu.</h1>
      <p className={text404Style}>OHHH, parece que não conseguimos encontrar a página que você está procurando. Tente voltar à página anterior ou consulte nossa Central de Ajuda para obter mais informações.</p>
      <Btn url="/" label="Voltar para home" title="Voltar para página inicial" />
      <Image className={image404Style} src={NotFoundImage} alt="Imagem da página 404 com vários frames de diferentes filmes" title="404" />
    </div>
  </section>
  )
}
