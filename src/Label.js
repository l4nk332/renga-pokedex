import { element, scopeStyles } from 'renga'

const { span, style } = element

const { classNames: cn, styles } = scopeStyles('Label', `
  .container {
    font-size: var(--text-sm);
    color: var(--gray600);
    font-variant: small-caps;
  }
`)

const Label = ({text}) => span({class: cn.container}, text)

document.body.appendChild(style(styles))

export default Label
