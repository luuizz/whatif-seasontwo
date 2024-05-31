import iconFacebook from "@/assets/icon-facebook.svg"
import iconInstagram from "@/assets/icon-instagram.svg"
import iconTwitter from "@/assets/icon-twitter.svg"
import killmonger from "@/assets/character-killmonger.png"
import captainCarter  from "@/assets/character-captain-carter.jpg"
import thor  from "@/assets/character-thor.jpg"


export const linksHeader = [
    {
        path: "/",
        label: "Início",
        title: "Página inicial",
    },
    {
        path: "/personagens",
        label: "Todos os Personagens",
        title: "Personagens",
    },
    {
        path: "/trailers",
        label: "Trailers",
        title: "Trailers",
    },
]

export const socials = [
    {
        title: "Instagram",
        icon: iconInstagram,
        url: "https://www.instagram.com/disneyplusbr/",
    },
    {
        title: "Facebook",
        icon: iconFacebook,
        url: "https://www.facebook.com/DisneyPlusBR",
    },
    {
        title: "Twitter",
        icon: iconTwitter,
        url: "https://twitter.com/DisneyPlusBR",
    },
]

export const dataCharacter = [
    {
        name: "Killmonger",
        slug: "killmonger",
        image: killmonger,
    },
    {
        name: "Captã Carter",
        slug: "capta-carter",
        image: captainCarter,
    },
    {
        name: "Thor",
        slug: "thor",
        image: thor,
    },
]