import { element, scopeStyles } from 'renga'

const { figure, img, style } = element

const { classNames: cn, styles } = scopeStyles('Avatar', `
  .container {
    width: var(--s-48);
    height: var(--s-48);
    margin: 0 auto;
    border-radius: 50%;
    background: var(--gray300);
    box-shadow: var(--shadow-inner);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
`)

const Avatar = ({ src }) => (
  figure({class: cn.container, style: {backgroundImage: `url('${src}')`}})
)

document.body.appendChild(style(styles))

export default Avatar
