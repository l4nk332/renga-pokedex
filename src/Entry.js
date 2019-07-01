import { element, scopeStyles } from 'renga'
import { flex } from './styles/mixins.js'

const { section, p, span, style } = element

const { classNames: cn, styles } = scopeStyles('Entry', `
  .container {
    ${flex('column', 'nowrap', 'flex-start', 'flex-start')}
    font-size: var(--text-base);
    background: var(--gray300);
    padding: var(--s-5) var(--s-6);
  }

  .quote {
    color: var(--gray600);
    font-style: italic;
    font-weight: 600;
    margin: 0 0 var(--s-3) 0;
  }

  .author {
    align-self: flex-end;
    color: var(--gray600);
  }
`)

const Entry = ({text, author}) => (
  section({class: cn.container}, [
    p({class: cn.quote}, `"${text}"`),
    span({class: cn.author}, `- ${author}`)
  ])
)

document.body.appendChild(style(styles))

export default Entry
