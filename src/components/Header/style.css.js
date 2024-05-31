import { style } from "@vanilla-extract/css";

export const HeaderStyle = style({
    position: "absolute",
    top: "0",
    width: "100%",
    height: "var(--header-height)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
    display: "flex",
    alignItems: "center",
    zIndex: 2025,
    ".container": {
        height: "100%",
        borderLeft: "1px solid rgba(255,255, 255, 0.20)",
        borderRight: "1px solid rgba(255,255, 255, 0.20)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "nav": {
            display: "flex",
            paddingRight: "2.4rem",
            height: "100%",
            ".code": {
                borderLeft: "1px solid rgba(255,255, 255, 0.20)",
                paddingLeft: "2.4rem",
                display: "flex",
                alignItems: "center"
            }
        }
    }
})

export const stylelogoSpace = style({
    paddingLeft: "2.4rem",
    position: "relative",
    "::after": {
        content: "",
        backgroundColor: "var(--red-800)",
        boxShadow: "0px 2px 4px 0px rgba(255, 4, 13, 0.16)",
        position: "absolute",
        bottom: "-2.8rem",
        width: "10.4rem",
        height: "0.1rem",
        left: "2.4rem",
        zIndex: 50
    },
})

export const styleLinksHeader = style({
    display: "flex",
    alignItems: "center",
    gap: 24,
    paddingRight: "4rem",
    "li": {
        "a": {
            fontSize: "1.4rem",
            color: "var(--gray-100)",
            position: "relative",
            "div": {
                position: "absolute",
                left: "0rem",
                top: "100%",
                display: "block",
                height: "0.1rem",
                backgroundColor: "var(--red-900)",
                width: "100%",
            }
        },
    },
})