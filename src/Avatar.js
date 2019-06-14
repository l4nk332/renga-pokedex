import { element, scopeStyles } from 'renga'

const { figure, img, style } = element

const { classNames: cn, styles } = scopeStyles('Avatar', `
  .container {
    width: var(--s-48);
    height: var(--s-48);
    border-radius: 50%;
    background: var(--gray300);
    box-shadow: var(--shadow-inner);
  }

  .image {
    width: 100%;
  }
`)

const Avatar = ({ src }) => (
  figure({class: cn.container}, img({class: cn.image, src, alt: 'Ivysaur default sprite'}))
)

document.body.appendChild(style(styles))

export default Avatar
