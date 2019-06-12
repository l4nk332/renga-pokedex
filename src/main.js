import { element } from 'renga'

const { section, h1 } = element

document.body.appendChild(
  section({style: {minHeight: '100vh', display: 'flex', flexFlow: 'row nowrap', alignItems: 'center', justifyContent: 'center', fontFamily: 'Helvetica'}}, h1('renga pokédex'))
)
