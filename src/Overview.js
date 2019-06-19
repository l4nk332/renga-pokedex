import { element, scopeStyles } from 'renga'

import Label from './Label.js'
import Pill from './Pill.js'
import { flex } from './styles/mixins.js'

const {
  header,
  section,
  style,
  h2,
  h3,
  small,
  span,
  table,
  thead,
  tbody,
  tr,
  th,
  td
} = element

const { classNames: cn, styles } = scopeStyles('Overview', `
  .container {
    padding: var(--s-4) var(--s-6);
    background: var(--gray300);
    box-shadow: var(--shadow);
    min-width: 285px;
  }

  .header {
    margin-bottom: var(--s-6);
  }

  .top {
    ${flex('row', 'nowrap', 'flex-end', 'space-between')}
    margin-bottom: var(--s-1);
  }

  .name {
    font-size: var(--text-2xl);
  }

  .number {
    font-size: var(--text-base);
    color: var(--gray600);
  }

  .species {
    font-size: var(--text-sm);
    color: var(--gray600);
  }

  .label {
    padding: var(--s-1) 0;
  }

  .value {
    font-size: var(--text-xs);
    padding-left: var(--s-3);
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
    ]),
    table(
      tbody([
        tr([
          td({class: cn.label}, Label({text: 'type'})),
          td(
            {class: cn.value, style: {paddingLeft: '2px'}},
            types.map(type => Pill({type}))
          )
        ]),
        tr([
          td({class: cn.label}, Label({text: 'height'})),
          td({class: cn.value}, height),
        ]),
        tr([
          td({class: cn.label}, Label({text: 'weight'})),
          td({class: cn.value}, weight),
        ]),
        tr([
          td({class: cn.label}, Label({text: 'abilities'})),
          td({class: cn.value}, abilities.join(', '))
        ]),
      ])
    )
  ])
)

document.body.appendChild(style(styles))

export default Overview
