import tw, { styled } from 'twin.macro'

export interface PossiblyRedBoxProps {
  red?: boolean
}

const PossiblyRedBox = styled.div<PossiblyRedBoxProps>`
  ${({ red }) => red && tw`bg-red-500`}
`

export default PossiblyRedBox
