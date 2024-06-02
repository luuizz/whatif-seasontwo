import { style } from "@vanilla-extract/css";

export const styleCharacterSection = style({
    padding: "5.6rem 0 7.2rem",
    '@media': {
        '(max-width: 991px)': {
            paddingTop: "6rem",
        }
    }
})

export const containerAllCharacterStyle = style({
    '@media': {
        '(max-width: 1300px)': {
            padding: "0 1.5rem",
        }
    }
})

export const styleTopCharacterAll = style({
    display: "flex",
    alignItems: "center",
    marginBottom: "5.6rem",
    '@media': {
        '(max-width: 991px)': {
            justifyContent: "center",
        },
    }
})

export const styleTextCharacterAll = style({
    fontSize: "1.8rem",
    lineHeight: "2.7rem",
    opacity: 0.4,
    marginRight: "11.3rem",
    '@media': {
        '(max-width: 560px)': {
            marginRight: "4.3rem",
        }
    }
})

export const styleListCharactersAll = style({
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gridGap: "4rem 3.3rem",
    "@media": {
        "(max-width: 1200px)": {
            gridTemplateColumns: "repeat(3, 1fr)",
        },
        "(max-width: 991px)": {
            gridTemplateColumns: "repeat(2, 1fr)",
        },
        "(max-width: 560px)": {
            gridTemplateColumns: "1fr",
        },
    }
})

export const styleTitleCharacter = style({
    position: "relative",
    fontSize: "2.5rem",
    lineHeight: "3.5rem",
    maxWidth: "21.6rem",
    paddingLeft: "1.6rem",
    ":before": {
        content: "",
        position: "absolute",
        top: "0.55rem",
        left: 0,
        width: "0.2rem",
        height: "5.9rem",
        backgroundColor: "var(--red-800)",
    }
})

export const styleCardCharacter = style({
    width: "100%",
    maxWidth: "28rem",
    ":hover": {
        "a": {
            ".image": {
                "img": {
                    transform: "scale(1.05)",
                },
            },
            ".info": {
                "h3": {
                    color: "var(--red-800)",
                }
            },
        },
    },
    "a": {
        display: "block",
        ".image": {
            width: "100%",
            height: "37.2rem",
            marginBottom: "1.6rem",
            borderRadius: "0.5rem",
            overflow: "hidden",
            "img": {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform .3s ease",
            },
        },
        ".info": {
            display: "flex",
            justifyContent: "space-between",
            "h3": {
                transition: "color .3s ease",
                fontSize: "1.8rem",
                fontWeight: 600,
                lineHeight: "120%",
                color: "var(--white)",
                width: "100%",
                maxWidth: "23rem",
                marginBottom: "0.4rem",
            }
        },
        "span": {
            fontWeight: 400,
            fontSize: "1.4rem",
            lineHeight: "150%",
            color: "var(--gray-500)"
        }
    },
    "@media": {
        "(max-width: 1200px)": {
            maxWidth: "100%",
        }
    }
})

export const cardMarvel = style({
    width: "28rem",
    height: "36.8rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid var(--gray-900)",
    borderRadius: 4,
    '@media': {
        '(max-width: 1200px)': {
            width: "100%",
        },
        "(max-width: 991px)": {
            height: "100%",
        },
        "(max-width: 560px)": {
            height: "48rem",
        }
    }
})