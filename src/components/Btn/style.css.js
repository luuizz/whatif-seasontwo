import { style } from "@vanilla-extract/css";

export const btnMain = style({
    display: "inline-block",
    padding: "1.5rem 5.2rem",
    backgroundColor: "var(--red-900)",
    color: "var(--white)",
    fontSize: "1.6rem",
    lineHeight: "2.4rem",
    transition: "filter .3s ease",
    borderRadius: "0.5rem",
    ":hover": {
        filter: "brightness(0.8)",
    }
})