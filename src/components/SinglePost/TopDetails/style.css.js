import { style } from "@vanilla-extract/css";

export const styleSectionDetails = style({
    height: "63.1rem",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    '@media': {
        '(max-width: 991px)': {
            height: "fit-content",
            padding: "6rem 0",
        }
    }
})

export const styleContainer = style({
    display: "flex",
    alignItems: "center",
    height: "100%",
    borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
    borderRight: "1px solid rgba(255, 255, 255, 0.2)",
    '@media': {
        '(max-width: 1300px)': {
            padding: "0 1.5rem",
        },
        '(max-width: 991px)': {
            flexDirection: "column",
            height: "unset",
            width: "100%",
            border: 0,
        }
    }
})

export const styleImageDetail = style({
    borderRadius: 5,
    overflow: "hidden",
    height: "100%",
    '@media': {
        '(max-width: 1100px)': {
            height: "85%",
        },
        '(max-width: 991px)': {
            height: "100%",
            width: "100%",
            maxWidth: "39rem",
            "img": {
                obectFit: "cover",
            }
        },
        '(max-width: 991px)': {
            height: "unset",
            marginBottom: "4.8rem",
            "img": {
                height: "fit-content",
            }
        },
    }
})

export const styleAreaInfo = style({
    flex: "1 1 0%",
    maxWidth: "65rem",
    marginLeft: "3.2rem",
    display: "flex",
    '@media': {
        '(max-width: 991px)': {
            flexDirection: "column",
            alignItems: "center",
            marginLeft: 0,
            width: "100%",
            maxWidth: "100%",
            flex: "unset",
        }
    }
})

export const spanAreaInfo = style({
    display: "block",
    marginTop: "2rem",
    fontSize: "1.8rem",
    lineHeight: "2.7rem",
    color: "var(--gray-400)",
    opacity: 0.6,
    '@media': {
        '(max-width: 991px)': {
            marginTop: 0,
            marginBottom: "1.6rem"
        }
    }
})

export const infoDetail = style({
    position: "relative",
    flex: "1 1 0%",
    maxWidth: "54.6rem",
    paddingLeft: "2.7rem",
    marginLeft: "1.9rem",
    ":before": {
        content: "",
        position: "absolute",
        top: 12,
        left: 0,
        width: "0.4rem",
        height: "4.6rem",
        backgroundColor: "var(--red-800)",
    },
    '@media': {
        '(max-width: 991px)': {
            marginLeft: 0,
            paddingLeft: 0,
            width: "100%",
            flex: "unset",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            ":before": {
                display: "none",
            },
        },
    }
})

export const titleDetail = style({
    fontSize: "6.1rem",
    lineHeight: "7.1rem",
    marginBottom: "1.3rem",
    '@media': {
        '(max-width: 1100px)': {
            fontSize: "4.8rem",
            lineHeight: "112%",
        },
        '(max-width: 991px)': {
            textAlign: "center",
        }
    }
})

export const textDetail = style({
    color: "var(--gray-400)",
    fontSize: "1.6rem",
    lineHeight: "2.4rem",
    "@media": {
        '(max-width: 991px)': {
            textAlign: "center",
        }
    }
})