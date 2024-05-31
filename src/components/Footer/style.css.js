import { style } from "@vanilla-extract/css";

export const styleFooter = style({
    borderTop: "1px solid rgba(255,255,255,0.2)",
    padding: "4rem 0",
    ".container": {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        ".left": {
            display: "flex",
            alignItems: "flex-start",
            "p": {
                fontSize: "1.4rem",
                fontWeight: 500,
            },
            "span": {
                flex: 1,
                fontSize: "1.4rem",
                color: "var(--gray-500)",
                lineHeight: "2.1rem",
                maxWidth: "59.3rem",
                marginLeft: "18.6rem"
            }
        },
    }
})