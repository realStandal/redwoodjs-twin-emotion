import RedBox from './RedBox'

const text = 'The text of a red box.'

export const generated = () => {
  return <RedBox>{text}</RedBox>
}

export default { title: 'Components/RedBox' }
