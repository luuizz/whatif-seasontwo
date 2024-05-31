import { style } from "@vanilla-extract/css";

export const styleSectionDetails = style({
    height: "63.1rem",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
})

export const styleContainer = style({
    display: "flex",
    alignItems: "center",
    height: "100%",
    borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
    borderRight: "1px solid rgba(255, 255, 255, 0.2)",
})

export const styleImageDetail = style({
    borderRadius: 5,
    overflow: "hidden",
    height: "100%",
})

export const styleAreaInfo = style({
    flex: "1 1 0%",
    maxWidth: "65rem",
    marginLeft: "3.2rem",
    display: "flex",
    "span": {
        display: "block",
        marginTop: "2rem",
        fontSize: "1.8rem",
        lineHeight: "2.7rem",
        color: "var(--gray-400)",
        opacity: 0.6,
    }
})

export const infoDetail = style({
    position: "relative",
    flex: "1 1 0%",
    maxWidth: "54.6rem",
    paddingLeft: "2.7rem",
    marginLeft: "1.9rem",
    "h1": {
        fontSize: "6.1rem",
        lineHeight: "7.1rem",
        marginBottom: "1.3rem"
    },
    "p": {
        color: "var(--gray-400)",
        fontSize: "1.6rem",
        lineHeight: "2.4rem",
    },
    ":before": {
        content: "",
        position: "absolute",
        top: 12,
        left: 0,
        width: "0.4rem",
        height: "4.6rem",
        backgroundColor: "var(--red-800)",
    }
})