import { keyframes, style } from "@vanilla-extract/css";

const animeUp = keyframes({
    "100%": {
        opacity: 1,
        transform: "initial",
    },
})

export const StyleHeroSection = style({
    position: "relative",
    zIndex: 1,
    width: "100%",
    height: "73.1rem",
    backgroundAttachment: "fixed !important",
    backgroundSize: "cover !important",
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
    '@media': {
        '(max-width: 991px)': {
            height: "fit-content",
            backgroundPositionX: "right !important"
        },
    },
})

export const containerStyleHero = style({
    display: "flex",
    alignItems: "flex-start",
    '@media': {
        '(max-width: 991px)': {
            flexDirection: "column",
        },
    }
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
    borderRight: "1px solid rgba(255,255,255,0.2)",
    "@media": {
        "(max-width: 1200px)": {
            paddingLeft: "4rem",
            paddingRight: "1.5rem",
        },
        "(max-width: 991px)": {
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            padding: "3.2rem 1.5rem",
            border: 0,
        }
    }
})

export const StyleSocials = style({
    width: "7.2rem",
    height: "100%",
    borderLeft: "1px solid rgba(255,255,255,0.2)",
    borderRight: "1px solid rgba(255,255,255,0.2)",
    '@media': {
        '(max-width: 991px)': {
            width: "100%",
            border: 0,
        },
    }
})

export const areaListSocial = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2.4rem 0",
    borderBottom: "1px solid rgba(255,255,255,0.2)",
    '@media': {
        '(max-width: 991px)': {
            flexDirection: "row",
            justifyContent: "center",
            padding: "2rem 0"
        },
    }
})

export const listSocialItem = style({
    "&:not(:last-child)": {
        marginBottom: "2.4rem", 
    },
    '@media': {
        '(max-width: 991px)': {
            "&:not(:last-child)": {
                marginRight: "3.2rem", 
                marginBottom: 0,
            },
        }
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
    '@media': {
        '(max-width: 991px)': {
            maxWidth: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            paddingBottom: "6.4rem",
        }
    }
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
    marginBottom: "3.2rem",
    '@media': {
        '(max-width: 560px)': {
            maxWidth: "100%",
            width: "100%",
        }
    }
})

export const styleOverlayModal = style({
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    transition: "all 0.3s ease 0s",
    zIndex: 999
})

export const modalStyle = style({
    width: "56rem",
    height: "auto",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
})

export const topModalStyle = style({
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 32,

})

export const btnCloseModal = style({
    backgroundColor: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderRadius: 5,
    transition: "background .3s ease",
    ":hover": {
        backgroundColor: "var(--white)"
    }
})

export const contentModalStyle = style({

})

export const iframeModalStyle = style({
    borderRadius: 5,
    border: 0,
    opacity: 0,
    transform: "translateY(2rem)",
    animation: `0.3s ease 0s 1 normal forwards running ${animeUp}`
})