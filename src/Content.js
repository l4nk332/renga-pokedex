import { element, scopeStyles } from 'renga'
import Avatar from './Avatar.js'
import Overview from './Overview.js'

const { main, style, section } = element

const { classNames: cn, styles } = scopeStyles('Content', `
  .avatar {
    grid-area: avatar;
  }

  .overview {
    grid-area: overview;
  }

  .stats {
    grid-area: stats;
    background: var(--gray300);
  }

  .description {
    grid-area: description;
    background: var(--gray300);
  }

  .evolution {
    grid-area: evolution;
    background: var(--gray300);
  }

  .types {
    grid-area: types;
    background: var(--gray300);
  }

  .moves {
    grid-area: moves;
    background: var(--gray300);
  }

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-gap: var(--s-8);
    grid-template-areas:
      "avatar overview stats"
      "description description stats"
      "evolution evolution moves"
      "types types moves";
    padding: var(--s-8);
    min-height: calc(100vh - var(--s-12));
  }
`)

const AVATAR = { src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' }

const OVERVIEW = {
  name: 'Ivysaur',
  number: '#002',
  species: 'seed pokémon',
  types: ['grass', 'poison'],
  height: '3ft 3in',
  weight: '28.7 lbs',
  abilities: ['Overgrow', 'Chlorophyll']
}

const Content = () => (
  main({class: cn.container}, [
    section({class: cn.avatar}, Avatar(AVATAR)),
    section({class: cn.overview}, Overview(OVERVIEW)),
    section({class: cn.stats}),
    section({class: cn.description}),
    section({class: cn.evolution}),
    section({class: cn.types}),
    section({class: cn.moves})
  ])
)

document.body.appendChild(style(styles))

export default Content
