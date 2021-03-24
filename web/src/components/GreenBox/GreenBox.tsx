import tw, { css } from 'twin.macro'

const bgStyles = css`
  & {
    ${tw`bg-green-500`}
  }
`

const GreenBox = ({ children }) => <div css={bgStyles}>{children}</div>

export default GreenBox
