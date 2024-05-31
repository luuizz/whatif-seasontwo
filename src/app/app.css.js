import { globalStyle } from "@vanilla-extract/css";

const styles = [
    { tag: 'h1', fontSize: '7.6rem', fontweight: 700 },
    { tag: 'h2', fontSize: '6.1rem', fontweight: 600 },
    { tag: 'h3', fontSize: '4.9rem', fontweight: 600 },
    { tag: 'h4', fontSize: '3.9rem', fontweight: 600 },
    { tag: 'h5', fontSize: '3.1rem', fontweight: 600 },
    { tag: 'h6', fontSize: '2.5rem', fontweight: 600 },
]

styles.forEach(style => {
    globalStyle(style.tag, {
      fontSize: style.fontSize,
      fontWeight: style.fontweight
    });
  });

  globalStyle(':root', {
    '--gray-100': '#E1E0E7',
    '--gray-200': '#C6C5CE',
    '--gray-400': '#ACABB7',
    '--gray-500': '#8C8A97',
    '--gray-600': '#7A7786',
    '--gray-700': '#5F5C6B',
    '--gray-800': '#4E4B59',
    '--gray-900': '#33303E',
    '--red-900': '#FF0000',
    '--red-800': '#FF040D',
    '--white': '#fff',
    '--black': '#000',
    '--header-height': '9.6rem',
})

globalStyle(
    '*', {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        WebkitFontSmoothing: "antialiased",
    }
)

globalStyle('html, body', {
    fontSize: '62.5%',
    overflowX: 'hidden'
})

globalStyle('body', {
    backgroundColor: 'var(--black)',
    color: 'var(--white)',
    "&::-webkit-scrollbar": {
        width: "0.5rem",
        height: "0.5rem",
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: "transparent",
        borderRadius: "5px",
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "var(--red-800)",
    }
})

globalStyle('img', {
    maxWidth: '100%',
    display: 'block'
})

globalStyle('a', {
    display: 'inline-block',
    textDecoration: 'none',
})

globalStyle('ul', {
    listStyle: "none"
})

globalStyle('button', {
    background: 'transparent',
    border: 'none',
    outline: 'none',
    cursor: 'pointer'
})

globalStyle('.container', {
    margin: '0 auto',
    width: "100%",
    maxWidth: "124.6rem",
})

globalStyle('::selection', {
    backgroundColor: 'var(--red-900)',
    color: 'var(--gray-100)'
 })

 globalStyle('h1, h2, h3, h4, h5, h6', {
    lineHeight: "120%"
})

globalStyle('p', {
    fontSize: '1.6rem',
    lineHeight: '150%'
})

