import { style } from "@vanilla-extract/css";


export const StyleHeroSection = style({
    position: "relative",
    zIndex: 1,
    width: "100%",
    height: "73.1rem",
    // background: `url(${heroBackgroundDesk.src}) no-repeat top center`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    paddingTop: "var(--header-height)",
    display: "flex",
    "::after": {
        content: "",
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "30rem",
        backgroundImage: "linear-gradient(transparent, #000000)",
        zIndex: -1
    },
})

export const containerStyleHero = style({
    display: "flex",
    alignItems: "flex-start",
})

export const styleMainAreaHero = style({
    height: "100%",
    paddingLeft: "9.6rem",
    paddingRight: "7.1rem",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    flex: 1,
    paddingBottom: "3.2rem",
    borderRight: "1px solid rgba(255,255,255,0.2)"
})

export const StyleSocials = style({
    width: "7.2rem",
    height: "100%",
    borderLeft: "1px solid rgba(255,255,255,0.2)",
    borderRight: "1px solid rgba(255,255,255,0.2)",
})

export const areaListSocial = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2.4rem 0",
    borderBottom: "1px solid rgba(255,255,255,0.2)",
})

export const listSocialItem = style({
    "&:not(:last-child)": {
        marginBottom: "2.4rem", 
    }
})

export const StylePlay = style({
    width: "100%",
    maxWidth: "31.2rem",
})

export const tagSpanStyleVideo = style({
    display: "block",
    textTransform: "uppercase",
    lineHeight: "1.8rem",
    fontSize: "1.2rem",
    color: "var(--gray-100)",
    marginBottom: "1.4rem",
})

export const videoPlayStyle = style({
    width: "100%",
    height: "17.9rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "1rem",
    backgroundSize: "cover",
    ":hover": {
        ".play": {
            transform: "scale(1.1)",
        }   
    }
})

export const btnPlayStyle = style({
    width: "4.7rem",
    height: "4.7rem",
    background: "rgba(19,19,19,0.8)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(0.25rem)",
    transition: "transform .3s ease",
})

export const contentStyleHero = style({
    flex: 1,
    maxWidth: "57.4rem",
    paddingBottom: "10.1rem",
})

export const tagTitleStyle = style({
    fontSize: "1.4rem",
    fontWeight: 700,
    letterSpacing: "0.133rem",
    color: "#FFA800",
    textTransform: "uppercase",
    lineHeight: "2.1rem",
    marginBottom: "0.8rem",
})

export const titleHeroStyle = style({
    fontWeight: 600,
    fontSize: "6.1rem",
    lineHeight: "112%",
    marginBottom: "2.4rem",
    maxWidth: "40rem",
})

export const textHeroStyle = style({
    fontSize: "1.6rem",
    color: "var(--gray-200)",
    maxWidth: "49rem",
    marginBottom: "3.2rem"
})