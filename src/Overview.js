import { element, scopeStyles } from 'renga'

const { header, section, style, h2, h3, small, span } = element

function flex(dir, wrap, align, justify, isInline) {
  return `
    display: ${isInline ? 'inline-flex' : 'flex'};
    flex-flow: ${dir} ${wrap};
    align-items: ${align};
    justify-content: ${justify};
  `
}

const { classNames: cn, styles } = scopeStyles('Overview', `
  .container {
    padding: var(--s-4) var(--s-6);
    background: var(--gray300);
    box-shadow: var(--shadow);
  }

  .header {
    margin-bottom: var(--s-6);
  }

  .top {
    ${flex('row', 'nowrap', 'flex-end', 'space-between')}
    margin-bottom: var(--s-1);
  }

  .name {
    font-size: var(--s-6);
  }

  .number {
    font-size: var(--s-4);
    color: var(--gray600);
  }

  .species {
    font-size: var(--s-3);
    color: var(--gray600);
  }
`)

const Overview = ({
  name,
  number,
  species,
  types,
  height,
  weight,
  abilities
}) => (
  section({class: cn.container}, [
    header({class: cn.header}, [
      section({class: cn.top}, [
        h2({class: cn.name}, name),
        h3({class: cn.number}, number)
      ]),
      small({class: cn.species}, species)
    ])
  ])
)

document.body.appendChild(style(styles))

export default Overview
