import PossiblyRedBox from './PossiblyRedBox'

const text = 'The text of a possibly red box.'

export const NotRed = () => {
  return <PossiblyRedBox>{text}</PossiblyRedBox>
}

export const Red = () => {
  return <PossiblyRedBox red>{text}</PossiblyRedBox>
}

export default { title: 'Components/PossiblyRedBox' }
