import Image from "next/image";
import LogoCodeboost from "@/assets/logo-codeboost.svg"
import { areaLeftFooterStyle, containerFooterStyle, spanFooterStyle, styleFooter, textFooterStyle } from "./style.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styleFooter}>
        <div className={`${containerFooterStyle} container`}>
            <div className={`${areaLeftFooterStyle} left`}>
              <p className={textFooterStyle}>©{year} CodeBoost</p>

              <span className={spanFooterStyle}>O curso Codeboost foi desenvolvido por William Moreira. As vagas são distribuídas por turmas de forma sazonal. Caso perca alguma oportunidade é só aguardar a próxima turma que normalmente acontece dentro do período de 3 a 4 meses.</span>
            </div>

            <div className="right">
              <Image src={LogoCodeboost} title="Logo do Codeboost" alt="Logo do Codeboost" />
            </div>
        </div>
    </footer>
  )
}
