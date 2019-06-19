import { element, scopeStyles } from 'renga'
import Content from './Content.js'

const { header, aside, main, article, style, fragment, input } = element

const { classNames: cn, styles } = scopeStyles('Body', `
  .header {
    grid-area: header;
    background: var(--gray300);
  }

  .sidebar {
    grid-area: sidebar;
    background: var(--gray300);
    padding: 0px var(--s-3);
  }

  .content {
    grid-area: main;
    background: white;
  }

  .container {
    display: grid;
    grid-template-columns: var(--s-48) 1fr;
    grid-template-rows: var(--s-12) auto;
    grid-template-areas:
      "header header"
      "sidebar main";
    min-height: 100vh;
  }

  .search {
    display: block;
    font-size: var(--text-base);
    outline: none;
    padding: var(--s-3) var(--s-2);
    width: 100%;
    border: none;
    margin: auto;
    border-radius: 2px;
    box-shadow: var(--shadow-inner);
  }

  .search::placeholder {
    color: var(--gray500);
  }

  .search:focus {
    outline: 2px solid var(--indigo300);
  }
`)

const Body = () => (
  main({class: cn.container}, [
    header({class: cn.header}),
    aside({class: cn.sidebar}, fragment(
      input({type: 'text', placeholder: 'Search...', class: cn.search})
    )),
    article({class: cn.content}, Content())
  ])
)

document.body.appendChild(style(styles))

export default Body
