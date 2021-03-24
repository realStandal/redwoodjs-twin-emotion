import { render } from '@redwoodjs/testing'

import GreenBox from './GreenBox'

describe('GreenBox', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GreenBox />)
    }).not.toThrow()
  })
})
