import { style } from "@vanilla-extract/css";

export const styleFooter = style({
    borderTop: "1px solid rgba(255,255,255,0.2)",
    padding: "4rem 0",
})

export const containerFooterStyle = style({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    '@media': {
        '(max-width: 1300px)': {
            padding: "0 15px",
        },
        '(max-width: 991px)': {
            flexDirection: "column",
            alignItems: "center",
        }
    }
})

export const areaLeftFooterStyle = style({
    display: "flex",
    alignItems: "flex-start",
    '@media': {
        '(max-width: 991px)': {
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "3.2rem",
        },
    }
})

export const textFooterStyle = style({
    fontSize: "1.4rem",
    fontWeight: 500,
    '@media': {
        '(max-width: 991px)': {
            marginBottom: "2.4rem"
        },
        '(max-width: 560px)': {
            textAlign: "center",
            maxWidth: "100%",
            width: "100%",
        },
    }
})

export const spanFooterStyle = style({
    flex: 1,
    fontSize: "1.4rem",
    color: "var(--gray-500)",
    lineHeight: "2.1rem",
    maxWidth: "59.3rem",
    marginLeft: "18.6rem",
    '@media': {
        '(max-width: 1200px)': {
            marginLeft: "6.6rem",
        },
        '(max-width: 991px)': {
            marginLeft: 0,
            textAlign: "center",
        },
    }
})