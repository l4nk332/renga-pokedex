import { element, scopeStyles } from 'renga'
import { flex } from './styles/mixins.js'
import { TYPE } from './constants.js'

const { label, style } = element


const PILL_TYPE = {
  [TYPE.GRASS]: { bgColor: '#38A169', color: '#F7FAFC' },
  [TYPE.POISON]: { bgColor: '#9F7AEA', color: '#F7FAFC' }
}

const typeStyles =
  Object.entries(PILL_TYPE)
    .map(([type, typeStyle]) => `
      .${type} {
        background-color: ${typeStyle.bgColor};
        color: ${typeStyle.color};
        border-color: ${typeStyle.bgColor};
      }

      .outlined.${type} {
        background-color: transparent;
        color: ${typeStyle.bgColor};
      }
    `)
    .join('')

const { classNames: cn, styles } = scopeStyles('Pill', `
  .container {
    ${flex('row', 'nowrap', 'center', 'center', true)}
    border-radius: 20px;
    border: 1px solid transparent;
    padding: var(--s-1) var(--s-2);
    line-height: 1;
  }

  .container:not(:last-child) {
    margin-right: var(--s-1);
  }

  ${typeStyles}
`)



const Pill = ({type, outlined}) => (
  label({class: `${cn.container} ${cn[type]} ${outlined ? cn.outlined : ''}`}, type)
)

document.body.appendChild(style(styles))

export default Pill
