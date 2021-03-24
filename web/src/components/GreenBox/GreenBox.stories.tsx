import GreenBox from './GreenBox'

const text = 'The text of a green box.'

export const generated = () => {
  return <GreenBox>{text}</GreenBox>
}

export default { title: 'Components/GreenBox' }
