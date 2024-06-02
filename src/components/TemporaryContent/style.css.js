import { style } from "@vanilla-extract/css";

export const styleTemporarySection = style({
    padding: "28rem 0",
    '@media': {
        '(max-width: 560px)': {
            padding: "13rem 0",
        }
    }
})

export const containerTemporary = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "0 1.5rem",
    '@media': {
        '(max-width: 768px)': {
            textAlign: "center",
        }
    }
})

export const titleTemporary = style({
    fontSize: "5.6rem",
    marginBottom: "3.2rem"
})

export const textTemporary = style({
    fontSize: "2.1rem",
    opacity: 0.7,
    textAlign: "center",
    maxWidth: "56rem",
})