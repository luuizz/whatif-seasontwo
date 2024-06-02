import { style } from "@vanilla-extract/css";

export const HeaderStyle = style({
    "&.is-home": {
        position: "absolute",
        top: "0",
        zIndex: 2025,
    },
    width: "100%",
    height: "var(--header-height)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
    display: "flex",
    alignItems: "center",
    ".hamburger-react": {
        display: "none",
    },
    '@media': {
        '(max-width: 991px)': {
            ".hamburger-react": {
                display: "block",
            },
        }
    }
})

export const menuHeaderStyle = style({
    display: "none",
    '@media': {
        '(max-width: 991px)': {
            display: "block",
        }
    }
})

export const containerHeaderStyle = style({
    height: "100%",
    borderLeft: "1px solid rgba(255,255, 255, 0.20)",
    borderRight: "1px solid rgba(255,255, 255, 0.20)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
})

export const navHeaderStyle = style({
    display: "flex",
    paddingRight: "2.4rem",
    height: "100%",
    '@media': {
        '(max-width: 991px)': {
            display: "none",
        }
    }
})

export const areaCodeHeaderStyle = style({
    borderLeft: "1px solid rgba(255,255, 255, 0.20)",
    paddingLeft: "2.4rem",
    display: "flex",
    alignItems: "center"
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
})

export const linkNavigation = style({
    fontSize: "1.4rem",
    color: "var(--gray-100)",
    position: "relative",
    transition: "color .3s ease",
    ":hover": {
        color: "var(--white)",
    }
})

export const detailNavigation = style({
    position: "absolute",
    left: "0rem",
    top: "100%",
    display: "block",
    height: "0.1rem",
    backgroundColor: "var(--red-900)",
    width: "100%",
})

export const asideMenuStyle = style({
    padding: "6.4rem 0px",
    width: "100%",
    height: "calc(100vh - var(--header-height))",
    backgroundColor: 'var(--black)',
    opacity: 0,
    pointerEvents: "none",
    top: "var(--header-height)",
    transition: "all 0.3s ease 0s",
    transform: "translateY(100%)",
    zIndex: 50,
    position: "fixed",
    "&.open": {
        pointerEvents: "all",
        opacity: 1,
        transform: "translateY(0px)",
    },
})

export const asideContainerStyle = style({
    padding: "0 2.4rem",
})

export const asideGroupList = style({
    display: "flex",
    flexDirection: "column",
    gap: "4rem"
})

export const asideListItem = style({
    fontSize: "2.4rem",
    color: "var(--white)",
})

